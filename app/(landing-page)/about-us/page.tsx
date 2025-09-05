"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Heart,
  Target,
  Zap,
  ShieldCheck,
  Star,
  Clock,
  Dumbbell,
  Leaf,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Movement that Builds Strong Bodies & Calmer Minds
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We’re a modern Pilates & HIIT studio focused on helping everyday
            people move better, feel stronger, and stay consistent.
            Science‑informed programming, uplifting coaches, and a community
            that keeps you accountable.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/#calendar">
              <Button size="lg" className="cursor-pointer">
                Book a Trial Class
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/membership">
              <Button size="lg" variant="outline" className="cursor-pointer">
                View Memberships
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Users className="h-5 w-5" /> Who we are
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                We’re instructors, athletes, and neighbors. Our coaching team
                blends classical Pilates fundamentals with functional strength
                and interval training—designed to meet you where you are and
                guide you forward.
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Target className="h-5 w-5" /> Our mission
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Make high‑quality movement coaching simple, inclusive, and
                sustainable. We help you build strength, mobility, and stamina
                so you can feel good in training—and even better in everyday
                life.
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Heart className="h-5 w-5" /> What we believe
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Progress beats perfection. With small, consistent steps—backed
                by smart programming and a supportive community—anyone can build
                a stronger, more resilient body.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Why choose us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thoughtfully designed classes, premium equipment, and coaching
              that adapts to you—not the other way around.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Certified coaches</h3>
              <p className="text-sm text-muted-foreground">
                Experienced, accredited instructors who tailor cues to your
                level and goals.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Balanced programming</h3>
              <p className="text-sm text-muted-foreground">
                A smart mix of Pilates, strength, and intervals for mobility,
                posture, and performance.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Consistent schedule</h3>
              <p className="text-sm text-muted-foreground">
                Morning and evening classes, easy online booking, and waitlist
                support.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Small-group attention</h3>
              <p className="text-sm text-muted-foreground">
                Class sizes that allow for real coaching, safe progressions, and
                better results.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Clean, mindful space</h3>
              <p className="text-sm text-muted-foreground">
                Light, airy studio with premium Reformers and quality
                equipment—no clutter, no chaos.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-1">Community first</h3>
              <p className="text-sm text-muted-foreground">
                Friendly, welcoming vibes. Come as you are—leave a little
                stronger each week.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Studio Stats (optional) */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Card className="p-6">
              <p className="text-3xl font-bold">10k+</p>
              <p className="text-sm text-muted-foreground">Class check‑ins</p>
            </Card>
            <Card className="p-6">
              <p className="text-3xl font-bold">4.9/5</p>
              <p className="text-sm text-muted-foreground">Member rating</p>
            </Card>
            <Card className="p-6">
              <p className="text-3xl font-bold">20+</p>
              <p className="text-sm text-muted-foreground">Weekly sessions</p>
            </Card>
            <Card className="p-6">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm text-muted-foreground">Coach‑led classes</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ (updated) */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">FAQs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to the most common questions about classes,
              memberships, and booking.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h4 className="font-semibold mb-2">Do I need experience?</h4>
              <p className="text-muted-foreground">
                Not at all. We welcome beginners. Coaches offer options and cues
                so you can learn safely and progress at a pace that fits you.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-2">
                Can I freeze my membership?
              </h4>
              <p className="text-muted-foreground">
                Yes—members can freeze up to 3 months per year for travel or
                medical reasons. Just email us at least 7 days before your next
                billing date.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-2">
                How does cancellation work?
              </h4>
              <p className="text-muted-foreground">
                No long‑term contracts. Cancel anytime with 30 days’ notice from
                your next billing date. Your access continues until the end of
                the paid period.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-2">What if I miss classes?</h4>
              <p className="text-muted-foreground">
                Basic plan classes roll over for up to 2 months. Premium and
                Elite enjoy unlimited access, so you can simply rebook on your
                schedule.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold mb-2">
                Do you offer trials or drop‑ins?
              </h4>
              <p className="text-muted-foreground">
                Yes—first‑time visitors can book a discounted trial class. We
                also offer single‑session drop‑ins when space allows.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
            Try a class, meet the coaches, and feel the difference in one
            session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#calendar">
              <Button size="lg" variant="secondary" className="cursor-pointer">
                Book Your First Class
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/membership">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Explore Memberships
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
