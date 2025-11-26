"use client";

import { useState } from "react";
import { ArrowRight, Clock, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { gotoSection } from "@/lib/scroll";

type ServiceCardProp = {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  badge: string;
};

export default function ServicesCard({
  title,
  subtitle,
  description,
  duration,
  level,
  image,
  badge,
}: ServiceCardProp) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary">
            <Heart className="w-3 h-3 mr-1" />
            {badge}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <Target className="w-4 h-4 mr-2 text-primary" />
            <span>{subtitle}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-2 text-primary" />
            <span>
              {duration} • {level}
            </span>
          </div>
        </div>
        <Button
          className="w-full cursor-pointer"
          onClick={() => gotoSection("calendar")}
        >
          Book {title} Class
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
