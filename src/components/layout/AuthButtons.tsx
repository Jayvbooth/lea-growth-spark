
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { LogIn, LogOut } from "lucide-react";

const AuthButtons: React.FC = () => {
  const { user, signOut, loading } = useAuth();

  if (loading) return null;

  if (user) {
    return (
      <Button 
        variant="ghost"
        onClick={signOut} 
        className="flex items-center gap-2"
      >
        <LogOut className="h-4 w-4" />
        Sign Out
      </Button>
    );
  }

  return (
    <Button 
      variant="ghost" 
      asChild
      className="flex items-center gap-2"
    >
      <Link to="/auth">
        <LogIn className="h-4 w-4" />
        Sign In
      </Link>
    </Button>
  );
};

export default AuthButtons;
