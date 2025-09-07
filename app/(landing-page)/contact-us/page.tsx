"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Instagram,
  Facebook,
  ArrowRight,
} from "lucide-react";

import BRANCHES_JSON from "../../../common/branches.json";
import { Branch } from "@/types/types";
const BRANCHES: Branch[] = BRANCHES_JSON;

export default function ContactPage() {
  const [selectedId, setSelectedId] = useState<string>(BRANCHES[0]?.id);

  const branch = useMemo(
    () => BRANCHES.find((b) => b.id === selectedId)!,
    [selectedId]
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
              We’d love to hear from you
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Questions about classes, memberships, or private sessions? Reach
              out below—or drop by one of our studios.
            </p>
          </div>

          {/* Branch selector */}
          {/* <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center">
            <Select value={selectedId} onValueChange={setSelectedId}>
              <SelectTrigger className="w-full sm:w-72">
                <SelectValue placeholder="Select a location" />
              </SelectTrigger>
              <SelectContent position="popper" sideOffset={8}>
                {BRANCHES.map((b) => (
                  <SelectItem key={b.id} value={b.id}>
                    {b.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Link href={branch.gmapsQuery} target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                className="cursor-pointer w-full sm:w-auto"
              >
                <Navigation className="h-4 w-4 mr-2" /> Get Directions
              </Button>
            </Link>
          </div> */}
        </div>
      </section>

      {/* Map + Details */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Map placeholder / embed */}
          <Card className="lg:col-span-7 overflow-hidden">
            <CardHeader className="pb-0">
              <CardTitle className="text-xl flex items-center gap-2">
                <MapPin className="h-5 w-5" /> {branch.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              {/* Replace with a real Google Maps embed url per branch */}
              <div className="relative w-full rounded-xl overflow-hidden border">
                <div className="aspect-[16/9] w-full">
                  <iframe
                    title={`${branch.name} map`}
                    src={branch.mapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className="mt-4 text-muted-foreground text-sm">
                This is a placeholder embed. Replace <code>mapsEmbedUrl</code>{" "}
                with a real Google Maps iframe URL for each branch.
              </p>
            </CardContent>
          </Card>

          {/* Contact details */}
          <div className="lg:col-span-5 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Studio Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      {branch.address}, {branch.city}, {branch.country}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p>
                      <a
                        className="text-primary hover:underline"
                        href={`tel:${branch.phone.replace(/\s/g, "")}`}
                      >
                        {branch.phone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p>
                      <a
                        className="text-primary hover:underline"
                        href={`mailto:${branch.email}`}
                      >
                        {branch.email}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 mt-1" />
                  <div className="w-full">
                    <p className="font-medium">Opening Hours</p>
                    <ul className="grid grid-cols-2 gap-y-1 text-muted-foreground">
                      {branch.hours.map((row) => (
                        <>
                          <li key={row.d} className="flex justify-between pe-4">
                            <span>{row.d}</span>
                            <span>{row.h}</span>
                          </li>
                          <li></li>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href={branch.gmapsQuery}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      size="sm"
                      className="cursor-pointer w-full sm:w-auto"
                    >
                      Get Directions
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>

                  <Link
                    href="https://instagram.com/yourstudio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="cursor-pointer w-full sm:w-auto"
                    >
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </Button>
                  </Link>

                  <Link
                    href="https://facebook.com/yourstudio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="cursor-pointer w-full sm:w-auto"
                    >
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Contact form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input placeholder="Full name" />
                  <Input placeholder="Email address" type="email" />
                </div>
                <Input placeholder="Phone (optional)" />
                <Input placeholder="How can we help?" />
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">
                    By sending, you agree to be contacted about your inquiry.
                  </p>
                  <Button className="cursor-pointer">Send Message</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All locations overview */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Our Locations</h2>
            <p className="text-muted-foreground">
              Choose the studio that fits your routine.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANCHES.map((b) => (
              <Card key={b.id} className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-lg">{b.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {b.address}, {b.city}
                    </p>
                    <div className="mt-3 text-sm">
                      <a
                        href={`tel:${b.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 hover:underline"
                      >
                        <Phone className="h-4 w-4" /> {b.phone}
                      </a>
                      <a
                        href={`mailto:${b.email}`}
                        className="flex items-center gap-2 hover:underline mt-1"
                      >
                        <Mail className="h-4 w-4" /> {b.email}
                      </a>
                    </div>
                  </div>
                  <Link href={b.gmapsQuery} target="_blank" rel="noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="cursor-pointer"
                    >
                      <MapPin className="h-4 w-4 mr-2" /> Map
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Come say hello
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
            Book a trial, talk to a coach, or tour the studio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#calendar">
              <Button size="lg" variant="secondary" className="cursor-pointer">
                Book a Trial Class
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
