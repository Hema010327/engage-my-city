import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  MapPin, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  Users, 
  TrendingUp,
  AlertTriangle,
  FileText,
  Camera,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-civic.jpg";

const Home = () => {
  const stats = [
    { label: "Issues Resolved", value: "12,847", icon: CheckCircle, color: "text-success" },
    { label: "Active Citizens", value: "45,203", icon: Users, color: "text-primary" },
    { label: "Response Time", value: "24hrs", icon: Clock, color: "text-warning" },
    { label: "Satisfaction Rate", value: "94%", icon: TrendingUp, color: "text-success" }
  ];

  const features = [
    {
      icon: FileText,
      title: "Quick Reporting",
      description: "Submit civic issues with photos and location in seconds"
    },
    {
      icon: MapPin,
      title: "GPS Location",
      description: "Automatic location tagging for precise issue identification"
    },
    {
      icon: MessageSquare,
      title: "Real-time Chat",
      description: "Direct communication with CMC officials handling your case"
    },
    {
      icon: Clock,
      title: "Status Tracking",
      description: "Live updates on your complaint status from submission to resolution"
    },
    {
      icon: Camera,
      title: "Photo Evidence",
      description: "Upload images to document issues clearly"
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Optimized for smartphones with offline capability"
    }
  ];

  const recentComplaints = [
    {
      id: "CMC-2024-001",
      title: "Pothole on Main Street",
      status: "In Progress",
      area: "Central District",
      priority: "High"
    },
    {
      id: "CMC-2024-002", 
      title: "Street Light Not Working",
      status: "Resolved",
      area: "North Zone",
      priority: "Medium"
    },
    {
      id: "CMC-2024-003",
      title: "Garbage Collection Delay",
      status: "Submitted",
      area: "South District",
      priority: "Low"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  🏛️ Official CMC Platform
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Talk to <span className="text-primary">City</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Your direct channel to the City Municipal Corporation. Report issues, track progress, and build a better city together.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/submit-complaint">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    Report an Issue
                  </Button>
                </Link>
                <Link to="/track-complaints">
                  <Button variant="outline" size="xl" className="w-full sm:w-auto">
                    <Clock className="h-5 w-5 mr-2" />
                    Track Status
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>24/7 Reporting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4 text-primary" />
                  <span>Real-time Updates</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero opacity-20 rounded-2xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Citizens engaging with city services through digital platform"
                className="relative z-10 w-full h-auto rounded-2xl shadow-civic"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card border-0 bg-gradient-card">
                <CardContent className="pt-6">
                  <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              ✨ Platform Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything you need for civic engagement
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive platform designed to bridge the gap between citizens and local government
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card border-0 bg-gradient-card hover:shadow-civic transition-all duration-300 group">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground">Recent Complaints</h3>
              <p className="text-muted-foreground">Latest issues reported by citizens</p>
            </div>
            <Link to="/track-complaints">
              <Button variant="outline">View All</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentComplaints.map((complaint, index) => (
              <Card key={index} className="shadow-card border-0 bg-gradient-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="text-xs">
                      {complaint.id}
                    </Badge>
                    <Badge 
                      variant={
                        complaint.status === "Resolved" ? "default" : 
                        complaint.status === "In Progress" ? "secondary" : "outline"
                      }
                      className={
                        complaint.status === "Resolved" ? "bg-success text-success-foreground" :
                        complaint.status === "In Progress" ? "bg-warning text-warning-foreground" : ""
                      }
                    >
                      {complaint.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-base">{complaint.title}</CardTitle>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{complaint.area}</span>
                    <span className={
                      complaint.priority === "High" ? "text-urgent" :
                      complaint.priority === "Medium" ? "text-warning" : "text-muted-foreground"
                    }>
                      {complaint.priority} Priority
                    </span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;