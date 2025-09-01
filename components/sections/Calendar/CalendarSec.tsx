import { Card } from "@/components/ui/card";
// @ts-ignore
import Calendar from "./Calendar";
import { Flame, Heart, Target, Zap } from "lucide-react";

export default function CalendarSec() {
  return (
    <section id="calendar" className="py-10 bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Class Schedule
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Browse our upcoming classes and book your spot. Click on any day to
          see available sessions.
        </p>
      </div>
      <Calendar />

      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-md transition-shadow ">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">
              Pilates Fundamentals
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Perfect for beginners learning core Pilates principles
            </p>
          </Card>

          <Card className="text-center p-6 hover:shadow-md transition-shadow ">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">
              Reformer Pilates
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Advanced equipment-based classes for deeper engagement
            </p>
          </Card>

          <Card className="text-center p-6 hover:shadow-md transition-shadow ">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">Cardio HIIT</h4>
            <p className="text-sm text-muted-foreground mb-4">
              High-energy cardio intervals for maximum calorie burn
            </p>
          </Card>

          <Card className="text-center p-6 hover:shadow-md transition-shadow ">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Flame className="w-6 h-6 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2">
              Strength HIIT
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Build muscle and power with resistance-based intervals
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
