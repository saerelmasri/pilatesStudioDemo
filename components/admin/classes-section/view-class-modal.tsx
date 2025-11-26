import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Badge,
  Calendar,
  Clock,
  Flame,
  Heart,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import React from "react";

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

type Student = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

type ViewClassModalProps = {
  isViewDetailsModalOpen: boolean;
  setIsViewDetailsModalOpen: (isOpen: boolean) => void;
  selectedClass: ClassType | null;
  setSelectedClass: (classItem: ClassType | null) => void;
  getStudentsForClass: (classId: string) => Student[];
};

function ViewClassModal({
  isViewDetailsModalOpen,
  setIsViewDetailsModalOpen,
  selectedClass,
  setSelectedClass,
  getStudentsForClass,
}: ViewClassModalProps) {
  return (
    <Dialog
      open={isViewDetailsModalOpen}
      onOpenChange={setIsViewDetailsModalOpen}
    >
      <DialogContent className="max-w-3xl sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Class Details</DialogTitle>
        </DialogHeader>
        {selectedClass && (
          <div className="space-y-6">
            {/* Summary Block */}
            <div className="rounded-lg p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {selectedClass.title}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">
                    ${selectedClass.price}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-medium mr-2">Date:</span>
                  <span>{selectedClass.date}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="font-medium mr-2">Time & Duration:</span>
                  <span>
                    {selectedClass.time} ({selectedClass.duration} min)
                  </span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="font-medium mr-2">Location:</span>
                  <span>{selectedClass.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="font-medium mr-2">Studio:</span>
                  <span>{selectedClass.room}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="font-medium mr-2">Instructor:</span>
                  <span>{selectedClass.instructor}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="font-medium mr-2">Capacity:</span>
                  <span>
                    {selectedClass.bookedSpots} / {selectedClass.maxSpots}{" "}
                    booked
                  </span>
                </div>
              </div>

              {selectedClass.description && (
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">
                    {selectedClass.description}
                  </p>
                </div>
              )}
            </div>

            {/* Students Table */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Students in this class
              </h4>
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr className="text-left">
                        <th className="p-3 font-medium text-sm text-foreground">
                          Student Name
                        </th>
                        <th className="p-3 font-medium text-sm text-foreground">
                          Contact
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {getStudentsForClass(selectedClass.id).length > 0 ? (
                        getStudentsForClass(selectedClass.id).map((student) => (
                          <tr
                            key={student.id}
                            className="border-t border-border hover:bg-muted/30"
                          >
                            <td className="p-3 text-sm text-foreground">
                              {student.name}
                            </td>
                            <td className="p-3 text-sm text-muted-foreground">
                              <div className="space-y-1">
                                <div className="flex items-center">
                                  <Mail className="w-3 h-3 mr-1" />
                                  {student.email}
                                </div>
                                <div className="flex items-center">
                                  <Phone className="w-3 h-3 mr-1" />
                                  {student.phone}
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan={4}
                            className="p-6 text-center text-muted-foreground"
                          >
                            No students enrolled yet
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setIsViewDetailsModalOpen(false);
                  setSelectedClass(null);
                }}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default ViewClassModal;
