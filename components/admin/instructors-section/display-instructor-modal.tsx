"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendarDays, Phone, Mail } from "lucide-react";

type Instructor = {
  id: number;
  name: string;
  specialty: string;
  phone: string;
  email: string;
  bio: string;
  status: string;
  upcomingClasses: number;
};

type DisplayInstructorModalProps = {
  isOpen: boolean;
  onClose: () => void;
  instructor: Instructor | null;
};

export default function InstructorDetailsModal({
  isOpen,
  onClose,
  instructor,
}: DisplayInstructorModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Instructor Details</DialogTitle>
        </DialogHeader>
        {instructor && (
          <div className="space-y-6">
            {/* Instructor Summary */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      {instructor.name}
                      <Badge
                        variant={
                          instructor.status === "active"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {instructor.status === "active" ? "Active" : "Inactive"}
                      </Badge>
                    </CardTitle>
                    <p className="text-muted-foreground mt-1">
                      {instructor.specialty}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{instructor.phone}</span>
                  </div>
                  {instructor.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{instructor.email}</span>
                    </div>
                  )}
                </div>
                {instructor.bio && (
                  <div>
                    <h4 className="text-sm font-medium mb-2">Bio</h4>
                    <p className="text-sm text-muted-foreground">
                      {instructor.bio}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Classes Assigned */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Assigned Classes</h3>
              {instructor.upcomingClasses > 0 ? (
                <div className="border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left p-3 text-sm font-medium">
                          Class Title
                        </th>
                        <th className="text-left p-3 text-sm font-medium">
                          Date
                        </th>
                        <th className="text-left p-3 text-sm font-medium">
                          Time
                        </th>
                        <th className="text-left p-3 text-sm font-medium">
                          Location
                        </th>
                        <th className="text-left p-3 text-sm font-medium">
                          Spots
                        </th>
                        <th className="text-left p-3 text-sm font-medium">
                          Action
                        </th>
                      </tr>
                    </thead>
                    {/* <tbody>
                        {mockClasses
                          .filter(
                            (c) => c.instructor === selectedInstructor.name
                          )
                          .map((classItem) => (
                            <tr key={classItem.id} className="border-t">
                              <td className="p-3 text-sm">{classItem.title}</td>
                              <td className="p-3 text-sm">{classItem.date}</td>
                              <td className="p-3 text-sm">{classItem.time}</td>
                              <td className="p-3 text-sm">
                                {classItem.location}
                              </td>
                              <td className="p-3 text-sm">
                                {classItem.bookedSpots}/{classItem.maxSpots}
                              </td>
                              <td className="p-3 text-sm">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setIsViewInstructorModalOpen(false);
                                  }}
                                >
                                  Open
                                </Button>
                              </td>
                            </tr>
                          ))}
                      </tbody> */}
                  </table>
                </div>
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <CalendarDays className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      No classes assigned to this instructor yet.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
