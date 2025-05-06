
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link, useLocation } from 'react-router-dom';

interface BlogFilterProps {
  categories: string[];
  activeCategory?: string;
}

const BlogFilter: React.FC<BlogFilterProps> = ({ categories, activeCategory }) => {
  const location = useLocation();
  const isAllActive = !activeCategory;
  
  return (
    <div className="mb-8">
      <Tabs defaultValue={activeCategory || 'all'} className="w-full">
        <TabsList className="w-full h-auto flex flex-wrap gap-2 bg-transparent p-0">
          <TabsTrigger 
            value="all" 
            className={`rounded-full px-4 py-2 text-sm ${
              isAllActive 
                ? 'bg-green-100 text-green-700' 
                : 'bg-monochrome-100 text-monochrome-700 hover:bg-monochrome-200'
            }`}
            asChild
          >
            <Link to="/blog">All Posts</Link>
          </TabsTrigger>
          
          {categories.map((category) => {
            const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
            const isActive = activeCategory === categorySlug;
            
            return (
              <TabsTrigger 
                key={category}
                value={categorySlug}
                className={`rounded-full px-4 py-2 text-sm ${
                  isActive 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-monochrome-100 text-monochrome-700 hover:bg-monochrome-200'
                }`}
                asChild
              >
                <Link to={`/blog/category/${categorySlug}`}>
                  {category}
                </Link>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default BlogFilter;
