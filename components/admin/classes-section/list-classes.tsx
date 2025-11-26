import { mockClasses } from "@/common/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Badge,
  Calendar,
  Clock,
  Edit,
  Eye,
  Flame,
  Heart,
  MapPin,
  Trash2,
  Users,
} from "lucide-react";
import React from "react";

type ListClassesProps = {
  handleViewDetails: (classItem: (typeof mockClasses)[0]) => void;
  handleEditClass: (classItem: (typeof mockClasses)[0]) => void;
};

function ListClasses({ handleViewDetails, handleEditClass }: ListClassesProps) {
  return (
    <div className="grid gap-4">
      {mockClasses.map((classItem) => (
        <Card key={classItem.id}>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
              <div className="flex-1 w-full">
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {classItem.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{classItem.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>
                      {classItem.time} ({classItem.duration}min)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{classItem.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>
                      {classItem.bookedSpots}/{classItem.maxSpots} booked
                    </span>
                  </div>
                </div>

                <div className="mt-2 text-sm text-muted-foreground">
                  <span className="font-medium">Instructor:</span>{" "}
                  {classItem.instructor}
                </div>
              </div>

              <div className="text-left lg:text-right w-full lg:w-auto">
                <div className="text-lg font-bold text-foreground mb-3">
                  ${classItem.price}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleViewDetails(classItem)}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View Details
                  </Button>
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
  );
}

export default ListClasses;
