
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BlogBreadcrumb, BlogPostNavigation } from '@/components/blog/BlogNavigation';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { getRecentBlogPosts, getRelatedPosts, getAllBlogCategories, getAllBlogTags } from '@/data/blogData';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import { supabase } from '@/integrations/supabase/client';
import { Spinner } from '@/components/ui/spinner';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [prevPost, setPrevPost] = useState<BlogPost | undefined>(undefined);
  const [nextPost, setNextPost] = useState<BlogPost | undefined>(undefined);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (!id) return;
    
    const fetchBlogPost = async () => {
      setLoading(true);
      try {
        // Fetch the current post
        const { data: postData, error: postError } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("id", id)
          .single();
        
        if (postError) throw postError;
        
        if (!postData) {
          navigate('/blog', { replace: true });
          return;
        }
        
        // Transform to match BlogPost type
        const currentPost: BlogPost = {
          id: postData.id,
          title: postData.title,
          slug: postData.slug,
          author: {
            name: postData.author_name,
            avatar: postData.author_avatar || '',
          },
          publishDate: postData.publish_date,
          lastUpdated: postData.last_updated,
          category: postData.category,
          tags: postData.tags || [],
          featuredImage: postData.featured_image || '',
          excerpt: postData.excerpt,
          content: postData.content,
          readTime: postData.read_time,
          status: postData.status,
          seo: {
            metaTitle: postData.seo_meta_title,
            metaDescription: postData.seo_meta_description,
            keywords: postData.seo_keywords,
            canonical: postData.seo_canonical,
          }
        };
        
        setPost(currentPost);
        
        // Fetch previous and next posts
        const { data: allPostsData, error: allPostsError } = await supabase
          .from("blog_posts")
          .select("id, title, slug, publish_date")
          .eq("status", "published")
          .order("publish_date", { ascending: false });
        
        if (allPostsError) throw allPostsError;
        
        const index = allPostsData.findIndex(p => p.id === id);
        setPrevPost(index > 0 ? allPostsData[index - 1] : undefined);
        setNextPost(index < allPostsData.length - 1 ? allPostsData[index + 1] : undefined);
        
        // Fetch related posts by category
        const { data: relatedData, error: relatedError } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("status", "published")
          .eq("category", currentPost.category)
          .neq("id", id)
          .limit(2);
        
        if (relatedError) throw relatedError;
        
        const transformedRelated: BlogPost[] = relatedData.map((post: any) => ({
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
        
        setRelatedPosts(transformedRelated);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        navigate('/blog', { replace: true });
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogPost();
    // Scroll to top
    window.scrollTo(0, 0);
  }, [id, navigate]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-20 flex items-center justify-center">
          <Spinner size="lg" />
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!post) return null;
  
  const allCategories = getAllBlogCategories();
  const allTags = getAllBlogTags();
  const popularTags = allTags.slice(0, 10);
  
  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{post.seo?.metaTitle || post.title} | Leadea</title>
        <meta name="description" content={post.seo?.metaDescription || post.excerpt} />
        <meta name="keywords" content={post.seo?.keywords?.join(', ') || post.tags.join(', ')} />
        <meta property="og:title" content={post.seo?.metaTitle || post.title} />
        <meta property="og:description" content={post.seo?.metaDescription || post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:author" content={post.author.name} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <link rel="canonical" href={post.seo?.canonical || `https://leadea.com/blog/${post.id}`} />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto container-padding">
          {/* Breadcrumb */}
          <BlogBreadcrumb blogPost={post} />
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Article */}
              <article>
                {/* Featured Image */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title}
                    className="w-full h-auto object-cover"
                    style={{ maxHeight: '400px' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder.svg';
                      target.onerror = null;
                    }}
                  />
                </div>
                
                {/* Category */}
                <Link 
                  to={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-block mb-4 text-sm font-medium bg-green-100 text-green-700 px-4 py-1.5 rounded-full hover:bg-green-200 transition-colors"
                >
                  {post.category}
                </Link>
                
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-monochrome-600">
                  <div className="flex items-center">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-6 h-6 rounded-full mr-2"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                        target.onerror = null;
                      }}
                    />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{formattedDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
                
                {/* Content */}
                <div 
                  className="prose prose-green max-w-none mb-8"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 items-center border-t border-monochrome-100 pt-6 mt-8">
                  <Tag className="h-4 w-4 text-monochrome-500" />
                  <span className="text-monochrome-600 mr-2">Tags:</span>
                  {post.tags.map((tag, index) => (
                    <Link 
                      key={index}
                      to={`/blog/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}
                      className="text-sm bg-monochrome-100 text-monochrome-700 px-3 py-1 rounded-full hover:bg-green-100 hover:text-green-700 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
                
                {/* Author Info */}
                <div className="mt-10 p-6 bg-monochrome-50 rounded-lg border border-monochrome-100">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                        target.onerror = null;
                      }}
                    />
                    <div>
                      <h3 className="font-bold text-lg">{post.author.name}</h3>
                      <p className="text-monochrome-600">Content Writer at Leadea</p>
                    </div>
                  </div>
                </div>
                
                {/* Post Navigation */}
                <BlogPostNavigation prevPost={prevPost} nextPost={nextPost} />
              </article>
              
              {/* Related Posts */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.map((relatedPost) => (
                      <Link 
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.id}`}
                        className="group"
                      >
                        <div className="bg-white border border-monochrome-100 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-md flex flex-col h-full">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={relatedPost.featuredImage} 
                              alt={relatedPost.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/placeholder.svg';
                                target.onerror = null;
                              }}
                            />
                          </div>
                          <div className="p-4 flex-grow">
                            <div className="flex items-center mb-2 text-xs text-monochrome-600">
                              <Calendar className="h-3 w-3 mr-1" />
                              <span>
                                {new Date(relatedPost.publishDate).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric'
                                })}
                              </span>
                              <span className="mx-2">•</span>
                              <span>{relatedPost.readTime} min read</span>
                            </div>
                            <h3 className="font-medium group-hover:text-green-600 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="col-span-2 text-center p-8 bg-monochrome-50 rounded-lg border border-monochrome-100">
                      <p className="text-monochrome-600">No related posts found</p>
                    </div>
                  )}
                </div>
              </div>
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

export default BlogPostDetail;
