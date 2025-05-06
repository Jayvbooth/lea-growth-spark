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

const BlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  
  // Check if user is authenticated (simplified mock)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // In real app, get from auth context

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    author: {
      name: "",
      avatar: "",
    },
    featuredImage: "",
  });

  useEffect(() => {
    // Redirect unauthenticated users
    if (!isAuthenticated) {
      navigate("/blog");
      toast.error("You must be logged in to access the editor");
      return;
    }
    
    if (isEditMode && id) {
      const post = blogPosts.find((post) => post.id === id);
      if (post) {
        setFormData({
          title: post.title,
          excerpt: post.excerpt,
          content: post.content,
          category: post.category,
          tags: Array.isArray(post.tags) ? post.tags.join(", ") : "",
          author: {
            name: post.author.name,
            avatar: post.author.avatar,
          },
          featuredImage: post.featuredImage,
        });
      } else {
        toast.error("Blog post not found");
        navigate("/blog");
      }
    }
  }, [id, isEditMode, navigate, isAuthenticated]);

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
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      category: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Process tags correctly handling different data types
    let processedTags: string[] = [];
    
    if (typeof formData.tags === 'string') {
      // If tags is a string (from the form input), split it into an array
      processedTags = formData.tags.split(',').map(tag => tag.trim());
    } else if (Array.isArray(formData.tags)) {
      // If it's already an array, use it directly
      processedTags = formData.tags;
    }

    const blogData = {
      ...formData,
      tags: processedTags,
      id: isEditMode ? id : `post-${Date.now()}`,
      publishDate: new Date().toISOString(),
    };

    if (isEditMode) {
      toast.success("Blog post updated successfully!");
    } else {
      toast.success("Blog post created successfully!");
    }

    // In a real app, you would save to a database/API here
    console.log("Saving blog post:", blogData);
    navigate("/blog-management");
  };

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

                {/* Category */}
                <div className="space-y-2">
                  <label htmlFor="category" className="block text-sm font-medium">
                    Category
                  </label>
                  <Select
                    value={formData.category}
                    onValueChange={handleSelectChange}
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
                <Button type="submit" className="bg-green-600 text-white">
                  {isEditMode ? "Update Post" : "Create Post"}
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
