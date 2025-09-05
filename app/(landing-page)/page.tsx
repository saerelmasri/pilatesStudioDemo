"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AuthModalPortal from "@/components/AuthModalPortal";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services/Services";
import CalendarSec from "@/components/sections/Calendar/CalendarSec";
import Reviews from "@/components/sections/Reviews/Reviews";
import { gotoSection } from "@/lib/scroll";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="min-h-screen ">
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Calendar Section */}
      <CalendarSec />

      {/* Membership CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-16 text-center">
          <Card className="border-primary/20 p-8 bg-muted/30">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Unlimited Access Membership
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our community and get unlimited access to all Pilates and
              HIIT classes, plus exclusive member benefits and priority booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/membership">
                <Button size="lg" className="cursor-pointer">
                  View Membership Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer"
                onClick={() => gotoSection("membership", router, "/membership")}
              >
                Try a Free Class
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            We believe fitness should be a journey of self-discovery and
            empowerment. Our expert instructors guide you through transformative
            Pilates and HIIT sessions that strengthen your body, calm your mind,
            and build a supportive community where everyone can thrive.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* Quick CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of members who have already transformed their lives
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="px-8 py-3 cursor-pointer"
            onClick={() => gotoSection("calendar")}
          >
            Book Your First Class
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <AuthModalPortal />
    </div>
  );
}
