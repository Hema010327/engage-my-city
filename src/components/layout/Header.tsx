import { Button } from "@/components/ui/button";
import { MapPin, User, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="bg-background border-b border-border shadow-card sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-hero rounded-lg shadow-civic group-hover:shadow-glow transition-all duration-300">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Talk to City</h1>
              <p className="text-xs text-muted-foreground">CMC Engagement System</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/submit-complaint" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/submit-complaint" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Report Issue
            </Link>
            <Link 
              to="/track-complaints" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/track-complaints" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Track Status
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Dashboard
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="civic" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;