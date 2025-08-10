import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  MapPin,
  MessageSquare,
  Calendar,
  Filter,
  Download,
  Bell
} from "lucide-react";

const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Mock data for CMC Official Dashboard
  const dashboardStats = {
    totalComplaints: 1247,
    activeComplaints: 342,
    resolvedToday: 28,
    averageResponseTime: "18hrs",
    satisfactionRate: 94
  };

  const priorityBreakdown = [
    { label: "High Priority", count: 45, color: "text-urgent", bg: "bg-urgent/10" },
    { label: "Medium Priority", count: 128, color: "text-warning", bg: "bg-warning/10" },
    { label: "Low Priority", count: 169, color: "text-muted-foreground", bg: "bg-muted/20" }
  ];

  const categoryStats = [
    { category: "Roads & Infrastructure", count: 156, percentage: 42 },
    { category: "Water Supply", count: 89, percentage: 24 },
    { category: "Garbage Collection", count: 67, percentage: 18 },
    { category: "Street Lighting", count: 30, percentage: 8 },
    { category: "Others", count: 29, percentage: 8 }
  ];

  const recentComplaints = [
    {
      id: "CMC-2024-156",
      title: "Water leakage in residential area",
      area: "Sector 15, North Zone",
      priority: "High",
      status: "Assigned",
      assignedTo: "Water Dept. Team A",
      timeAgo: "2 hours ago"
    },
    {
      id: "CMC-2024-157", 
      title: "Street light pole damaged",
      area: "Main Road, Central District",
      priority: "Medium",
      status: "In Progress",
      assignedTo: "Electrical Maintenance",
      timeAgo: "4 hours ago"
    },
    {
      id: "CMC-2024-158",
      title: "Garbage collection missed",
      area: "Residential Colony B",
      priority: "Low",
      status: "Submitted",
      assignedTo: "Unassigned",
      timeAgo: "6 hours ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Submitted": return "bg-blue-100 text-blue-800";
      case "Assigned": return "bg-purple-100 text-purple-800";
      case "In Progress": return "bg-warning/20 text-warning-foreground";
      case "Resolved": return "bg-success/20 text-success-foreground";
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">CMC Dashboard</h1>
            <p className="text-muted-foreground">
              Municipal Corporation Management Center
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button variant="civic">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="shadow-card border-0 bg-gradient-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Complaints</p>
                  <p className="text-2xl font-bold text-foreground">{dashboardStats.totalComplaints}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-gradient-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Cases</p>
                  <p className="text-2xl font-bold text-warning">{dashboardStats.activeComplaints}</p>
                </div>
                <Clock className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-gradient-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Resolved Today</p>
                  <p className="text-2xl font-bold text-success">{dashboardStats.resolvedToday}</p>
                </div>
                <CheckCircle2 className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-gradient-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg Response</p>
                  <p className="text-2xl font-bold text-primary">{dashboardStats.averageResponseTime}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-gradient-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Satisfaction</p>
                  <p className="text-2xl font-bold text-success">{dashboardStats.satisfactionRate}%</p>
                </div>
                <Users className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="complaints">Active Complaints</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="team">Team Management</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Priority Breakdown */}
              <Card className="shadow-card border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-primary" />
                    <span>Priority Breakdown</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {priorityBreakdown.map((item, index) => (
                    <div key={index} className={`p-3 rounded-lg ${item.bg}`}>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.label}</span>
                        <span className={`text-lg font-bold ${item.color}`}>{item.count}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Category Statistics */}
              <Card className="shadow-card border-0 bg-gradient-card lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span>Category Distribution</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {categoryStats.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{item.category}</span>
                        <span className="text-muted-foreground">{item.count} complaints</span>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="shadow-card border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Recent Complaints</span>
                </CardTitle>
                <CardDescription>
                  Latest complaints requiring attention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentComplaints.map((complaint, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">{complaint.id}</Badge>
                          <Badge className={getStatusColor(complaint.status)}>
                            {complaint.status}
                          </Badge>
                        </div>
                        <h4 className="font-medium text-foreground">{complaint.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{complaint.area}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3" />
                            <span>{complaint.timeAgo}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${getPriorityColor(complaint.priority)}`}>
                          {complaint.priority}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {complaint.assignedTo}
                        </div>
                        <div className="mt-2">
                          <Button variant="outline" size="sm">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="complaints">
            <Card className="shadow-card border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle>Active Complaints Management</CardTitle>
                <CardDescription>
                  Manage and track all active complaint cases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Complaint Management System
                  </h3>
                  <p className="text-muted-foreground">
                    This would show a detailed table of all complaints with filtering, sorting, and batch actions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="shadow-card border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>
                  Detailed insights and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Analytics Dashboard
                  </h3>
                  <p className="text-muted-foreground">
                    This would display comprehensive charts and graphs showing trends, performance metrics, and insights.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team">
            <Card className="shadow-card border-0 bg-gradient-card">
              <CardHeader>
                <CardTitle>Team Management</CardTitle>
                <CardDescription>
                  Manage team members and their assignments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Team Management System
                  </h3>
                  <p className="text-muted-foreground">
                    This would show team member profiles, workload distribution, and assignment management.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;