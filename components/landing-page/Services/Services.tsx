"use client";

import { studioServices } from "@/common/services";
import ServicesCard from "./ServicesCard";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose from our expertly designed classes that blend strength,
            flexibility, and mindfulness
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {studioServices.map((service) => (
            <ServicesCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
