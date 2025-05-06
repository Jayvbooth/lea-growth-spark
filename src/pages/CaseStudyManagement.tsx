
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Building, Edit, Trash2, LogOut, BarChart, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { Spinner } from "@/components/ui/spinner";

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  logo: string;
  teaser: string;
  metrics: any;
  created_at: string;
}

const CaseStudyManagement: React.FC = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  useEffect(() => {
    // Fetch case studies from Supabase
    const fetchCaseStudies = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("case_studies")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        
        setCaseStudies(data);
      } catch (error: any) {
        toast.error(error.message || "Error fetching case studies");
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  const handleCreateNew = () => {
    // In a real app, you would navigate to a case study editor
    toast.info("Case study editor would open here");
  };

  const handleEdit = (id: string) => {
    // In a real app, you would navigate to the case study editor with the ID
    toast.info(`Would edit case study with ID: ${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("case_studies").delete().eq("id", id);
      
      if (error) throw error;
      
      toast.success("Case study deleted successfully");
      // Update the list
      setCaseStudies(caseStudies.filter(study => study.id !== id));
    } catch (error: any) {
      toast.error(error.message || "Error deleting case study");
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

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

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Case Study Management | Leadea</title>
        <meta name="description" content="Manage your case studies" />
      </Helmet>

      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto container-padding max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Case Study Management</h1>
              <p className="text-monochrome-600 mt-2">Create and manage your case studies</p>
            </div>
            <div className="flex gap-4">
              <Button onClick={handleCreateNew} className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Create New
              </Button>
              <Button variant="outline" onClick={handleSignOut} className="flex items-center gap-2">
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>{user?.email?.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Welcome back!</p>
                  <p className="text-sm text-monochrome-600">{user?.email}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-monochrome-600 mt-4">
                <div className="flex items-center gap-2">
                  <BarChart className="h-4 w-4" />
                  <span>Total case studies: {caseStudies.length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Last updated: {new Date().toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-4">
                      <div className="h-10 max-w-[120px]">
                        {study.logo ? (
                          <img
                            src={study.logo}
                            alt={`${study.title} logo`}
                            className="h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/placeholder.svg';
                              target.onerror = null;
                            }}
                          />
                        ) : (
                          <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <Building className="h-5 w-5 text-gray-500" />
                          </div>
                        )}
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg mb-2">{study.title}</h3>
                    <p className="text-monochrome-600 text-sm mb-4 line-clamp-2">
                      {study.teaser}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.metrics && typeof study.metrics === 'object' && 
                        Object.entries(study.metrics).map(([key, value], idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-monochrome-100 text-monochrome-700 px-2 py-1 rounded-full"
                          >
                            {key}: {value}
                          </span>
                        ))
                      }
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs text-monochrome-500">
                        Created: {new Date(study.created_at).toLocaleDateString()}
                      </span>
                      
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => handleEdit(study.id)}
                          className="h-8 w-8 p-0"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost"
                          onClick={() => handleDelete(study.id)}
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {caseStudies.length === 0 && (
              <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg border border-gray-100">
                <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">No case studies found</h3>
                <p className="text-monochrome-600 mb-6">
                  You haven't created any case studies yet. Add your first success story!
                </p>
                <Button onClick={handleCreateNew}>
                  Create Your First Case Study
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

export default CaseStudyManagement;
