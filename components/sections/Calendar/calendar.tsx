"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Users,
  Heart,
  Flame,
  CalendarIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import BookingModal from "@/components/booking-modal";

interface Session {
  id: string;
  title: string;
  type: "pilates" | "hiit";
  time: string;
  duration: number;
  instructor: string;
  location: string;
  maxSpots: number;
  bookedSpots: number;
  price: number;
}

interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  sessions: Session[];
}

// Mock session data
const mockSessions: Record<string, Session[]> = {
  "2024-12-15": [
    {
      id: "1",
      title: "Morning Pilates Flow",
      type: "pilates",
      time: "08:00",
      duration: 60,
      instructor: "Sarah Johnson",
      location: "Studio A",
      maxSpots: 12,
      bookedSpots: 8,
      price: 35,
    },
    {
      id: "2",
      title: "HIIT Bootcamp",
      type: "hiit",
      time: "18:00",
      duration: 45,
      instructor: "Mike Rodriguez",
      location: "Studio B",
      maxSpots: 15,
      bookedSpots: 12,
      price: 30,
    },
  ],
  "2024-12-16": [
    {
      id: "3",
      title: "Reformer Pilates",
      type: "pilates",
      time: "09:30",
      duration: 50,
      instructor: "Emma Thompson",
      location: "Reformer Room",
      maxSpots: 8,
      bookedSpots: 6,
      price: 45,
    },
  ],
  "2024-12-17": [
    {
      id: "4",
      title: "Cardio HIIT",
      type: "hiit",
      time: "07:00",
      duration: 30,
      instructor: "David Chen",
      location: "Studio A",
      maxSpots: 20,
      bookedSpots: 15,
      price: 25,
    },
    {
      id: "5",
      title: "Pilates Fundamentals",
      type: "pilates",
      time: "19:00",
      duration: 60,
      instructor: "Lisa Park",
      location: "Studio B",
      maxSpots: 14,
      bookedSpots: 9,
      price: 35,
    },
  ],
};

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11, 15)); // December 2024
  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);
  const [bookingSession, setBookingSession] = useState<Session | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedDateString, setSelectedDateString] = useState("");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date: Date): CalendarDay[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days: CalendarDay[] = [];
    const today = new Date();

    for (let i = 0; i < 42; i++) {
      const currentDay = new Date(startDate);
      currentDay.setDate(startDate.getDate() + i);

      const dateKey = `${currentDay.getFullYear()}-${String(
        currentDay.getMonth() + 1
      ).padStart(2, "0")}-${String(currentDay.getDate()).padStart(2, "0")}`;
      const sessions = mockSessions[dateKey] || [];

      days.push({
        date: currentDay.getDate(),
        isCurrentMonth: currentDay.getMonth() === month,
        isToday: currentDay.toDateString() === today.toDateString(),
        sessions,
      });
    }

    return days;
  };

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (direction === "next" ? 1 : -1));
      return newDate;
    });
    setSelectedDay(null);
  };

  const handleBookSession = (session: Session) => {
    setBookingSession(session);
    const dateStr = `${monthNames[currentDate.getMonth()]} ${
      selectedDay?.date
    }, ${currentDate.getFullYear()}`;
    setSelectedDateString(dateStr);
    setIsBookingModalOpen(true);
  };

  const days = getDaysInMonth(currentDate);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Calendar */}
          <div className="xl:col-span-2">
            <Card className="shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl md:text-2xl font-bold">
                    {monthNames[currentDate.getMonth()]}{" "}
                    {currentDate.getFullYear()}
                  </CardTitle>
                  <div className="flex items-center space-x-1">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth("prev")}
                      className="h-8 w-8 p-0"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigateMonth("next")}
                      className="h-8 w-8 p-0"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                {/* Day headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayNames.map((day) => (
                    <div
                      key={day}
                      className="p-2 text-center text-xs md:text-sm font-medium text-muted-foreground"
                    >
                      <span className="hidden sm:inline">{day}</span>
                      <span className="sm:hidden">{day.slice(0, 1)}</span>
                    </div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-1">
                  {days.map((day, index) => (
                    <button
                      key={index}
                      onClick={() =>
                        day.isCurrentMonth && day.sessions.length > 0
                          ? setSelectedDay(day)
                          : null
                      }
                      className={cn(
                        "p-1 md:p-2 h-16 md:h-20 border rounded-lg text-left transition-all duration-200 relative",
                        "hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20",
                        day.isCurrentMonth
                          ? "bg-background hover:bg-muted/50"
                          : "bg-muted/30 text-muted-foreground",
                        day.isToday && "ring-2 ring-primary bg-primary/5",
                        day.sessions.length > 0 &&
                          day.isCurrentMonth &&
                          "cursor-pointer hover:shadow-md hover:scale-[1.02]",
                        selectedDay === day &&
                          "ring-2 ring-primary bg-primary/10"
                      )}
                    >
                      <span
                        className={cn(
                          "text-xs md:text-sm font-medium block",
                          day.isToday && "text-primary font-bold"
                        )}
                      >
                        {day.date}
                      </span>

                      {/* Session indicators */}
                      {day.sessions.length > 0 && day.isCurrentMonth && (
                        <div className="mt-1 space-y-0.5">
                          {day.sessions
                            .slice(0, 2)
                            .map((session, sessionIndex) => (
                              <div
                                key={sessionIndex}
                                className={cn(
                                  "text-[10px] md:text-xs px-1 py-0.5 rounded text-white truncate",
                                  session.type === "pilates"
                                    ? "bg-primary"
                                    : "bg-secondary-foreground"
                                )}
                              >
                                <span className="hidden md:inline">
                                  {session.time}{" "}
                                </span>
                                {session.title.split(" ")[0]}
                              </div>
                            ))}
                          {day.sessions.length > 2 && (
                            <div className="text-[10px] md:text-xs text-muted-foreground">
                              +{day.sessions.length - 2}
                            </div>
                          )}
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Mobile legend below calendar */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm xl:hidden">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded mr-2"></div>
                    <span className="text-muted-foreground">Pilates</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-secondary-foreground rounded mr-2"></div>
                    <span className="text-muted-foreground">HIIT</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Session Details Sidebar */}
          <div className="xl:col-span-1">
            <Card className="xl:sticky xl:top-24 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg md:text-xl">
                  {selectedDay
                    ? `${monthNames[currentDate.getMonth()]} ${
                        selectedDay.date
                      }`
                    : "Select a Day"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6">
                {selectedDay && selectedDay.sessions.length > 0 ? (
                  <div className="space-y-4">
                    {selectedDay.sessions.map((session) => (
                      <Card
                        key={session.id}
                        className="p-4 shadow-sm border-l-4 border-l-primary/20"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base truncate">
                              {session.title}
                            </h4>
                            <Badge
                              variant="secondary"
                              className={cn(
                                "text-white text-xs",
                                session.type === "pilates"
                                  ? "bg-primary hover:bg-primary/90"
                                  : "bg-secondary-foreground hover:bg-secondary-foreground/90"
                              )}
                            >
                              {session.type === "pilates" ? (
                                <Heart className="w-3 h-3 mr-1" />
                              ) : (
                                <Flame className="w-3 h-3 mr-1" />
                              )}
                              {session.type.toUpperCase()}
                            </Badge>
                          </div>
                          <div className="text-right ml-2">
                            <div className="text-lg md:text-xl font-bold text-foreground">
                              ${session.price}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2 text-xs md:text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span>
                              {session.time} ({session.duration} min)
                            </span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span className="truncate">{session.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span>
                              {session.maxSpots - session.bookedSpots} spots
                              left
                            </span>
                          </div>
                          <div className="text-foreground font-medium text-xs md:text-sm">
                            Instructor: {session.instructor}
                          </div>
                        </div>

                        {/* Availability indicator */}
                        <div className="mb-4">
                          <div className="flex justify-between text-xs text-muted-foreground mb-2">
                            <span>Availability</span>
                            <span>
                              {session.bookedSpots}/{session.maxSpots}
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className={cn(
                                "h-2 rounded-full transition-all duration-300",
                                session.bookedSpots / session.maxSpots > 0.8
                                  ? "bg-destructive"
                                  : session.bookedSpots / session.maxSpots > 0.6
                                  ? "bg-yellow-500"
                                  : "bg-primary"
                              )}
                              style={{
                                width: `${
                                  (session.bookedSpots / session.maxSpots) * 100
                                }%`,
                              }}
                            />
                          </div>
                        </div>

                        <Button
                          className="w-full text-sm md:text-base"
                          disabled={session.bookedSpots >= session.maxSpots}
                          onClick={() => handleBookSession(session)}
                        >
                          {session.bookedSpots >= session.maxSpots
                            ? "Fully Booked"
                            : "Book Now"}
                        </Button>
                      </Card>
                    ))}
                  </div>
                ) : selectedDay ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <CalendarIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-sm md:text-base">
                      No sessions scheduled for this day
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <CalendarIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-sm md:text-base mb-4">
                      Click on a day with sessions to view details
                    </p>
                    <div className="space-y-2 hidden xl:block">
                      <div className="flex items-center justify-center text-sm">
                        <div className="w-3 h-3 bg-primary rounded mr-2"></div>
                        <span>Pilates Classes</span>
                      </div>
                      <div className="flex items-center justify-center text-sm">
                        <div className="w-3 h-3 bg-secondary-foreground rounded mr-2"></div>
                        <span>HIIT Classes</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <BookingModal
        session={bookingSession}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedDate={selectedDateString}
      />
    </>
  );
}
