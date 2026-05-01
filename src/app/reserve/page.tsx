"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import emailjs from '@emailjs/browser';

export default function ReservePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("Intimate Henna & Decor (₦100,000)");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault(); // This strictly prevents the page reload!
    setIsSubmitting(true);

    try {
      // 1. Save to Database (Supabase)
      const { error: dbError } = await supabase
        .from('reservations')
        .insert([{ full_name: name, event_date: date, service_package: service }]);

      if (dbError) {
        console.error("Database error:", dbError);
      }

      // 2. Prepare Data for EmailJS
      const templateParams = {
        client_name: name,
        client_email: email,
        client_phone: phone,
        event_date: date,
        service_package: service,
      };

      // 3. Send Alert to Admin (Kawthar)
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // 4. Send Auto-Response to Client
      // ⚠️ TEMPORARILY DISABLED TO ISOLATE THE BUG! ⚠️
      /*
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CLIENT_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      */

      // Success! Reset form.
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setDate("");
      
    } catch (error: any) {
      // 🚨 THE MAGIC X-RAY ERROR HANDLER 🚨
      // This will grab the exact hidden EmailJS error and put it on your screen!
      const errorReason = error?.text || error?.message || "Unknown error";
      alert(`EMAILJS BLOCKED IT! Reason: "${errorReason}"\n\nCheck your EmailJS dashboard settings for this exact phrase.`);
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="max-w-lg mx-auto px-6 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl pb-8">
        <div className="bg-primary h-2 w-full"></div>
        <div className="p-8">
          <h1 className="font-serif text-4xl mb-2 text-primary text-center">Reserve a Session</h1>
          <p className="text-center text-sm text-foreground/60 mb-8">Secure your date for premium henna artistry.</p>
          
          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-2">Reservation Received!</h3>
              <p className="text-foreground/70">Kawthar will reach out to you shortly to confirm the details.</p>
              <button onClick={() => setSuccess(false)} className="mt-6 border border-gray-300 rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">Book Another Date</button>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-6">
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-primary font-semibold text-xs uppercase tracking-wider">Full Name</label>
                <input id="name" type="text" placeholder="Enter your name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 rounded-xl outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-primary font-semibold text-xs uppercase tracking-wider">Email Address</label>
                <input id="email" type="email" placeholder="For booking confirmation" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 rounded-xl outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-primary font-semibold text-xs uppercase tracking-wider">Phone Number</label>
                <input id="phone" type="tel" placeholder="Your best contact number" required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 rounded-xl outline-none transition-all" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="date" className="text-primary font-semibold text-xs uppercase tracking-wider">Event Date</label>
                <input id="date" type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 rounded-xl outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-primary font-semibold text-xs uppercase tracking-wider">Service Package</label>
                <select id="service" value={service} onChange={(e) => setService(e.target.value)} className="w-full bg-gray-50 border border-gray-100 focus:border-primary focus:ring-1 focus:ring-primary h-12 px-4 rounded-xl outline-none transition-all appearance-none cursor-pointer">
                  <option value="Intimate Henna & Decor (₦100,000)">Intimate Henna & Decor (₦100,000)</option>
                  <option value="Intimate Party Decor Only (₦80,000)">Intimate Party Decor Only (₦80,000)</option>
                  <option value="Grand Bridal Henna & Decor (₦150,000)">Grand Bridal Henna & Decor (₦150,000)</option>
                  <option value="Grand Party Decor Only (₦125,000)">Grand Party Decor Only (₦125,000)</option>
                </select>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full bg-[#d26c3f] hover:bg-[#b85c34] text-white font-bold text-lg mt-8 h-14 rounded-full shadow-lg shadow-orange-900/20 transition-transform active:scale-95 disabled:opacity-50">
                {isSubmitting ? "Processing..." : "Confirm Reservation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}