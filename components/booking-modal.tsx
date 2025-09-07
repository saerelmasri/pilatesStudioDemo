"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  Clock,
  MapPin,
  Users,
  Heart,
  Flame,
  CreditCard,
  Shield,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

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

interface BookingModalProps {
  session: Session | null;
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
}

interface BookingForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  agreeToTerms: boolean;
  agreeToWaiver: boolean;
  marketingConsent: boolean;
}

export default function BookingModal({
  session,
  isOpen,
  onClose,
  selectedDate,
}: BookingModalProps) {
  const [step, setStep] = useState<"details" | "payment" | "confirmation">(
    "details"
  );
  const [form, setForm] = useState<BookingForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agreeToTerms: false,
    agreeToWaiver: false,
    marketingConsent: false,
  });

  const handleInputChange = (
    field: keyof BookingForm,
    value: string | boolean
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === "details") {
      setStep("payment");
    } else if (step === "payment") {
      setStep("confirmation");
    }
  };

  const handleBack = () => {
    if (step === "payment") {
      setStep("details");
    } else if (step === "confirmation") {
      setStep("payment");
    }
  };

  const handleClose = () => {
    setStep("details");
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      agreeToTerms: false,
      agreeToWaiver: false,
      marketingConsent: false,
    });
    onClose();
  };

  const isDetailsValid =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.phone &&
    form.agreeToTerms &&
    form.agreeToWaiver;

  if (!session) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {step === "details" && "Book Your Session"}
            {step === "payment" && "Payment Details"}
            {step === "confirmation" && "Booking Confirmed!"}
          </DialogTitle>
        </DialogHeader>

        {/* Session Summary */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {session.title}
                </h3>
                <Badge
                  className={cn(
                    "text-white mb-2",
                    session.type === "pilates"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-orange-600 hover:bg-orange-700"
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
              <div className="text-right">
                <div className="text-2xl font-bold text-foreground">
                  ${session.price}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>
                  {selectedDate} at {session.time} ({session.duration} min)
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{session.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>
                  {session.maxSpots - session.bookedSpots} spots remaining
                </span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-foreground">
                  Instructor: {session.instructor}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step Content */}
        {step === "details" && (
          <div className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="mb-2">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={form.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="mb-2">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    value={form.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    placeholder="Enter your last name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="text-base flex items-center">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Cancellation Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  • <strong>24+ hours:</strong> Full refund or free reschedule
                </p>
                <p>
                  • <strong>12-24 hours:</strong> 50% refund or reschedule with
                  $10 fee
                </p>
                <p>
                  • <strong>Less than 12 hours:</strong> No refund, reschedule
                  with $15 fee
                </p>
                <p>
                  • <strong>No-show:</strong> Full charge, no refund
                </p>
                <p className="text-xs pt-2">
                  Late arrivals (more than 10 minutes) may not be admitted for
                  safety reasons.
                </p>
              </CardContent>
            </Card>

            {/* Agreements */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={form.agreeToTerms}
                  onCheckedChange={(checked: boolean) =>
                    handleInputChange("agreeToTerms", checked as boolean)
                  }
                />
                <Label
                  htmlFor="agreeToTerms"
                  className="text-sm leading-relaxed"
                >
                  I agree to the{" "}
                  <span className="text-primary underline cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and
                  <span className="text-primary underline cursor-pointer ml-1">
                    Cancellation Policy
                  </span>{" "}
                  *
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToWaiver"
                  checked={form.agreeToWaiver}
                  onCheckedChange={(checked: boolean) =>
                    handleInputChange("agreeToWaiver", checked as boolean)
                  }
                />
                <Label
                  htmlFor="agreeToWaiver"
                  className="text-sm leading-relaxed"
                >
                  I acknowledge the risks and sign the{" "}
                  <span className="text-primary underline cursor-pointer">
                    Liability Waiver
                  </span>{" "}
                  *
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="marketingConsent"
                  checked={form.marketingConsent}
                  onCheckedChange={(checked: boolean) =>
                    handleInputChange("marketingConsent", checked as boolean)
                  }
                />
                <Label
                  htmlFor="marketingConsent"
                  className="text-sm leading-relaxed"
                >
                  I'd like to receive updates about new classes and special
                  offers
                </Label>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <Button
                variant="outline"
                onClick={handleClose}
                className="cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isDetailsValid}
                className="cursor-pointer"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === "payment" && (
          <div className="space-y-6">
            {/* Payment Method */}
            {/* <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Payment Method
              </h3>
              <Card className="p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <CreditCard className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">Credit/Debit Card</span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        className="font-mono"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" className="font-mono" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input
                      id="cardName"
                      placeholder="Full name as shown on card"
                    />
                  </div>
                </div>
              </Card>
            </div> */}

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>{session.title}</span>
                  <span>${session.price}</span>
                </div>
                {/* <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Processing Fee</span>
                  <span>$2.50</span>
                </div> */}
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${session.price}</span>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>Your payment information is secure and encrypted</span>
            </div>

            <div className="flex justify-between space-x-4 pt-4">
              <Button
                variant="outline"
                onClick={handleBack}
                className="cursor-pointer"
              >
                Back
              </Button>
              <Button onClick={handleNext} className="flex-1 cursor-pointer">
                Complete Booking (${session.price})
              </Button>
            </div>
          </div>
        )}

        {step === "confirmation" && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Booking Confirmed!
              </h3>
              <p className="text-muted-foreground">
                Your spot has been reserved. We've sent a confirmation email to{" "}
                {form.email}
              </p>
            </div>

            <Card className="text-left">
              <CardHeader>
                <CardTitle className="text-base">Booking Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Booking ID:</span>
                  <span className="font-mono">
                    #PF{Math.random().toString(36).substr(2, 8).toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Class:</span>
                  <span>{session.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date & Time:</span>
                  <span>
                    {selectedDate} at {session.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span>{session.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Instructor:</span>
                  <span>{session.instructor}</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>What to bring:</strong> Water bottle, towel, and
                comfortable workout clothes
              </p>
              <p>
                <strong>Arrival:</strong> Please arrive 10 minutes early for
                check-in
              </p>
              <p>
                <strong>Questions?</strong> Contact us at (555) 123-4567 or
                info@pilatesflow.com
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                onClick={handleClose}
                className="flex-1 bg-transparent cursor-pointer"
              >
                Close
              </Button>
              {/* <Button className="flex-1">Add to Calendar</Button> */}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
