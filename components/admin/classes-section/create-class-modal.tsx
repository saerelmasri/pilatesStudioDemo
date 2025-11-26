import { INSTRUCTORS } from "@/common/mockData";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Select } from "@radix-ui/react-select";
import { Plus } from "lucide-react";
import React from "react";

type NewClass = {
  title: string;
  type: string;
  date: string;
  time: string;
  duration: number;
  instructor: string;
  location: string;
  maxSpots: number;
  price: number;
  description: string;
};

type ModalParams = {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (isOpen: boolean) => void;
  newClass: NewClass;
  setNewClass: (newClass: NewClass) => void;
  handleCreateClass: (e: React.FormEvent) => void;
};

function CreateClassModal({
  isCreateModalOpen,
  setIsCreateModalOpen,
  newClass,
  setNewClass,
  handleCreateClass,
}: ModalParams) {
  return (
    <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Class
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Class</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleCreateClass} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Class Title</Label>
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
              <Label htmlFor="type">Class Type</Label>
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
              <Label htmlFor="date">Date</Label>
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
              <Label htmlFor="time">Time</Label>
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
              <Label htmlFor="duration">Duration (minutes)</Label>
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
              <Label htmlFor="instructor">Instructor</Label>
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
              <Label htmlFor="location">Location</Label>
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
              <Label htmlFor="maxSpots">Max Spots</Label>
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
              <Label htmlFor="price">Price ($)</Label>
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
            <Label htmlFor="description">Description</Label>
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
  );
}

export default CreateClassModal;
