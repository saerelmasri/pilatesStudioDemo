"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { scrollToSection } from "@/lib/scroll";
import { useAuth, useUi } from "@/context/providers";

export default function NavBar() {
  const { openAuth } = useUi();
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <span className="font-bold text-xl text-foreground select-none">
              Pilates
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              type="button"
              onClick={() => scrollToSection("services")}
              className="cursor-pointer text-sm font-medium hover:opacity-80 transition-opacity"
              aria-label="Go to Services"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("calendar")}
              className="cursor-pointer text-sm font-medium hover:opacity-80 transition-opacity"
              aria-label="Go to Schedule"
            >
              Schedule
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("membership")}
              className="cursor-pointer text-sm font-medium hover:opacity-80 transition-opacity"
              aria-label="Go to Memberships"
            >
              Memberships
            </button>

            {user ? (
              <div className="flex items-center space-x-4">
                <Button
                  size="lg"
                  className="cursor-pointer hover:rounded-lg"
                  asChild
                >
                  <Link href={user.role === "admin" ? "/admin" : "/dashboard"}>
                    {user.role === "admin" ? "Admin Panel" : "Go to Dashboard"}
                  </Link>
                </Button>

                <Button
                  size="lg"
                  type="button"
                  onClick={signOut}
                  className="cursor-pointer hover:bg-gray-200 hover:rounded-lg"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <>
                <Button
                  size="lg"
                  type="button"
                  className="cursor-pointer"
                  onClick={openAuth}
                >
                  Sign In
                </Button>
                <Button
                  size="lg"
                  type="button"
                  className="cursor-pointer"
                  onClick={() => scrollToSection("calendar")}
                >
                  Book Now
                </Button>
              </>
            )}
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <Button
              size="lg"
              type="button"
              className="cursor-pointer hover:bg-gray-200 hover:rounded-lg"
              onClick={() => scrollToSection("calendar")}
              aria-label="Book a session"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
