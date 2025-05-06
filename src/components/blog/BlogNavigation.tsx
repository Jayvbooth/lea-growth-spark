
import React from 'react';
import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface BlogNavigationProps {
  blogPost?: BlogPost;
  currentPage?: string;
  category?: string;
  tag?: string;
  prevPost?: BlogPost;
  nextPost?: BlogPost;
}

export const BlogBreadcrumb: React.FC<BlogNavigationProps> = ({
  blogPost,
  currentPage,
  category,
  tag
}) => {
  return (
    <Breadcrumb className="mb-8">
      <BreadcrumbList className="flex flex-wrap text-sm text-monochrome-500">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        <BreadcrumbSeparator />
        
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/blog" className="hover:text-green-600 transition-colors">Blog</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        {category && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link 
                  to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="hover:text-green-600 transition-colors"
                >
                  {category}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        
        {tag && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link 
                  to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="hover:text-green-600 transition-colors"
                >
                  #{tag}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        
        {blogPost && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-monochrome-800 truncate max-w-[200px] md:max-w-xs">
                {blogPost.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
        
        {currentPage && !blogPost && !category && !tag && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export const BlogPostNavigation: React.FC<{ prevPost?: BlogPost, nextPost?: BlogPost }> = ({ 
  prevPost, 
  nextPost 
}) => {
  return (
    <div className="flex items-center justify-between border-t border-monochrome-100 mt-12 pt-8">
      <div>
        {prevPost && (
          <Link 
            to={`/blog/${prevPost.id}`}
            className="flex items-center text-monochrome-600 hover:text-green-600 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            <div>
              <div className="text-xs">Previous Post</div>
              <div className="font-medium max-w-[180px] truncate">{prevPost.title}</div>
            </div>
          </Link>
        )}
      </div>
      
      <Button asChild variant="outline" className="hidden sm:inline-flex">
        <Link to="/blog">All Posts</Link>
      </Button>
      
      <div>
        {nextPost && (
          <Link
            to={`/blog/${nextPost.id}`}
            className="flex items-center text-monochrome-600 hover:text-green-600 transition-colors"
          >
            <div className="text-right">
              <div className="text-xs">Next Post</div>
              <div className="font-medium max-w-[180px] truncate">{nextPost.title}</div>
            </div>
            <ChevronRight className="h-5 w-5 ml-2" />
          </Link>
        )}
      </div>
    </div>
  );
};
