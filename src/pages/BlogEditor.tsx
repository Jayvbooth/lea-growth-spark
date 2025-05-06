
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { blogPosts, getAllBlogCategories } from "@/data/blogData";
import { BlogFormData, BlogPost } from "@/types/blog";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Save, Image, AlertCircle } from "lucide-react";

// Simple auth check function - in a real app, this would check session/token
const isAuthenticated = () => {
  // This is a mock auth check - in a real app, you'd validate a token/session
  return true; // Simulate a logged-in user for demo purposes
};

const BlogEditor: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const allCategories = getAllBlogCategories();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  
  useEffect(() => {
    // Check authentication when component mounts
    const authCheck = isAuthenticated();
    setIsAuthorized(authCheck);
    
    if (!authCheck) {
      toast.error("You must be logged in to access this page");
      navigate("/blog");
    }
  }, [navigate]);
  
  // Initialize the form with default values or the existing blog post data
  const form = useForm<BlogFormData>({
    defaultValues: {
      title: "",
      slug: "",
      author: {
        name: "",
        avatar: "/placeholder.svg"
      },
      publishDate: new Date().toISOString().split('T')[0],
      category: allCategories[0],
      tags: [],
      featuredImage: "",
      excerpt: "",
      content: "",
      seo: {
        metaTitle: "",
        metaDescription: "",
        keywords: []
      }
    }
  });
  
  useEffect(() => {
    if (isEditing && id) {
      // Find the post in the existing data
      const post = blogPosts.find(post => post.id === id);
      if (post) {
        // Format the date to YYYY-MM-DD for the input field
        const formattedDate = new Date(post.publishDate).toISOString().split('T')[0];
        
        form.reset({
          ...post,
          publishDate: formattedDate,
          // Convert tags array to comma-separated string for editing
          tags: post.tags,
        });
        
        setPreviewUrl(post.featuredImage);
      } else {
        toast.error("Blog post not found");
        navigate("/blog-management");
      }
    }
  }, [id, isEditing, navigate, form]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // In a real app, this would upload to a server and get a URL back
    // For demo purposes, we'll create a local object URL
    const tempUrl = URL.createObjectURL(file);
    setPreviewUrl(tempUrl);
    form.setValue("featuredImage", tempUrl);
  };
  
  const onSubmit = (data: BlogFormData) => {
    // In a real app, this would call an API to save the post
    
    // Generate ID for new posts
    const postId = isEditing ? id! : (blogPosts.length + 1).toString();
    
    // Calculate read time (simple implementation)
    const contentWords = data.content.trim().split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(contentWords / 200)); // Assuming average reading speed of 200 words per minute
    
    // Create slug if not provided
    const slug = data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    // Process tags correctly handling different data types
    let processedTags: string[];
    if (Array.isArray(data.tags)) {
      processedTags = data.tags;
    } else if (typeof data.tags === 'string') {
      processedTags = data.tags.split(',').map(tag => tag.trim());
    } else {
      processedTags = [];
    }
    
    const newPost: BlogPost = {
      ...data,
      id: postId,
      slug,
      readTime,
      tags: processedTags
    };
    
    toast.success(isEditing ? "Blog post updated!" : "New blog post created!");
    console.log("Saved blog post:", newPost);
    
    // Navigate back to management page
    setTimeout(() => navigate("/blog-management"), 1000);
  };

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-32 pb-20 flex items-center justify-center">
          <Card className="max-w-md w-full">
            <CardContent className="p-6 text-center">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Authentication Required</h2>
              <p className="text-monochrome-600 mb-4">
                You must be logged in to access the blog editor.
              </p>
              <Button 
                onClick={() => navigate("/blog")}
                className="w-full"
              >
                Return to Blog
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{isEditing ? "Edit Blog Post" : "Create New Blog Post"} | Leadea</title>
      </Helmet>

      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">
                {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
              </h1>
              <p className="text-monochrome-600">Fill in the details below to {isEditing ? "update your" : "create a new"} blog post</p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => navigate("/blog-management")}
              >
                Cancel
              </Button>
              <Button 
                onClick={form.handleSubmit(onSubmit)} 
                className="bg-green-600 hover:bg-green-700"
              >
                <Save className="h-4 w-4 mr-2" />
                {isEditing ? "Update Post" : "Save Post"}
              </Button>
            </div>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Main content column */}
                    <div className="md:col-span-2 space-y-4">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter blog post title" 
                                {...field} 
                                className="text-lg"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="excerpt"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Excerpt</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Brief summary of your post (shown in listings)" 
                                {...field} 
                                className="resize-none h-20"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Content</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Your blog post content (supports HTML)" 
                                {...field} 
                                className="resize-none min-h-[300px]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Sidebar column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Featured Image</h3>
                        <div className="border rounded-lg overflow-hidden mb-3">
                          {previewUrl ? (
                            <img 
                              src={previewUrl} 
                              alt="Featured" 
                              className="w-full h-40 object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = '/placeholder.svg';
                                target.onerror = null;
                              }}
                            />
                          ) : (
                            <div className="w-full h-40 bg-monochrome-100 flex items-center justify-center text-monochrome-400">
                              <div className="text-center">
                                <Image className="h-8 w-8 mx-auto mb-2" />
                                <span>No image selected</span>
                              </div>
                            </div>
                          )}
                        </div>
                        <Label htmlFor="featured-image" className="cursor-pointer">
                          <div className="flex items-center justify-center w-full p-3 border border-dashed rounded-lg bg-monochrome-50 hover:bg-monochrome-100 transition-colors">
                            <span className="text-sm text-center text-monochrome-600">Upload image</span>
                          </div>
                          <Input 
                            id="featured-image" 
                            type="file" 
                            accept="image/*"
                            onChange={handleImageChange} 
                            className="hidden"
                          />
                        </Label>
                        <p className="text-xs text-monochrome-500 mt-1">
                          Recommended size: 1200x630px
                        </p>
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectGroup>
                                    {allCategories.map((category) => (
                                      <SelectItem key={category} value={category}>
                                        {category}
                                      </SelectItem>
                                    ))}
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="tags"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tags (comma separated)</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="marketing, strategy, growth" 
                                  value={field.value.join ? field.value.join(', ') : field.value}
                                  onChange={(e) => {
                                    const tags = e.target.value.split(',').map(tag => tag.trim()).filter(Boolean);
                                    field.onChange(tags);
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="publishDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Publish Date</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Separator />

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Author</h3>
                        <FormField
                          control={form.control}
                          name="author.name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Author name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <Separator />

                      <div>
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="outline" className="w-full justify-start">
                              SEO Settings
                            </Button>
                          </SheetTrigger>
                          <SheetContent className="w-full sm:max-w-md">
                            <SheetHeader className="mb-6">
                              <SheetTitle>SEO Settings</SheetTitle>
                              <SheetDescription>
                                Optimize your blog post for search engines
                              </SheetDescription>
                            </SheetHeader>
                            <div className="space-y-4">
                              <FormField
                                control={form.control}
                                name="seo.metaTitle"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Meta Title</FormLabel>
                                    <FormControl>
                                      <Input placeholder="SEO title" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="seo.metaDescription"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Meta Description</FormLabel>
                                    <FormControl>
                                      <Textarea placeholder="Brief description for search engines" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="slug"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>URL Slug</FormLabel>
                                    <FormControl>
                                      <Input placeholder="your-post-url" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </SheetContent>
                        </Sheet>
                      </div>
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogEditor;
