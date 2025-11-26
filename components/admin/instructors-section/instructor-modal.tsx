"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SPECIALTIES = [
  "Reformer Pilates",
  "HIIT Pilates",
  "Stretch/Tone",
  "Mat Pilates",
  "Beginner-friendly",
  "Pregnancy-safe",
];

type NewInstructor = {
  name: string;
  specialty: string;
  phone: string;
  email: string;
  bio: string;
  status: string;
};

type InstructorModalProps = {
  mode: "create" | "edit"; // The key difference!
  isOpen: boolean;
  onClose: () => void;
  instructor: NewInstructor;
  setInstructor: (instructor: NewInstructor) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function InstructorModal({
  mode,
  isOpen,
  onClose,
  instructor,
  setInstructor,
  onSubmit,
}: InstructorModalProps) {
  const isEdit = mode === "edit";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="">
            {isEdit ? "Edit Instructor" : "Add Instructor"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="name" className="mb-2">
                Full Name
              </Label>
              <Input
                id="name"
                value={instructor.name}
                onChange={(e) =>
                  setInstructor({
                    ...instructor,
                    name: e.target.value,
                  })
                }
                placeholder="e.g., Emma Thompson"
                required
              />
            </div>
            <div>
              <Label htmlFor="specialty" className="mb-2">
                Specialty
              </Label>
              <Select
                value={instructor.specialty}
                onValueChange={(value) =>
                  setInstructor({ ...instructor, specialty: value })
                }
              >
                <SelectTrigger className="cursor-pointer">
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  {SPECIALTIES.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="phone" className="mb-2">
                Phone Number
              </Label>
              <Input
                id="phone"
                value={instructor.phone}
                onChange={(e) =>
                  setInstructor({
                    ...instructor,
                    phone: e.target.value,
                  })
                }
                placeholder="+1 (555) 123-4567"
                required
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="email" className="mb-2">
                Email (Optional)
              </Label>
              <Input
                id="email"
                type="email"
                value={instructor.email}
                onChange={(e) =>
                  setInstructor({
                    ...instructor,
                    email: e.target.value,
                  })
                }
                placeholder="email@example.com"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="bio" className="mb-2">
                Bio / Notes (Optional)
              </Label>
              <Textarea
                id="bio"
                value={instructor.bio}
                onChange={(e) =>
                  setInstructor({
                    ...instructor,
                    bio: e.target.value,
                  })
                }
                placeholder="Brief bio or notes about the instructor..."
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="status" className="mb-2">
                Status
              </Label>
              <Select
                value={instructor.status}
                onValueChange={(value) =>
                  setInstructor({ ...instructor, status: value })
                }
              >
                <SelectTrigger className="cursor-pointer">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="cursor-pointer"
            >
              Cancel
            </Button>
            <Button type="submit" className="cursor-pointer">
              {isEdit ? "Save Changes" : "Add Instructor"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
