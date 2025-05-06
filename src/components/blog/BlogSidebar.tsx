
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BlogPost } from '@/types/blog';
import { Calendar, Tag, Heading, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface BlogSidebarProps {
  recentPosts: BlogPost[];
  categories: string[];
  popularTags: string[];
  className?: string;
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
  recentPosts,
  categories,
  popularTags,
  className
}) => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get('email') as string;
    if (email) {
      toast.success(`Thank you for subscribing with ${email}!`);
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <div className={cn("space-y-8", className)}>
      {/* Newsletter Card */}
      <Card className="overflow-hidden border-green-100 card-shadow hover:card-shadow-lg transition-all duration-300">
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-5">
          <div className="flex items-start space-x-3 mb-3">
            <Mail className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-green-800">Insider Newsletter</h3>
              <p className="text-sm text-green-700 mt-1">
                Get the latest insights on B2B automation, growth strategies, and industry trends directly to your inbox.
              </p>
            </div>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="mt-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                name="email"
                placeholder="Your email address" 
                className="flex-grow" 
                required 
              />
              <Button 
                type="submit" 
                className="bg-green-600 hover:bg-green-700 text-white hover:translate-y-[-2px] transition-all"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-green-600 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </Card>
      
      {/* Recent Posts */}
      <Card className="card-shadow hover:card-shadow-lg transition-all duration-300">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <Heading className="w-5 h-5 mr-2" />
            Recent Posts
          </h3>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div key={post.id} className="flex items-start group">
                <img 
                  src={post.featuredImage} 
                  alt={post.title} 
                  className="w-16 h-16 object-cover rounded-lg mr-3 flex-shrink-0 shadow-sm group-hover:shadow-md transition-all"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                    target.onerror = null;
                  }}
                />
                <div>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="font-medium line-clamp-2 group-hover:text-green-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                  <div className="flex items-center text-xs text-monochrome-500 mt-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>
                      {new Date(post.publishDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Categories */}
      <Card className="card-shadow hover:card-shadow-lg transition-all duration-300">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <Link 
                key={category}
                to={`/blog/category/${category.replace(/\s+/g, '-').toLowerCase()}`}
                className="flex items-center justify-between group py-2 border-b border-monochrome-100 last:border-0"
              >
                <span className="group-hover:text-green-600 transition-colors">{category}</span>
                <span className="bg-monochrome-100 text-monochrome-600 text-xs px-2 py-1 rounded-full group-hover:bg-green-100 group-hover:text-green-700 transition-colors">
                  {/* In a real app, you would count posts per category */}
                  {Math.floor(Math.random() * 10) + 1}
                </span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Tags */}
      <Card className="card-shadow hover:card-shadow-lg transition-all duration-300">
        <CardContent className="p-5">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <Tag className="w-5 h-5 mr-2" />
            Popular Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <Link 
                key={tag}
                to={`/blog/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}
                className="inline-flex items-center text-sm bg-monochrome-100 text-monochrome-700 px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-green-100 hover:text-green-700 transition-colors shadow-sm hover:shadow-md"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogSidebar;
