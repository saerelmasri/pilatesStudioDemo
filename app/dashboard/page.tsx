"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Settings,
  LogOut,
  Heart,
  Flame,
  CreditCard,
  Bell,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock user data
const mockUser = {
  name: "Sarah Johnson",
  email: "sarah@example.com",
  phone: "(555) 123-4567",
  memberSince: "January 2024",
  totalClasses: 47,
  favoriteClass: "Pilates Flow",
};

// Mock booking data
const mockBookings = [
  {
    id: "1",
    title: "Morning Pilates Flow",
    type: "pilates",
    date: "Dec 20, 2024",
    time: "08:00 AM",
    instructor: "Emma Thompson",
    location: "Studio A",
    status: "confirmed",
    price: 35,
  },
  {
    id: "2",
    title: "HIIT Bootcamp",
    type: "hiit",
    date: "Dec 22, 2024",
    time: "06:00 PM",
    instructor: "Mike Rodriguez",
    location: "Studio B",
    status: "confirmed",
    price: 30,
  },
  {
    id: "3",
    title: "Reformer Pilates",
    type: "pilates",
    date: "Dec 18, 2024",
    time: "09:30 AM",
    instructor: "Lisa Park",
    location: "Reformer Room",
    status: "completed",
    price: 45,
  },
];

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("bookings");

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
                PilatesFlow
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="text-lg">SJ</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold text-foreground">
                    {mockUser.name}
                  </h2>
                  <p className="text-muted-foreground">{mockUser.email}</p>
                  <Badge variant="secondary" className="mt-2">
                    Member since {mockUser.memberSince}
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">
                      {mockUser.totalClasses}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Classes Completed
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-foreground">
                      {mockUser.favoriteClass}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Favorite Class
                    </p>
                  </div>
                </div>

                {/* <div className="mt-6 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Account Settings
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Payment Methods
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Welcome back, {mockUser.name.split(" ")[0]}!
              </h1>
              <p className="text-muted-foreground">
                Manage your bookings and track your fitness journey
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="bookings">My Bookings</TabsTrigger>
                <TabsTrigger value="history">Class History</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>

              <TabsContent value="bookings" className="space-y-6 mt-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-foreground">
                    Upcoming Classes
                  </h2>
                  <Link href="/#calendar">
                    <Button>Book New Class</Button>
                  </Link>
                </div>

                <div className="grid gap-4">
                  {mockBookings
                    .filter((booking) => booking.status === "confirmed")
                    .map((booking) => (
                      <Card key={booking.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-3">
                                <h3 className="text-lg font-semibold text-foreground">
                                  {booking.title}
                                </h3>
                                <Badge
                                  className={
                                    booking.type === "pilates"
                                      ? "bg-green-600 text-white"
                                      : "bg-orange-600 text-white"
                                  }
                                >
                                  {booking.type === "pilates" ? (
                                    <Heart className="w-3 h-3 mr-1" />
                                  ) : (
                                    <Flame className="w-3 h-3 mr-1" />
                                  )}
                                  {booking.type.toUpperCase()}
                                </Badge>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  <span>{booking.date}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-2" />
                                  <span>{booking.time}</span>
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  <span>{booking.location}</span>
                                </div>
                                <div className="flex items-center">
                                  <User className="w-4 h-4 mr-2" />
                                  <span>{booking.instructor}</span>
                                </div>
                              </div>
                            </div>

                            <div className="text-right">
                              <div className="text-lg font-bold text-foreground mb-2">
                                ${booking.price}
                              </div>
                              <div className="space-x-2">
                                {/* <Button variant="outline" size="sm">
                                  Reschedule
                                </Button> */}
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="cursor-pointer"
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">
                  Class History
                </h2>

                <div className="grid gap-4">
                  {mockBookings
                    .filter((booking) => booking.status === "completed")
                    .map((booking) => (
                      <Card key={booking.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-3">
                                <h3 className="text-lg font-semibold text-foreground">
                                  {booking.title}
                                </h3>
                                <Badge
                                  className={
                                    booking.type === "pilates"
                                      ? "bg-green-600 text-white"
                                      : "bg-orange-600 text-white"
                                  }
                                >
                                  {booking.type === "pilates" ? (
                                    <Heart className="w-3 h-3 mr-1" />
                                  ) : (
                                    <Flame className="w-3 h-3 mr-1" />
                                  )}
                                  {booking.type.toUpperCase()}
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className="text-green-600 border-green-600"
                                >
                                  Completed
                                </Badge>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  <span>{booking.date}</span>
                                </div>
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-2" />
                                  <span>{booking.time}</span>
                                </div>
                                <div className="flex items-center">
                                  <User className="w-4 h-4 mr-2" />
                                  <span>{booking.instructor}</span>
                                </div>
                              </div>
                            </div>

                            <div className="text-right">
                              <div className="text-lg font-bold text-foreground mb-2">
                                ${booking.price}
                              </div>
                              <Button variant="outline" size="sm">
                                Book Again
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="profile" className="space-y-6">
                <h2 className="text-2xl font-semibold text-foreground">
                  Profile Settings
                </h2>

                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground">
                          Full Name
                        </label>
                        <p className="text-muted-foreground">{mockUser.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">
                          Email
                        </label>
                        <p className="text-muted-foreground">
                          {mockUser.email}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">
                          Phone
                        </label>
                        <p className="text-muted-foreground">
                          {mockUser.phone}
                        </p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">
                          Member Since
                        </label>
                        <p className="text-muted-foreground">
                          {mockUser.memberSince}
                        </p>
                      </div>
                    </div>
                    <Button>Edit Profile</Button>
                  </CardContent>
                </Card>

                {/* <Card>
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Preferred Class Types
                      </label>
                      <div className="flex space-x-2 mt-2">
                        <Badge className="bg-green-600 text-white">
                          Pilates
                        </Badge>
                        <Badge className="bg-orange-600 text-white">HIIT</Badge>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground">
                        Notification Preferences
                      </label>
                      <p className="text-muted-foreground">
                        Email reminders 24 hours before class
                      </p>
                    </div>
                    <Button variant="outline">Update Preferences</Button>
                  </CardContent>
                </Card> */}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
