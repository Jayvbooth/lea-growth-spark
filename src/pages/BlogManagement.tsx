
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@/data/blogData";
import { BlogPost } from "@/types/blog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, FileText, Edit, Trash2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

// Simple auth check function - in a real app, this would check session/token
const isAuthenticated = () => {
  // This is a mock auth check - in a real app, you'd validate a token/session
  return true; // Simulate a logged-in user for demo purposes
};

const BlogManagement: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  useEffect(() => {
    // Check authentication when component mounts
    const authCheck = isAuthenticated();
    setIsAuthorized(authCheck);
    
    if (!authCheck) {
      toast.error("You must be logged in to access this page");
      navigate("/blog");
    } else {
      // Only fetch posts if authorized
      setPosts(blogPosts);
    }
  }, [navigate]);

  const handleCreateNew = () => {
    navigate("/blog/editor");
  };

  const handleEdit = (id: string) => {
    navigate(`/blog/editor/${id}`);
  };

  const handleDelete = (id: string) => {
    // In a real app, this would call an API
    toast.success("In a real app, this would delete the blog post");
    // For demonstration, we'll just filter it out
    setPosts(posts.filter(post => post.id !== id));
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
                You must be logged in to access the blog management.
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
        <title>Blog Management | Leadea</title>
        <meta name="description" content="Manage your blog posts" />
      </Helmet>

      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Blog Management</h1>
              <p className="text-monochrome-600 mt-2">Create and manage your blog posts</p>
            </div>
            <Button onClick={handleCreateNew} className="bg-green-600 hover:bg-green-700">
              Create New Post
            </Button>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="text-sm text-monochrome-600 mb-4">
                Note: In this demo version, changes are not persistent and will reset when you refresh the page. 
                In a real application, this would connect to a database.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-monochrome-600">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Total posts: {posts.length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Latest update: {new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-48 h-32 overflow-hidden">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg';
                          target.onerror = null;
                        }}
                      />
                    </div>
                    <div className="flex-1 p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg mb-2 line-clamp-1">
                            <Link to={`/blog/${post.id}`} className="hover:text-green-600 transition-colors">
                              {post.title}
                            </Link>
                          </h3>
                          <div className="flex items-center mb-2 text-sm text-monochrome-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                            <span className="mx-2">•</span>
                            <span>{post.category}</span>
                            <span className="mx-2">•</span>
                            <span>{post.readTime} min read</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleEdit(post.id)}
                            className="h-8 px-2"
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleDelete(post.id)}
                            className="h-8 px-2 text-red-500 hover:text-red-700 hover:border-red-300"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>

                      <p className="text-monochrome-600 line-clamp-2 text-sm mt-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                          <Avatar className="h-6 w-6 mr-2">
                            <AvatarImage src={post.author.avatar} alt={post.author.name} />
                            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-xs">{post.author.name}</span>
                        </div>
                        <div className="flex gap-2">
                          {post.status === "draft" ? (
                            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                              Draft
                            </span>
                          ) : (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              Published
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {posts.length === 0 && (
              <div className="text-center py-8">
                <p className="text-monochrome-500">No blog posts found</p>
                <Button 
                  onClick={handleCreateNew} 
                  variant="outline" 
                  className="mt-4"
                >
                  Create your first post
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogManagement;
