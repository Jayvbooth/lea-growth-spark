
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BlogCard from '@/components/blog/BlogCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogFilter from '@/components/blog/BlogFilter';
import { BlogBreadcrumb } from '@/components/blog/BlogNavigation';
import { 
  getAllBlogCategories, 
  getAllBlogTags,
  getBlogPostsByCategory, 
  getBlogPostsByTag, 
  getRecentBlogPosts 
} from '@/data/blogData';
import { BlogPost } from '@/types/blog';
import { supabase } from '@/integrations/supabase/client';
import { Spinner } from '@/components/ui/spinner';

const Blog: React.FC = () => {
  const { categorySlug, tagSlug } = useParams<{ categorySlug?: string, tagSlug?: string }>();
  const location = useLocation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [title, setTitle] = useState("Blog");
  const [subtitle, setSubtitle] = useState("Latest insights, guides and industry trends");
  const [loading, setLoading] = useState(true);
  
  // For now, we'll continue using the mock data for categories and tags
  // In a future update, these could be fetched from Supabase too
  const allCategories = getAllBlogCategories();
  const allTags = getAllBlogTags();
  
  // Get popular tags (in a real app, this would be based on frequency or engagement)
  const popularTags = allTags.slice(0, 10);
  
  // Determine if we're in a category or tag view
  const isTagView = location.pathname.includes('/blog/tag/');
  const isCategoryView = location.pathname.includes('/blog/category/');
  
  // Process the current tag or category from the URL
  const currentTag = isTagView ? tagSlug : undefined;
  const currentCategory = isCategoryView ? categorySlug : undefined;
  
  // Format for display
  const displayTag = currentTag ? currentTag.replace(/-/g, ' ') : undefined;
  const displayCategory = currentCategory ? currentCategory.replace(/-/g, ' ') : undefined;
  
  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      try {
        let query = supabase
          .from("blog_posts")
          .select("*")
          .eq("status", "published")
          .order("publish_date", { ascending: false });
        
        if (isTagView && tagSlug) {
          // Convert tagSlug to tag name format
          const tag = tagSlug.replace(/-/g, ' ');
          query = query.contains("tags", [tag]);
          setTitle(`#${tag}`);
          setSubtitle(`Posts tagged with '${tag}'`);
        } else if (isCategoryView && categorySlug) {
          // Convert categorySlug to category name format
          const category = categorySlug.replace(/-/g, ' ');
          query = query.eq("category", category);
          setTitle(category);
          setSubtitle(`All posts in ${category}`);
        } else {
          setTitle("Blog");
          setSubtitle("Latest insights, guides and industry trends");
        }
        
        const { data, error } = await query;
        
        if (error) throw error;
        
        // Transform data to match BlogPost type
        const transformedPosts: BlogPost[] = data.map((post: any) => ({
          id: post.id,
          title: post.title,
          slug: post.slug,
          author: {
            name: post.author_name,
            avatar: post.author_avatar || '',
          },
          publishDate: post.publish_date,
          lastUpdated: post.last_updated,
          category: post.category,
          tags: post.tags || [],
          featuredImage: post.featured_image || '',
          excerpt: post.excerpt,
          content: post.content,
          readTime: post.read_time,
          status: post.status,
          seo: {
            metaTitle: post.seo_meta_title,
            metaDescription: post.seo_meta_description,
            keywords: post.seo_keywords,
            canonical: post.seo_canonical,
          }
        }));
        
        setPosts(transformedPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        // Fallback to mock data in case of error
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogPosts();
  }, [tagSlug, categorySlug, isTagView, isCategoryView]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{title} | Leadea</title>
        <meta name="description" content={subtitle} />
        <meta name="keywords" content="blog, insights, marketing, lead generation, business automation" />
        <meta property="og:title" content={`${title} | Leadea`} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://leadea.com${location.pathname}`} />
      </Helmet>

      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto container-padding">
          {/* Breadcrumb */}
          <BlogBreadcrumb 
            currentPage={!isTagView && !isCategoryView ? "Blog" : undefined}
            category={displayCategory}
            tag={displayTag}
          />
          
          {/* Page Title */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {title}
            </h1>
            <p className="text-monochrome-600">{subtitle}</p>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Category Filter */}
              <BlogFilter 
                categories={allCategories} 
                activeCategory={displayCategory}
              />
            
              {/* Blog Posts */}
              {loading ? (
                <div className="flex justify-center py-12">
                  <Spinner size="lg" />
                </div>
              ) : (
                <div className="space-y-8">
                  {posts.length > 0 ? (
                    posts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))
                  ) : (
                    <div className="p-8 text-center bg-monochrome-50 rounded-lg border border-monochrome-100">
                      <h3 className="text-xl font-medium mb-2">No posts found</h3>
                      <p className="text-monochrome-600">
                        There are currently no blog posts in this category. 
                        Please check back later or browse other categories.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div>
              <BlogSidebar 
                recentPosts={getRecentBlogPosts(5)}
                categories={allCategories}
                popularTags={popularTags}
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
