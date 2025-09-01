"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Users, Heart, Zap, Target } from "lucide-react";
import Link from "next/link";

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6">
            Choose Your Perfect Plan
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Membership Plans
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Unlock unlimited access to all our Pilates and HIIT classes with
            flexible membership options designed for your lifestyle.
          </p>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  Basic
                </CardTitle>
                <div className="text-4xl font-bold text-foreground mb-2">
                  $89
                  <span className="text-lg font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Perfect for getting started
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">8 classes per month</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">
                      Access to all Pilates classes
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">Basic HIIT classes</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">
                      Online booking system
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">Locker room access</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-transparent cursor-pointer"
                  variant="outline"
                >
                  Choose Basic
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative border-primary shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  Premium
                </CardTitle>
                <div className="text-4xl font-bold text-foreground mb-2">
                  $149
                  <span className="text-lg font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Best value for regular members
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">Unlimited classes</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">
                      All Pilates & HIIT classes
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">
                      Reformer Pilates access
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">Priority booking</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">
                      Guest passes (2/month)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">
                      Nutrition consultation
                    </span>
                  </div>
                </div>
                <Button className="w-full mt-6 cursor-pointer">
                  Choose Premium
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Elite Plan */}
            <Card className="relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  Elite
                </CardTitle>
                <div className="text-4xl font-bold text-foreground mb-2">
                  $199
                  <span className="text-lg font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Ultimate fitness experience
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">
                      Everything in Premium
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">
                      Personal training sessions (2/month)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">
                      Unlimited guest passes
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">
                      Massage therapy discount
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">Exclusive workshops</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-foreground">24/7 studio access</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-6 bg-transparent cursor-pointer"
                  variant="outline"
                >
                  Choose Elite
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What's Included
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All membership plans include access to our comprehensive range of
              classes and facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Pilates Classes
              </h4>
              <p className="text-sm text-muted-foreground">
                Fundamentals, Mat, and Reformer Pilates for all levels
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                HIIT Training
              </h4>
              <p className="text-sm text-muted-foreground">
                High-intensity cardio and strength training sessions
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Expert Instructors
              </h4>
              <p className="text-sm text-muted-foreground">
                Certified professionals with years of experience
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">
                Premium Equipment
              </h4>
              <p className="text-sm text-muted-foreground">
                State-of-the-art Reformers and fitness equipment
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-2">
                Can I freeze my membership?
              </h4>
              <p className="text-muted-foreground">
                Yes, you can freeze your membership for up to 3 months per year
                for medical reasons or extended travel.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-2">
                Is there a cancellation fee?
              </h4>
              <p className="text-muted-foreground">
                No cancellation fees. You can cancel your membership with 30
                days notice.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-2">
                Can I bring guests?
              </h4>
              <p className="text-muted-foreground">
                Premium and Elite members receive guest passes. Basic members
                can purchase day passes for guests.
              </p>
            </Card>

            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-2">
                What if I miss classes?
              </h4>
              <p className="text-muted-foreground">
                Unused classes from Basic membership roll over for up to 2
                months. Premium and Elite have unlimited access.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join our community today and start your fitness journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => (window.location.href = "/#calendar")}
            >
              Book Your First Class
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
