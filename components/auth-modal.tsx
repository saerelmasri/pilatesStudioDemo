"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (user: {
    name: string;
    email: string;
    role: "user" | "admin";
  }) => void;
}

export default function AuthModal({
  isOpen,
  onClose,
  onAuthSuccess,
}: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) {
      return;
    }
    setSubmitting(true);
    const email = form.email.trim().toLowerCase();
    await new Promise((r) => setTimeout(r, 250));
    // Mock authentication - in real app, this would call an API
    const mockUser = {
      name:
        mode === "signup" ? `${form.firstName} ${form.lastName}` : "John Doe",
      email: form.email,
      role: form.email.includes("admin")
        ? ("admin" as const)
        : ("user" as const),
    };

    onAuthSuccess(mockUser);
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    });
    setMode("login");
    setShowPassword(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const isFormValid = () => {
    if (mode === "login") {
      return form.email && form.password;
    } else {
      return (
        form.firstName &&
        form.lastName &&
        form.email &&
        form.phone &&
        form.password &&
        form.confirmPassword &&
        form.password === form.confirmPassword &&
        form.agreeToTerms
      );
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          handleClose();
        }
      }}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {mode === "login" ? "Welcome Back" : "Join PilatesFlow"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      name="given-name"
                      autoComplete="given-name"
                      type="text"
                      placeholder="First name"
                      value={form.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="lastName"
                      name="family-name"
                      autoComplete="family-name"
                      type="text"
                      placeholder="Last name"
                      value={form.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    name="tel"
                    autoComplete="tel"
                    type="tel"
                    placeholder="Phone number"
                    value={form.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <Label htmlFor="email" className="mb-2">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                autoComplete="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="password" className="mb-2">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                name="current-password"
                autoComplete={
                  mode === "login" ? "current-password" : "new-password"
                }
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={form.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className="pl-10 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {mode === "signup" && (
            <>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    name="new-password"
                    autoComplete="new-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={form.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    className="pl-10"
                    required
                  />
                </div>
                {form.password &&
                  form.confirmPassword &&
                  form.password !== form.confirmPassword && (
                    <p className="text-sm text-red-500 mt-1">
                      Passwords do not match
                    </p>
                  )}
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={form.agreeToTerms}
                  onCheckedChange={(checked) =>
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
                  and{" "}
                  <span className="text-primary underline cursor-pointer">
                    Privacy Policy
                  </span>
                </Label>
              </div>
            </>
          )}

          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={!isFormValid() || submitting}
          >
            {submitting
              ? "Please wait..."
              : mode === "login"
              ? "Sign In"
              : "Create Account"}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or</span>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
              className="text-primary hover:underline font-medium cursor-pointer"
            >
              {mode === "login" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>

        {mode === "login" && (
          <div className="text-center">
            <button
              type="button"
              className="text-sm text-primary hover:underline cursor-pointer"
            >
              Forgot your password?
            </button>
          </div>
        )}

        <div className="text-center text-xs text-muted-foreground">
          <p>Demo accounts:</p>
          <p>User: user@demo.com / Admin: admin@demo.com</p>
          <p>Password: demo123</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
