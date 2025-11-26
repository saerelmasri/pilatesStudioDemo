"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type DeleteInstructorModalProps = {
  isOpen: boolean;
  onClose: () => void;
  confirmDeleteInstructor: () => void;
};

export default function DeleteInstructorModal({
  isOpen,
  onClose,
  confirmDeleteInstructor,
}: DeleteInstructorModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Instructor</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            This will remove the instructor from the system. Existing classes
            assigned to them will show "Unassigned instructor". Are you sure?
          </p>
          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="cursor-pointer"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDeleteInstructor}
              className="cursor-pointer"
            >
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
