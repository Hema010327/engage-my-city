import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  Search, 
  MapPin, 
  Clock, 
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  User,
  Phone,
  Mail
} from "lucide-react";

const TrackComplaints = () => {
  const [searchId, setSearchId] = useState("");
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  // Mock data for demonstration
  const mockComplaints = [
    {
      id: "CMC-2024-001",
      title: "Pothole on Main Street causing traffic issues",
      description: "Large pothole near the traffic signal at Main Street intersection. It's causing damage to vehicles and creating traffic bottlenecks during rush hours.",
      category: "Roads & Infrastructure",
      priority: "High",
      status: "In Progress",
      progress: 60,
      location: "Main Street, Central District",
      submittedDate: "2024-01-15",
      assignedOfficer: "Rajesh Kumar",
      estimatedCompletion: "2024-01-25",
      updates: [
        {
          date: "2024-01-15",
          time: "09:30 AM",
          message: "Complaint submitted successfully",
          type: "submitted"
        },
        {
          date: "2024-01-16",
          time: "11:15 AM", 
          message: "Complaint verified and assigned to Roads Department",
          type: "assigned"
        },
        {
          date: "2024-01-18",
          time: "02:45 PM",
          message: "Site inspection completed. Material procurement in progress",
          type: "progress"
        }
      ]
    },
    {
      id: "CMC-2024-002",
      title: "Street Light Not Working - Park Avenue",
      description: "Street light pole #45 on Park Avenue has been non-functional for over a week, creating safety concerns for pedestrians during night hours.",
      category: "Street Lighting",
      priority: "Medium",
      status: "Resolved",
      progress: 100,
      location: "Park Avenue, North Zone",
      submittedDate: "2024-01-10",
      assignedOfficer: "Priya Sharma",
      completedDate: "2024-01-14",
      updates: [
        {
          date: "2024-01-10",
          time: "03:20 PM",
          message: "Complaint submitted successfully",
          type: "submitted"
        },
        {
          date: "2024-01-11",
          time: "10:00 AM",
          message: "Assigned to Electrical Maintenance Team",
          type: "assigned"
        },
        {
          date: "2024-01-12",
          time: "04:30 PM",
          message: "Faulty bulb and wiring identified",
          type: "progress"
        },
        {
          date: "2024-01-14",
          time: "11:20 AM",
          message: "Street light repaired and tested. Issue resolved",
          type: "resolved"
        }
      ]
    }
  ];

  const handleSearch = () => {
    const found = mockComplaints.find(complaint => 
      complaint.id.toLowerCase() === searchId.toLowerCase()
    );
    setSelectedComplaint(found || null);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Submitted": return "bg-blue-100 text-blue-800";
      case "In Progress": return "bg-warning text-warning-foreground";
      case "Resolved": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-urgent";
      case "Medium": return "text-warning";
      case "Low": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case "submitted": return <CheckCircle2 className="h-4 w-4 text-primary" />;
      case "assigned": return <User className="h-4 w-4 text-warning" />;
      case "progress": return <Clock className="h-4 w-4 text-primary" />;
      case "resolved": return <CheckCircle2 className="h-4 w-4 text-success" />;
      default: return <AlertTriangle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-4">
              🔍 Track Your Complaints
            </Badge>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Complaint Status Tracker
            </h1>
            <p className="text-muted-foreground">
              Enter your complaint ID to track the progress and get real-time updates
            </p>
          </div>

          {/* Search */}
          <Card className="shadow-card border-0 bg-gradient-card mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-primary" />
                <span>Search Complaint</span>
              </CardTitle>
              <CardDescription>
                Enter your complaint ID (e.g., CMC-2024-001) to track status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <Label htmlFor="searchId" className="sr-only">Complaint ID</Label>
                  <Input
                    id="searchId"
                    placeholder="Enter Complaint ID (e.g., CMC-2024-001)"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <Button variant="civic" onClick={handleSearch}>
                  <Search className="h-4 w-4 mr-2" />
                  Track Status
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Don't have your complaint ID? Check your email or SMS for the reference number.
              </p>
            </CardContent>
          </Card>

          {/* Demo Cards */}
          {!selectedComplaint && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Try these sample complaint IDs:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockComplaints.map((complaint) => (
                  <Card 
                    key={complaint.id} 
                    className="shadow-card border-0 bg-gradient-card cursor-pointer hover:shadow-civic transition-all duration-300"
                    onClick={() => {
                      setSearchId(complaint.id);
                      setSelectedComplaint(complaint);
                    }}
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge variant="outline">{complaint.id}</Badge>
                        <Badge className={getStatusColor(complaint.status)}>
                          {complaint.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-base">{complaint.title}</CardTitle>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{complaint.category}</span>
                        <span className={getPriorityColor(complaint.priority)}>
                          {complaint.priority} Priority
                        </span>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Complaint Details */}
          {selectedComplaint && (
            <div className="space-y-6">
              {/* Main Details */}
              <Card className="shadow-card border-0 bg-gradient-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="outline" className="mb-2">{selectedComplaint.id}</Badge>
                      <CardTitle className="text-xl mb-2">{selectedComplaint.title}</CardTitle>
                      <CardDescription className="text-base">
                        {selectedComplaint.description}
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(selectedComplaint.status)}>
                      {selectedComplaint.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{selectedComplaint.progress}%</span>
                      </div>
                      <Progress value={selectedComplaint.progress} className="h-2" />
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Location:</span>
                          <span className="text-sm font-medium">{selectedComplaint.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Submitted:</span>
                          <span className="text-sm font-medium">{selectedComplaint.submittedDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Priority:</span>
                          <span className={`text-sm font-medium ${getPriorityColor(selectedComplaint.priority)}`}>
                            {selectedComplaint.priority}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Assigned Officer:</span>
                          <span className="text-sm font-medium">{selectedComplaint.assignedOfficer}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {selectedComplaint.status === "Resolved" ? "Completed:" : "Est. Completion:"}
                          </span>
                          <span className="text-sm font-medium">
                            {selectedComplaint.completedDate || selectedComplaint.estimatedCompletion}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            {selectedComplaint.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="shadow-card border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Status Timeline</span>
                  </CardTitle>
                  <CardDescription>
                    Track the progress of your complaint from submission to resolution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {selectedComplaint.updates.map((update, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0">
                          {getUpdateIcon(update.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <p className="text-sm font-medium text-foreground">
                              {update.message}
                            </p>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {update.date} at {update.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card className="shadow-card border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Need Help?</span>
                  </CardTitle>
                  <CardDescription>
                    Contact the assigned officer or customer support for queries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="civic" className="flex-1">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Chat with Officer
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Support
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Update
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* No Results */}
          {searchId && !selectedComplaint && searchId.length > 0 && (
            <Card className="shadow-card border-0 bg-gradient-card text-center p-8">
              <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Complaint Not Found
              </h3>
              <p className="text-muted-foreground mb-4">
                No complaint found with ID "{searchId}". Please check the ID and try again.
              </p>
              <p className="text-sm text-muted-foreground">
                If you're sure the ID is correct, please contact our support team for assistance.
              </p>
            </Card>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrackComplaints;