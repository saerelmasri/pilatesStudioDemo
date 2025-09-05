"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { gotoSection } from "@/lib/scroll";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-pilates-studio-with-natural-light--yoga-mat.png"
          alt="Pilates Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge
          variant="secondary"
          className="mb-6 text-white border-white/30 bg-white/10"
        >
          New Member Special - 50% Off First Month
        </Badge>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          Transform Your Body,
          <span className="block text-transparent bg-gradient-to-r from-white to-white/80 bg-clip-text">
            Elevate Your Mind
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
          Experience the perfect blend of Pilates and HIIT training in our
          state-of-the-art studio. Build strength, flexibility, and mindfulness
          in every session.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="mb-6 text-white border-white/30 bg-white/10 cursor-pointer"
            onClick={() => gotoSection("calendar")}
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
