
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Index from "./pages/Index";
import LeadGeneration from "./pages/LeadGeneration";
import BusinessAutomation from "./pages/BusinessAutomation";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import CaseStudyManagement from "./pages/CaseStudyManagement";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogManagement from "./pages/BlogManagement";
import BlogEditor from "./pages/BlogEditor";
import Auth from "./pages/Auth";
import AssessmentPage from "./pages/AssessmentPage";
import PreCallPage from "./pages/PreCallPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/lead-generation" element={<LeadGeneration />} />
            <Route path="/business-automation" element={<BusinessAutomation />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/blog/category/:categorySlug" element={<Blog />} />
            <Route path="/blog/tag/:tagSlug" element={<Blog />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/pre-call" element={<PreCallPage />} />
            <Route path="/blog-management" element={
              <ProtectedRoute>
                <BlogManagement />
              </ProtectedRoute>
            } />
            <Route path="/blog/editor" element={
              <ProtectedRoute>
                <BlogEditor />
              </ProtectedRoute>
            } />
            <Route path="/blog/editor/:id" element={
              <ProtectedRoute>
                <BlogEditor />
              </ProtectedRoute>
            } />
            <Route path="/case-study-management" element={
              <ProtectedRoute>
                <CaseStudyManagement />
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
