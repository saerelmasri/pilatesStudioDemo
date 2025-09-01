"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Plus,
  Edit,
  Trash2,
  BarChart3,
  LogOut,
  Heart,
  Flame,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock admin data
const mockClasses = [
  {
    id: "1",
    title: "Morning Pilates Flow",
    type: "pilates",
    date: "2024-12-20",
    time: "08:00",
    duration: 60,
    instructor: "Emma Thompson",
    location: "Studio A",
    maxSpots: 12,
    bookedSpots: 8,
    price: 35,
    description:
      "A gentle flow to start your day with mindful movement and core strengthening.",
  },
  {
    id: "2",
    title: "HIIT Bootcamp",
    type: "hiit",
    date: "2024-12-20",
    time: "18:00",
    duration: 45,
    instructor: "Mike Rodriguez",
    location: "Studio B",
    maxSpots: 15,
    bookedSpots: 12,
    price: 30,
    description:
      "High-intensity interval training for maximum calorie burn and strength building.",
  },
];

const mockBookings = [
  {
    id: "1",
    memberName: "Sarah Johnson",
    memberEmail: "sarah.j@email.com",
    className: "Morning Pilates Flow",
    date: "2024-12-20",
    time: "08:00",
    status: "confirmed",
    paymentStatus: "paid",
    bookingDate: "2024-12-18",
    price: 35,
  },
  {
    id: "2",
    memberName: "Mike Davis",
    memberEmail: "mike.d@email.com",
    className: "HIIT Bootcamp",
    date: "2024-12-20",
    time: "18:00",
    status: "confirmed",
    paymentStatus: "paid",
    bookingDate: "2024-12-19",
    price: 30,
  },
  {
    id: "3",
    memberName: "Emma Wilson",
    memberEmail: "emma.w@email.com",
    className: "Morning Pilates Flow",
    date: "2024-12-21",
    time: "08:00",
    status: "waitlist",
    paymentStatus: "pending",
    bookingDate: "2024-12-19",
    price: 35,
  },
  {
    id: "4",
    memberName: "John Smith",
    memberEmail: "john.s@email.com",
    className: "HIIT Bootcamp",
    date: "2024-12-19",
    time: "18:00",
    status: "cancelled",
    paymentStatus: "refunded",
    bookingDate: "2024-12-17",
    price: 30,
  },
];

const mockMembers = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "+1 (555) 123-4567",
    membershipType: "Premium",
    joinDate: "2024-01-15",
    status: "active",
    totalBookings: 24,
    lastVisit: "2024-12-18",
  },
  {
    id: "2",
    name: "Mike Davis",
    email: "mike.d@email.com",
    phone: "+1 (555) 234-5678",
    membershipType: "Basic",
    joinDate: "2024-03-22",
    status: "active",
    totalBookings: 12,
    lastVisit: "2024-12-19",
  },
  {
    id: "3",
    name: "Emma Wilson",
    email: "emma.w@email.com",
    phone: "+1 (555) 345-6789",
    membershipType: "Elite",
    joinDate: "2024-02-10",
    status: "active",
    totalBookings: 45,
    lastVisit: "2024-12-19",
  },
  {
    id: "4",
    name: "John Smith",
    email: "john.s@email.com",
    phone: "+1 (555) 456-7890",
    membershipType: "Premium",
    joinDate: "2024-06-05",
    status: "inactive",
    totalBookings: 8,
    lastVisit: "2024-11-15",
  },
];

