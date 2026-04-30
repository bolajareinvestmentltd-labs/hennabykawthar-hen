"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const handleMessage = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent successfully! We will get back to you shortly.");
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="font-serif text-5xl text-primary mb-12 text-center">Get in Touch</h1>
      
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card className="border-none shadow-lg bg-white rounded-2xl text-center hover:-translate-y-1 transition-transform">
          <CardContent className="p-8 flex flex-col items-center">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center text-primary mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <h3 className="font-bold text-accent text-lg mb-2">Email Inquiries</h3>
            <p className="text-foreground/70">hello@hennabykawthar.com</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-white rounded-2xl text-center hover:-translate-y-1 transition-transform">
          <CardContent className="p-8 flex flex-col items-center">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center text-primary mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
            </div>
            <h3 className="font-bold text-accent text-lg mb-2">WhatsApp / Call</h3>
            <p className="text-foreground/70">+234 812 345 6789</p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-lg bg-white rounded-2xl text-center hover:-translate-y-1 transition-transform">
          <CardContent className="p-8 flex flex-col items-center">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center text-primary mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 className="font-bold text-accent text-lg mb-2">Studio Location</h3>
            <p className="text-foreground/70">Lagos, Nigeria</p>
            <span className="text-xs italic text-primary mt-2">By appointment only</span>
          </CardContent>
        </Card>
      </div>

      {/* NEW: Direct Message Form */}
      <Card className="border-none shadow-2xl bg-white rounded-3xl overflow-hidden max-w-3xl mx-auto">
        <div className="bg-accent h-2 w-full"></div>
        <CardContent className="p-8 md:p-12">
          <h2 className="font-serif text-3xl mb-2 text-primary text-center">Send a Direct Message</h2>
          <p className="text-center text-sm text-foreground/60 mb-8">Have a custom request or feedback? We'd love to hear from you.</p>
          
          <form onSubmit={handleMessage} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-accent font-semibold text-xs uppercase tracking-wider">Your Name</Label>
                <Input id="name" placeholder="Enter your name" required className="bg-background border-transparent focus-visible:ring-primary h-12 rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-accent font-semibold text-xs uppercase tracking-wider">Your Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required className="bg-background border-transparent focus-visible:ring-primary h-12 rounded-xl" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-accent font-semibold text-xs uppercase tracking-wider">Message</Label>
              <textarea 
                id="message" 
                rows={4} 
                required 
                placeholder="How can we help you?"
                className="flex w-full rounded-xl border border-transparent bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary resize-none"
              ></textarea>
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg h-14 rounded-full shadow-lg shadow-primary/30 transition-transform active:scale-95">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}