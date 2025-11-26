"use client";

import type React from "react";
import { useState } from "react";
import CreateClassModal from "./create-class-modal";
import ViewClassModal from "./view-class-modal";
import ListClasses from "./list-classes";
import { mockStudents } from "@/common/mockData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { INSTRUCTORS } from "@/common/mockData";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type ClassType = {
  id: string;
  title: string;
  type: string;
  date: string;
  time: string;
  duration: number;
  instructor: string;
  location: string;
  room: string;
  maxSpots: number;
  bookedSpots: number;
  price: number;
  description: string;
};

export default function ClassesSection() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewDetailsModalOpen, setIsViewDetailsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ClassType | null>(null);
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
    console.log("Updating class:", selectedClass?.id, newClass);
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

  const handleViewDetails = (classItem: any) => {
    setSelectedClass(classItem);
    setIsViewDetailsModalOpen(true);
  };

  const getStudentsForClass = (classId: string) => {
    return mockStudents.filter((student) => student.classId === classId);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">
          Manage Classes
        </h2>
        <CreateClassModal
          isCreateModalOpen={isCreateModalOpen}
          setIsCreateModalOpen={setIsCreateModalOpen}
          newClass={newClass}
          setNewClass={setNewClass}
          handleCreateClass={handleCreateClass}
        />
      </div>

      {/* Edit Class Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
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
                    setNewClass({
                      ...newClass,
                      title: e.target.value,
                    })
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
                <Select
                  value={newClass.instructor}
                  onValueChange={(value) =>
                    setNewClass({ ...newClass, instructor: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select instructor" />
                  </SelectTrigger>
                  <SelectContent>
                    {INSTRUCTORS.map((instructor) => (
                      <SelectItem key={instructor} value={instructor}>
                        {instructor}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="edit-location">Location</Label>
                <Input
                  id="edit-location"
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

      <ViewClassModal
        isViewDetailsModalOpen={isViewDetailsModalOpen}
        setIsViewDetailsModalOpen={setIsViewDetailsModalOpen}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
        getStudentsForClass={getStudentsForClass}
      />

      <ListClasses
        handleViewDetails={handleViewDetails}
        handleEditClass={handleEditClass}
      />
    </div>
  );
}