const mockStats = {
  totalClasses: 156,
  totalBookings: 1247,
  revenue: 42350,
  activeMembers: 324,
};

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<any>(null);
  const [newClass, setNewClass] = useState({
    title: "",
    type: "pilates",
    date: "",
    time: "",
    duration: 60,
    instructor: "",
    location: "",
    maxSpots: 12,
    price: 35,
    description: "",
  });

  const handleCreateClass = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API
    console.log("Creating class:", newClass);
    setIsCreateModalOpen(false);
    // Reset form
    setNewClass({
      title: "",
      type: "pilates",
      date: "",
      time: "",
      duration: 60,
      instructor: "",
      location: "",
      maxSpots: 12,
      price: 35,
      description: "",
    });
  };

  const handleEditClass = (classItem: any) => {
    setSelectedClass(classItem);
    setNewClass({
      title: classItem.title,
      type: classItem.type,
      date: classItem.date,
      time: classItem.time,
      duration: classItem.duration,
      instructor: classItem.instructor,
      location: classItem.location,
      maxSpots: classItem.maxSpots,
      price: classItem.price,
      description: classItem.description || "",
    });
    setIsEditModalOpen(true);
  };

  const handleUpdateClass = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API
    console.log("Updating class:", selectedClass.id, newClass);
    setIsEditModalOpen(false);
    setSelectedClass(null);
    // Reset form
    setNewClass({
      title: "",
      type: "pilates",
      date: "",
      time: "",
      duration: 60,
      instructor: "",
      location: "",
      maxSpots: 12,
      price: 35,
      description: "",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-100 text-green-800">Confirmed</Badge>;
      case "waitlist":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">Waitlist</Badge>
        );
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPaymentBadge = (status: string) => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-100 text-green-800">Paid</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case "refunded":
        return <Badge className="bg-blue-100 text-blue-800">Refunded</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getMembershipBadge = (type: string) => {
    switch (type) {
      case "Elite":
        return <Badge className="bg-purple-100 text-purple-800">Elite</Badge>;
      case "Premium":
        return <Badge className="bg-blue-100 text-blue-800">Premium</Badge>;
      case "Basic":
        return <Badge className="bg-gray-100 text-gray-800">Basic</Badge>;
      default:
        return <Badge variant="secondary">{type}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  P
                </span>
              </div>
              <span className="font-bold text-xl text-foreground">
                PilatesFlow Admin
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary">Admin Panel</Badge>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage classes, bookings, and studio operations
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="classes">Classes</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Classes
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {mockStats.totalClasses}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Bookings
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {mockStats.totalBookings}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +8% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ${mockStats.revenue.toLocaleString()}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +15% from last month
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Members
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {mockStats.activeMembers}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +5% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        New booking for Morning Pilates Flow
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Sarah Johnson - 2 minutes ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        Class capacity updated
                      </p>
                      <p className="text-xs text-muted-foreground">
                        HIIT Bootcamp - 5 minutes ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        New member registration
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Mike Davis - 10 minutes ago
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="classes" className="space-y-6 mt-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-foreground">
                Manage Classes
              </h2>
              <Dialog
                open={isCreateModalOpen}
                onOpenChange={setIsCreateModalOpen}
              >
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Class
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Create New Class</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleCreateClass} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title" className="mb-2">
                          Class Title
                        </Label>
                        <Input
                          id="title"
                          value={newClass.title}
                          onChange={(e) =>
                            setNewClass({ ...newClass, title: e.target.value })
                          }
                          placeholder="e.g., Morning Pilates Flow"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="type" className="mb-2">
                          Class Type
                        </Label>
                        <Select
                          value={newClass.type}
                          onValueChange={(value) =>
                            setNewClass({ ...newClass, type: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pilates">Pilates</SelectItem>
                            <SelectItem value="hiit">HIIT</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="date" className="mb-2">
                          Date
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={newClass.date}
                          onChange={(e) =>
                            setNewClass({ ...newClass, date: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="time" className="mb-2">
                          Time
                        </Label>
                        <Input
                          id="time"
                          type="time"
                          value={newClass.time}
                          onChange={(e) =>
                            setNewClass({ ...newClass, time: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="duration" className="mb-2">
                          Duration (minutes)
                        </Label>
                        <Input
                          id="duration"
                          type="number"
                          value={newClass.duration}
                          onChange={(e) =>
                            setNewClass({
                              ...newClass,
                              duration: Number.parseInt(e.target.value),
                            })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="instructor" className="mb-2">
                          Instructor
                        </Label>
                        <Input
                          id="instructor"
                          value={newClass.instructor}
                          onChange={(e) =>
                            setNewClass({
                              ...newClass,
                              instructor: e.target.value,
                            })
                          }
                          placeholder="Instructor name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="location" className="mb-2">
                          Location
                        </Label>
                        <Input
                          id="location"
                          value={newClass.location}
                          onChange={(e) =>
                            setNewClass({
                              ...newClass,
                              location: e.target.value,
                            })
                          }
                          placeholder="e.g., Studio A"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="maxSpots" className="mb-2">
                          Max Spots
                        </Label>
                        <Input
                          id="maxSpots"
                          type="number"
                          value={newClass.maxSpots}
                          onChange={(e) =>
                            setNewClass({
                              ...newClass,
                              maxSpots: Number.parseInt(e.target.value),
                            })
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="price" className="mb-2">
                          Price ($)
                        </Label>
                        <Input
                          id="price"
                          type="number"
                          value={newClass.price}
                          onChange={(e) =>
                            setNewClass({
                              ...newClass,
                              price: Number.parseInt(e.target.value),
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="description" className="mb-2">
                        Description
                      </Label>
                      <Textarea
                        id="description"
                        value={newClass.description}
                        onChange={(e) =>
                          setNewClass({
                            ...newClass,
                            description: e.target.value,
                          })
                        }
                        placeholder="Class description..."
                        rows={3}
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsCreateModalOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit">Create Class</Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Edit Class</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleUpdateClass} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="edit-title">Class Title</Label>
                      <Input
                        id="edit-title"
                        value={newClass.title}
                        onChange={(e) =>
                          setNewClass({ ...newClass, title: e.target.value })
                        }
                        placeholder="e.g., Morning Pilates Flow"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-type">Class Type</Label>
                      <Select
                        value={newClass.type}
                        onValueChange={(value) =>
                          setNewClass({ ...newClass, type: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pilates">Pilates</SelectItem>
                          <SelectItem value="hiit">HIIT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="edit-date">Date</Label>
                      <Input
                        id="edit-date"
                        type="date"
                        value={newClass.date}
                        onChange={(e) =>
                          setNewClass({ ...newClass, date: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-time">Time</Label>
                      <Input
                        id="edit-time"
                        type="time"
                        value={newClass.time}
                        onChange={(e) =>
                          setNewClass({ ...newClass, time: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-duration">Duration (minutes)</Label>
                      <Input
                        id="edit-duration"
                        type="number"
                        value={newClass.duration}
                        onChange={(e) =>
                          setNewClass({
                            ...newClass,
                            duration: Number.parseInt(e.target.value),
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-instructor">Instructor</Label>
                      <Input
                        id="edit-instructor"
                        value={newClass.instructor}
                        onChange={(e) =>
                          setNewClass({
                            ...newClass,
                            instructor: e.target.value,
                          })
                        }
                        placeholder="Instructor name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-location">Location</Label>
                      <Input
                        id="edit-location"
                        value={newClass.location}
                        onChange={(e) =>
                          setNewClass({ ...newClass, location: e.target.value })
                        }
                        placeholder="e.g., Studio A"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-maxSpots">Max Spots</Label>
                      <Input
                        id="edit-maxSpots"
                        type="number"
                        value={newClass.maxSpots}
                        onChange={(e) =>
                          setNewClass({
                            ...newClass,
                            maxSpots: Number.parseInt(e.target.value),
                          })
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-price">Price ($)</Label>
                      <Input
                        id="edit-price"
                        type="number"
                        value={newClass.price}
                        onChange={(e) =>
                          setNewClass({
                            ...newClass,
                            price: Number.parseInt(e.target.value),
                          })
                        }
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="edit-description">Description</Label>
                    <Textarea
                      id="edit-description"
                      value={newClass.description}
                      onChange={(e) =>
                        setNewClass({
                          ...newClass,
                          description: e.target.value,
                        })
                      }
                      placeholder="Class description..."
                      rows={3}
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsEditModalOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Update Class</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>

            <div className="grid gap-4">
              {mockClasses.map((classItem) => (
                <Card key={classItem.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-lg font-semibold text-foreground">
                            {classItem.title}
                          </h3>
                          <Badge
                            className={
                              classItem.type === "pilates"
                                ? "bg-green-600 text-white"
                                : "bg-orange-600 text-white"
                            }
                          >
                            {classItem.type === "pilates" ? (
                              <Heart className="w-3 h-3 mr-1" />
                            ) : (
                              <Flame className="w-3 h-3 mr-1" />
                            )}
                            {classItem.type.toUpperCase()}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{classItem.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>
                              {classItem.time} ({classItem.duration}min)
                            </span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{classItem.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            <span>
                              {classItem.bookedSpots}/{classItem.maxSpots}{" "}
                              booked
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-bold text-foreground mb-2">
                          ${classItem.price}
                        </div>
                        <div className="space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditClass(classItem)}
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-foreground">
                Recent Bookings
              </h2>
              <div className="flex items-center space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="waitlist">Waitlist</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-border">
                      <tr className="text-left">
                        <th className="p-4 font-medium text-foreground">
                          Member
                        </th>
                        <th className="p-4 font-medium text-foreground">
                          Class
                        </th>
                        <th className="p-4 font-medium text-foreground">
                          Date & Time
                        </th>
                        <th className="p-4 font-medium text-foreground">
                          Status
                        </th>
                        <th className="p-4 font-medium text-foreground">
                          Payment
                        </th>
                        <th className="p-4 font-medium text-foreground">
                          Booked On
                        </th>
                        <th className="p-4 font-medium text-foreground">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockBookings.map((booking) => (
                        <tr
                          key={booking.id}
                          className="border-b border-border hover:bg-muted/50"
                        >
                          <td className="p-4">
                            <div>
                              <div className="font-medium text-foreground">
                                {booking.memberName}
                              </div>
                              <div className="text-sm text-muted-foreground flex items-center">
                                <Mail className="w-3 h-3 mr-1" />
                                {booking.memberEmail}
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="font-medium text-foreground">
                              {booking.className}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              ${booking.price}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="font-medium text-foreground">
                              {booking.date}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {booking.time}
                            </div>
                          </td>
                          <td className="p-4">
                            {getStatusBadge(booking.status)}
                          </td>
                          <td className="p-4">
                            {getPaymentBadge(booking.paymentStatus)}
                          </td>
                          <td className="p-4">
                            <div className="text-sm text-muted-foreground">
                              {booking.bookingDate}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                              {booking.status === "confirmed" && (
                                <Button variant="outline" size="sm">
                                  Cancel
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Booking Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-foreground">
                    {
                      mockBookings.filter((b) => b.status === "confirmed")
                        .length
                    }
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Confirmed Bookings
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-foreground">
                    {mockBookings.filter((b) => b.status === "waitlist").length}
                  </div>
                  <p className="text-sm text-muted-foreground">Waitlist</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-foreground">
                    {
                      mockBookings.filter((b) => b.status === "cancelled")
                        .length
                    }
                  </div>
                  <p className="text-sm text-muted-foreground">Cancelled</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-foreground">
                    $
                    {mockBookings
                      .filter((b) => b.paymentStatus === "paid")
                      .reduce((sum, b) => sum + b.price, 0)}
                  </div>
                  <p className="text-sm text-muted-foreground">Revenue</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="members" className="space-y-6">
            <div className="flex items-center justify-between mt-6">
              <h2 className="text-2xl font-semibold text-foreground">
                Member Management
              </h2>
              <div className="flex items-center space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Members</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Member
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b border-border">
                      <tr className="text-left">
                        <th className="p-4 font-medium text-foreground">
                          Member
                        </th>
                        <th className="p-4 font-medium text-foreground">
                          Contact
                        </th>
                        <th className="p-4 font-medium text-foreground">
                          Membership
                        </th>
                        <th className="p-4 font-medium text-foreground">
                          Join Date
                        </th>
                        <th className="p-4 font-medium text-foreground">
                          Status
                        </th>
                        <th className="p-4 font-medium text-foreground">
                          Activity
                        </th>
                        <th className="p-4 font-medium text-foreground">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockMembers.map((member) => (
                        <tr
                          key={member.id}
                          className="border-b border-border hover:bg-muted/50"
                        >
                          <td className="p-4">
                            <div className="font-medium text-foreground">
                              {member.name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              ID: {member.id}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="space-y-1">
                              <div className="text-sm text-muted-foreground flex items-center">
                                <Mail className="w-3 h-3 mr-1" />
                                {member.email}
                              </div>
                              <div className="text-sm text-muted-foreground flex items-center">
                                <Phone className="w-3 h-3 mr-1" />
                                {member.phone}
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            {getMembershipBadge(member.membershipType)}
                          </td>
                          <td className="p-4">
                            <div className="text-sm text-muted-foreground">
                              {member.joinDate}
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge
                              className={
                                member.status === "active"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }
                            >
                              {member.status}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="text-sm">
                              <div className="font-medium text-foreground">
                                {member.totalBookings} bookings
                              </div>
                              <div className="text-muted-foreground">
                                Last: {member.lastVisit}
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Member Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-foreground">
                    {mockMembers.filter((m) => m.status === "active").length}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Active Members
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-foreground">
                    {
                      mockMembers.filter((m) => m.membershipType === "Premium")
                        .length
                    }
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Premium Members
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-foreground">
                    {
                      mockMembers.filter((m) => m.membershipType === "Elite")
                        .length
                    }
                  </div>
                  <p className="text-sm text-muted-foreground">Elite Members</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-foreground">
                    {Math.round(
                      mockMembers.reduce((sum, m) => sum + m.totalBookings, 0) /
                        mockMembers.length
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">Avg Bookings</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
