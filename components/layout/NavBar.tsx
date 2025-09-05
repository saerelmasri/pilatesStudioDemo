"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useAuth, useUi } from "@/context/providers";
import { useRouter } from "next/navigation";
import { gotoSection } from "@/lib/scroll";

export default function NavBar() {
  const { openAuth } = useUi();
  const { user, signOut } = useAuth();
  const router = useRouter();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <span
              className="font-bold text-xl text-foreground select-none cursor-pointer"
              onClick={() => router.push("/")}
            >
              Pilates
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              type="button"
              onClick={() => router.push("/about-us")}
              className="cursor-pointer text-sm font-medium hover:opacity-80 transition-opacity"
              aria-label="Go to Services"
            >
              About Us
            </button>
            <button
              type="button"
              onClick={() => gotoSection("services", router, "/")}
              className="cursor-pointer text-sm font-medium hover:opacity-80 transition-opacity"
              aria-label="Go to Services"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => gotoSection("calendar", router, "/")}
              className="cursor-pointer text-sm font-medium hover:opacity-80 transition-opacity"
              aria-label="Go to Schedule"
            >
              Schedule
            </button>
            <button
              type="button"
              onClick={() => router.push("/membership")}
              className="cursor-pointer text-sm font-medium hover:opacity-80 transition-opacity"
              aria-label="Go to Memberships"
            >
              Memberships
            </button>
            <button
              type="button"
              onClick={() => router.push("/contact-us")}
              className="cursor-pointer text-sm font-medium hover:opacity-80 transition-opacity"
              aria-label="Go to Memberships"
            >
              Contact
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
                  onClick={() => gotoSection("calendar", router, "/")}
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
              onClick={() => gotoSection("calendar", router, "/")}
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
