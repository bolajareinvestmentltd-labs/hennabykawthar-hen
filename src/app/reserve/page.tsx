"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ReservePage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("Intimate Henna & Decor (₦100,000)");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reservation request secured for ${name}.`);
  };

  return (
    <main className="max-w-lg mx-auto px-6 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Card className="border-none shadow-2xl bg-white rounded-3xl overflow-hidden">
        <div className="bg-accent h-2 w-full"></div>
        <CardContent className="p-8">
          <h1 className="font-serif text-4xl mb-2 text-primary text-center">Reserve a Session</h1>
          <p className="text-center text-sm text-foreground/60 mb-8">Secure your date for premium henna artistry.</p>
          
          <form onSubmit={handleBooking} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-accent font-semibold text-xs uppercase tracking-wider">Full Name</Label>
              <Input id="name" placeholder="Enter your name" required value={name} onChange={(e) => setName(e.target.value)} className="bg-background border-transparent focus-visible:ring-primary h-12 rounded-xl" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date" className="text-accent font-semibold text-xs uppercase tracking-wider">Event Date</Label>
              <Input id="date" type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="bg-background border-transparent focus-visible:ring-primary h-12 rounded-xl" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service" className="text-accent font-semibold text-xs uppercase tracking-wider">Service Package</Label>
              <select id="service" value={service} onChange={(e) => setService(e.target.value)} className="flex h-12 w-full rounded-xl border-transparent bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <option value="Intimate Henna & Decor">Intimate Henna & Decor (₦100,000)</option>
                <option value="Intimate Party Decor Only">Intimate Party Decor Only (₦80,000)</option>
                <option value="Grand Bridal Henna & Decor">Grand Bridal Henna & Decor (₦150,000)</option>
                <option value="Grand Party Decor Only">Grand Party Decor Only (₦125,000)</option>
              </select>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg mt-8 h-14 rounded-full shadow-lg shadow-primary/30 transition-transform active:scale-95">
              Confirm Reservation
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}