
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { blogPosts, categories } from "@/data/blogData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { Spinner } from "@/components/ui/spinner";

// Helper function to generate a slug
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');
};

// Helper function to calculate read time
const calculateReadTime = (content: string) => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};

const BlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isEditMode = Boolean(id);
  const [loading, setLoading] = useState(isEditMode);
  
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    author: {
      name: user?.user_metadata?.name || "",
      avatar: "",
    },
    featuredImage: "",
    slug: "",
    status: "draft"
  });

  useEffect(() => {
    if (isEditMode && id) {
      const fetchBlogPost = async () => {
        try {
          setLoading(true);
          const { data, error } = await supabase
            .from("blog_posts")
            .select("*")
            .eq("id", id)
            .single();
          
          if (error) throw error;
          
          if (data) {
            setFormData({
              title: data.title,
              excerpt: data.excerpt,
              content: data.content,
              category: data.category,
              tags: Array.isArray(data.tags) ? data.tags.join(", ") : "",
              author: {
                name: data.author_name,
                avatar: data.author_avatar || "",
              },
              featuredImage: data.featured_image || "",
              slug: data.slug,
              status: data.status
            });
          } else {
            toast.error("Blog post not found");
            navigate("/blog-management");
          }
        } catch (error: any) {
          toast.error(error.message || "Error fetching blog post");
          navigate("/blog-management");
        } finally {
          setLoading(false);
        }
      };
      
      fetchBlogPost();
    }
  }, [id, isEditMode, navigate]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      // Handle nested objects like author.name
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          // This is safe because we know parent is an object key from formData
          ...(formData[parent as keyof typeof formData] as object),
          [child]: value,
        },
      });
    } else {
      // Auto-generate slug when title changes
      if (name === 'title' && !isEditMode) {
        setFormData({
          ...formData,
          [name]: value,
          slug: generateSlug(value)
        });
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Process tags correctly handling different data types
      let processedTags: string[] = [];
      
      if (typeof formData.tags === 'string') {
        // If tags is a string (from the form input), split it into an array
        processedTags = formData.tags.split(',').map(tag => tag.trim()).filter(Boolean);
      } else if (Array.isArray(formData.tags)) {
        // If it's already an array, use it directly
        processedTags = formData.tags;
      }
      
      // Calculate read time if not provided
      const readTime = calculateReadTime(formData.content);
      
      const blogData = {
        title: formData.title,
        slug: formData.slug || generateSlug(formData.title),
        author_id: user?.id,
        author_name: formData.author.name || user?.user_metadata?.name || user?.email?.split('@')[0] || "Anonymous",
        author_avatar: formData.author.avatar,
        category: formData.category,
        tags: processedTags,
        featured_image: formData.featuredImage,
        excerpt: formData.excerpt,
        content: formData.content,
        read_time: readTime,
        status: formData.status,
        // SEO fields
        seo_meta_title: formData.title,
        seo_meta_description: formData.excerpt,
        seo_keywords: processedTags,
        last_updated: new Date().toISOString()
      };

      let result;
      
      if (isEditMode) {
        // Update existing blog post
        result = await supabase
          .from("blog_posts")
          .update(blogData)
          .eq("id", id);
          
        if (result.error) throw result.error;
        toast.success("Blog post updated successfully!");
      } else {
        // Create new blog post
        result = await supabase
          .from("blog_posts")
          .insert([blogData]);
          
        if (result.error) throw result.error;
        toast.success("Blog post created successfully!");
      }

      navigate("/blog-management");
    } catch (error: any) {
      toast.error(error.message || "Error saving blog post");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen py-16 bg-[#FAFBFC] grain-overlay flex items-center justify-center">
          <Spinner size="lg" />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{isEditMode ? "Edit Blog Post" : "Create New Blog Post"}</title>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen py-16 bg-[#FAFBFC] grain-overlay">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto card-shadow-lg">
            <CardHeader>
              <CardTitle>
                {isEditMode ? "Edit Blog Post" : "Create New Blog Post"}
              </CardTitle>
              <CardDescription>
                {isEditMode
                  ? "Update your blog post content and settings"
                  : "Fill in the details to create a new blog post"}
              </CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-sm font-medium">
                    Title
                  </label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter blog post title"
                    required
                    className="w-full"
                  />
                </div>

                {/* Slug */}
                <div className="space-y-2">
                  <label htmlFor="slug" className="block text-sm font-medium">
                    Slug
                  </label>
                  <Input
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    placeholder="url-friendly-slug"
                    required
                    className="w-full"
                  />
                  <p className="text-xs text-monochrome-500">
                    URL-friendly version of the title. Automatically generated but can be edited.
                  </p>
                </div>

                {/* Featured Image URL */}
                <div className="space-y-2">
                  <label htmlFor="featuredImage" className="block text-sm font-medium">
                    Featured Image URL
                  </label>
                  <Input
                    id="featuredImage"
                    name="featuredImage"
                    value={formData.featuredImage}
                    onChange={handleInputChange}
                    placeholder="Enter image URL"
                    className="w-full"
                  />
                  {formData.featuredImage && (
                    <div className="mt-2">
                      <img
                        src={formData.featuredImage}
                        alt="Preview"
                        className="h-40 object-cover rounded-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Excerpt */}
                <div className="space-y-2">
                  <label htmlFor="excerpt" className="block text-sm font-medium">
                    Excerpt
                  </label>
                  <Textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    placeholder="Brief summary of the post"
                    className="w-full"
                    rows={3}
                    required
                  />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <label htmlFor="content" className="block text-sm font-medium">
                    Content
                  </label>
                  <Textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    placeholder="Write your blog post content here"
                    className="w-full min-h-[300px]"
                    required
                  />
                </div>

                {/* Status */}
                <div className="space-y-2">
                  <label htmlFor="status" className="block text-sm font-medium">
                    Status
                  </label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => handleSelectChange("status", value)}
                  >
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select post status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <label htmlFor="category" className="block text-sm font-medium">
                    Category
                  </label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => handleSelectChange("category", value)}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <label htmlFor="tags" className="block text-sm font-medium">
                    Tags
                  </label>
                  <Input
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="Enter tags separated by commas"
                    className="w-full"
                  />
                </div>

                {/* Author */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="author.name"
                      className="block text-sm font-medium"
                    >
                      Author Name
                    </label>
                    <Input
                      id="author.name"
                      name="author.name"
                      value={formData.author.name}
                      onChange={handleInputChange}
                      placeholder="Enter author name"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="author.avatar"
                      className="block text-sm font-medium"
                    >
                      Author Avatar URL
                    </label>
                    <Input
                      id="author.avatar"
                      name="author.avatar"
                      value={formData.author.avatar}
                      onChange={handleInputChange}
                      placeholder="Enter avatar URL"
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/blog-management")}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-green-600 text-white" disabled={loading}>
                  {loading ? 
                    "Saving..." : 
                    isEditMode ? "Update Post" : "Create Post"
                  }
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogEditor;
