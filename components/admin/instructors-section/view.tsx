"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye, Phone, Mail } from "lucide-react";
import InstructorModal from "./instructor-modal";
import InstructorDetailsModal from "./display-instructor-modal";
import DeleteInstructorModal from "./delete-instructor-modal";

const mockInstructors = [
  {
    id: 1,
    name: "Emma Thompson",
    specialty: "Reformer Pilates",
    phone: "+1 (555) 123-4567",
    email: "emma@pilatesflow.com",
    bio: "Certified Pilates instructor with 10+ years of experience specializing in reformer and mat classes.",
    status: "active",
    upcomingClasses: 0,
  },
  {
    id: 2,
    name: "Sarah Lee",
    specialty: "HIIT Pilates",
    phone: "+1 (555) 234-5678",
    email: "sarah@pilatesflow.com",
    bio: "High-energy instructor combining Pilates principles with HIIT for maximum results.",
    status: "active",
    upcomingClasses: 0,
  },
  {
    id: 3,
    name: "John Carter",
    specialty: "Mat Pilates",
    phone: "+1 (555) 345-6789",
    email: "john@pilatesflow.com",
    bio: "Specializes in beginner-friendly mat Pilates and rehabilitation exercises.",
    status: "active",
    upcomingClasses: 0,
  },
  {
    id: 4,
    name: "Lisa Anderson",
    specialty: "Pregnancy-safe Pilates",
    phone: "+1 (555) 456-7890",
    email: "lisa@pilatesflow.com",
    bio: "Pre and postnatal Pilates specialist helping mothers stay strong and healthy.",
    status: "inactive",
    upcomingClasses: 0,
  },
];

export default function InstructorsSection() {
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewInstructorModalOpen, setIsViewInstructorModalOpen] =
    useState(false);
  const [isDeleteInstructorModalOpen, setIsDeleteInstructorModalOpen] =
    useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState<any>(null);
  const [newInstructor, setNewInstructor] = useState({
    name: "",
    specialty: "",
    phone: "",
    email: "",
    bio: "",
    status: "active",
  });

  const handleCreateInstructor = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating instructor:", newInstructor);
    setIsModalOpen(false);
    resetForm();
  };

  const handleEditInstructor = (instructorData: any) => {
    setNewInstructor({
      name: instructorData.name,
      specialty: instructorData.specialty,
      phone: instructorData.phone,
      email: instructorData.email,
      bio: instructorData.bio,
      status: instructorData.status,
    });
    setModalMode("edit");
    setIsModalOpen(true);
  };

  const handleUpdateInstructor = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating instructor:", newInstructor);
    setIsModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setNewInstructor({
      name: "",
      specialty: "",
      phone: "",
      email: "",
      bio: "",
      status: "active",
    });
    setModalMode("create");
  };

  const handleViewInstructor = (instructor: any) => {
    setSelectedInstructor(instructor);
    setIsViewInstructorModalOpen(true);
  };

  const handleDeleteInstructor = (instructor: any) => {
    setSelectedInstructor(instructor);
    setIsDeleteInstructorModalOpen(true);
  };

  const confirmDeleteInstructor = () => {
    console.log("Deleting instructor:", selectedInstructor.id);
    setIsDeleteInstructorModalOpen(false);
    setSelectedInstructor(null);
  };

  const handleSubmit =
    modalMode === "create" ? handleCreateInstructor : handleUpdateInstructor;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Instructors</h2>
        <Button
          onClick={() => {
            setModalMode("create");
            setIsModalOpen(true);
          }}
          className="cursor-pointer"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Instructor
        </Button>
      </div>

      {/* Instructors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockInstructors.map((instructor) => (
          <Card
            key={instructor.id}
            className="hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {instructor.name}
                    {instructor.status === "inactive" && (
                      <Badge variant="secondary" className="text-xs bg-red-600 text-white">
                        Inactive
                      </Badge>
                    )}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {instructor.specialty}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{instructor.phone}</span>
                </div>
                {instructor.email && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>{instructor.email}</span>
                  </div>
                )}
              </div>
              <div className="pt-2 border-t">
                <p className="text-sm font-medium">
                  {instructor.upcomingClasses} upcoming{" "}
                  {instructor.upcomingClasses === 1 ? "class" : "classes"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleViewInstructor(instructor)}
                  className="flex-1 cursor-pointer"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEditInstructor(instructor)}
                  className="flex-1 cursor-pointer"
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDeleteInstructor(instructor)}
                  className="text-red-600 hover:text-red-700 cursor-pointer"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add/Edit Instructor Modal */}
      <InstructorModal
        mode={modalMode}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          resetForm();
        }}
        instructor={newInstructor}
        setInstructor={setNewInstructor}
        onSubmit={handleSubmit}
      />

      {/* View Instructor Details Modal */}
      <InstructorDetailsModal
        isOpen={isViewInstructorModalOpen}
        onClose={() => setIsViewInstructorModalOpen(false)}
        instructor={selectedInstructor}
      />

      {/* Delete Instructor Confirmation Modal */}
      <DeleteInstructorModal
        isOpen={isDeleteInstructorModalOpen}
        onClose={() => setIsDeleteInstructorModalOpen(false)}
        confirmDeleteInstructor={confirmDeleteInstructor}
      />
    </div>
  );
}
