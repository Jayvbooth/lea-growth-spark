
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { BlogPost } from '@/types/blog';
import { Calendar, Tag, Heading } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  return (
    <div className={cn("space-y-8", className)}>
      {/* Search */}
      <Card>
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
                  className="w-16 h-16 object-cover rounded mr-3 flex-shrink-0"
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
      <Card>
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
      <Card>
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
                className="inline-flex items-center text-sm bg-monochrome-100 text-monochrome-700 px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-green-100 hover:text-green-700 transition-colors"
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
