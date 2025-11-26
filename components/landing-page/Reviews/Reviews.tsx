"use client";

import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Reviews() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Sarah M.",
      image: "/professional-woman-smiling.png",
      rating: 5,
      text: "I've been coming to PilatesFlow for 8 months now and the transformation has been incredible. The instructors are so knowledgeable and the community is amazing. My core strength has improved dramatically!",
      badge: "Pilates Member",
    },
    {
      name: "Mike R.",
      image: "/athletic-man-smiling.png",
      rating: 5,
      text: "The HIIT classes here are next level! I've tried other gyms but nothing compares to the energy and results I get here. Lost 15 pounds in 3 months and feeling stronger than ever.",
      badge: "HIIT Member",
    },
    {
      name: "Linda K.",
      image: "/placeholder-yw3tr.png",
      rating: 5,
      text: "As someone new to fitness at 45, I was nervous to start. The beginner-friendly approach and supportive community made all the difference. I actually look forward to my workouts now!",
      badge: "Beginner",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Members Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real stories from our community of members who have transformed
            their lives
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="relative p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="absolute top-4 right-4 text-primary/20">
              <Quote className="w-8 h-8" />
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <img
                src={
                  testimonials[currentTestimonial].image || "/placeholder.svg"
                }
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <div className="flex items-center mr-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}
                  </div>
                  <h4 className="font-semibold text-foreground">
                    {testimonials[currentTestimonial].name}
                  </h4>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <Badge variant="secondary" className="text-xs">
                  {testimonials[currentTestimonial].badge}
                </Badge>
              </div>
            </div>
          </Card>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-10 h-10 p-0 bg-transparent cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-10 h-10 p-0 bg-transparent cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-8 border-primary/20 bg-background">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-3xl font-bold text-foreground">4.9</span>
            </div>
            <p className="text-muted-foreground mb-2">
              Based on 200+ Google Reviews
            </p>
            <p className="text-sm text-muted-foreground">
              Join our community of satisfied members
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
