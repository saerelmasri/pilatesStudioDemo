"use client";

import { Clock, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  P
                </span>
              </div>
              <span className="font-bold text-xl text-foreground">
                PilatesFlow
              </span>
            </div>
            <p className="text-muted-foreground">
              Transform your body and mind with our expert-led Pilates and HIIT
              classes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Classes</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Pilates Fundamentals</li>
              <li>HIIT Training</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Studio</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>About Us</li>
              <li>Instructors</li>
              <li>Membership</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Wellness St, City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Sun: 6AM-9PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Saer El Masri Property. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
