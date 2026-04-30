"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ReservePage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("Intimate Henna & Decor");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send data to Supabase
    const { error } = await supabase
      .from('reservations')
      .insert([
        { full_name: name, event_date: date, service_package: service }
      ]);

    setIsSubmitting(false);

    if (error) {
      alert("There was an error securing your reservation. Please try again.");
      console.error(error);
    } else {
      setSuccess(true);
      setName("");
      setDate("");
    }
  };

  return (
    <main className="max-w-lg mx-auto px-6 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Card className="border-none shadow-2xl bg-white rounded-3xl overflow-hidden">
        <div className="bg-accent h-2 w-full"></div>
        <CardContent className="p-8">
          <h1 className="font-serif text-4xl mb-2 text-primary text-center">Reserve a Session</h1>
          <p className="text-center text-sm text-foreground/60 mb-8">Secure your date for premium henna artistry.</p>
          
          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2">Reservation Received!</h3>
              <p className="text-foreground/70">Kawthar will reach out to you shortly to confirm the details.</p>
              <Button onClick={() => setSuccess(false)} variant="outline" className="mt-6 rounded-full">Book Another Date</Button>
            </div>
          ) : (
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

              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg mt-8 h-14 rounded-full shadow-lg shadow-primary/30 transition-transform active:scale-95 disabled:opacity-50">
                {isSubmitting ? "Processing..." : "Confirm Reservation"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </main>
  );
}