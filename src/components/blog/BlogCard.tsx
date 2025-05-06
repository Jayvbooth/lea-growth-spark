
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';
import { BlogPost } from '@/types/blog';

export interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  post,
  className,
}) => {
  const { id, title, author, publishDate, category, excerpt, tags, featuredImage, readTime } = post;
  
  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Card className={cn(
      "overflow-hidden border border-monochrome-100 transition-all duration-300 hover:shadow-card-hover hover:translate-y-[-5px] hover:border-green-300/50",
      className
    )}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={featuredImage} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
            target.onerror = null;
          }}
        />
        <div className="absolute top-4 right-4">
          <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1.5 rounded-full whitespace-nowrap">
            {category}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 text-monochrome-600 text-sm mb-3">
          <Calendar className="h-4 w-4" />
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{readTime} min read</span>
        </div>
        
        <h3 className="text-lg font-bold mb-3 line-clamp-2 hover:text-green-600 transition-colors">
          <Link to={`/blog/${id}`}>{title}</Link>
        </h3>
        
        <p className="text-monochrome-600 text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <Link 
              key={index}
              to={`/blog/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}
              className="inline-flex items-center text-xs bg-monochrome-100 text-monochrome-700 px-2.5 py-1.5 rounded-full whitespace-nowrap hover:bg-monochrome-200 transition-colors"
            >
              #{tag}
            </Link>
          ))}
          {tags.length > 3 && (
            <span className="text-xs text-monochrome-500 px-2 py-1">
              +{tags.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-monochrome-100">
          <div className="flex items-center">
            <img 
              src={author.avatar} 
              alt={author.name}
              className="w-8 h-8 rounded-full mr-3"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
                target.onerror = null;
              }}
            />
            <span className="text-sm font-medium">{author.name}</span>
          </div>
          
          <Link 
            to={`/blog/${id}`}
            className="text-green-600 text-sm font-medium hover:text-green-700 transition-colors"
          >
            Read more
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
