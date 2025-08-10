import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Camera, 
  MapPin, 
  Send, 
  Upload,
  AlertTriangle,
  FileText,
  Clock,
  CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SubmitComplaint = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    priority: "",
    location: "",
    photos: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const categories = [
    "Roads & Infrastructure",
    "Water Supply", 
    "Sewage & Drainage",
    "Garbage Collection",
    "Street Lighting",
    "Public Transport",
    "Parks & Recreation",
    "Building Permits",
    "Tax & Revenue",
    "Other"
  ];

  const priorities = [
    { value: "low", label: "Low Priority", color: "text-muted-foreground" },
    { value: "medium", label: "Medium Priority", color: "text-warning" },
    { value: "high", label: "High Priority", color: "text-urgent" },
    { value: "emergency", label: "Emergency", color: "text-urgent" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    const complaintId = `CMC-2024-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
    
    toast({
      title: "Complaint Submitted Successfully!",
      description: `Your complaint ID is ${complaintId}. You will receive updates via SMS and email.`,
    });

    setIsSubmitting(false);
    setFormData({
      title: "",
      description: "",
      category: "",
      priority: "",
      location: "",
      photos: []
    });
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData(prev => ({
            ...prev,
            location: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
          }));
          toast({
            title: "Location captured!",
            description: "GPS coordinates have been added to your complaint.",
          });
        },
        (error) => {
          toast({
            title: "Location access denied",
            description: "Please enter your location manually or enable GPS access.",
            variant: "destructive"
          });
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4">
              📝 Submit New Complaint
            </Badge>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Report a Civic Issue
            </h1>
            <p className="text-muted-foreground">
              Help us improve your city by reporting issues that need attention
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8 px-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary rounded-full">
                <FileText className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-primary">Submit Details</span>
            </div>
            <div className="flex-1 h-px bg-border mx-4"></div>
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-muted rounded-full">
                <Clock className="h-4 w-4 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">Review & Assign</span>
            </div>
            <div className="flex-1 h-px bg-border mx-4"></div>
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-muted rounded-full">
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </div>
              <span className="text-sm text-muted-foreground">Resolution</span>
            </div>
          </div>

          {/* Form */}
          <Card className="shadow-card border-0 bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <span>Complaint Details</span>
              </CardTitle>
              <CardDescription>
                Please provide detailed information about the issue you're reporting
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Issue Title *</Label>
                  <Input
                    id="title"
                    placeholder="Brief description of the issue (e.g., Pothole on Main Street)"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>

                {/* Category & Priority */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Category *</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
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

                  <div className="space-y-2">
                    <Label>Priority Level *</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        {priorities.map((priority) => (
                          <SelectItem key={priority.value} value={priority.value}>
                            <span className={priority.color}>{priority.label}</span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the issue in detail. Include when you first noticed it, how it affects you, and any other relevant information..."
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    required
                  />
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="location"
                      placeholder="Enter address or GPS coordinates"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      required
                    />
                    <Button type="button" variant="outline" onClick={getCurrentLocation}>
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Click the map icon to auto-detect your current location
                  </p>
                </div>

                {/* Photo Upload */}
                <div className="space-y-2">
                  <Label>Upload Photos (Optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload photos to help us understand the issue better
                    </p>
                    <Button type="button" variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Choose Files
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      Supported formats: JPG, PNG, GIF (Max 5MB each)
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting || !formData.title || !formData.description || !formData.category || !formData.priority || !formData.location}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="h-4 w-4 mr-2 animate-spin" />
                        Submitting Complaint...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Complaint
                      </>
                    )}
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>
                    By submitting this complaint, you agree to our terms of service and privacy policy.
                    You will receive a complaint ID via SMS and email for tracking purposes.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SubmitComplaint;