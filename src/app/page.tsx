"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const heroImages = [
  "https://images.unsplash.com/photo-1565015531518-e320fef73da0?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590393802555-46b0101b0f19?q=80&w=1000&auto=format&fit=crop",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="w-full animate-in fade-in duration-700">
      <div className="max-w-5xl mx-auto flex flex-col">
        
        {/* HERO */}
        <div className="relative h-[550px] w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-accent shadow-2xl md:rounded-b-3xl">
          {heroImages.map((img, index) => (
            <div key={img} className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`} style={{ backgroundImage: `url('${img}')` }} />
          ))}
          <div className="absolute inset-0 z-10 bg-black/50" />
          <div className="relative z-20 mt-4 flex flex-col items-center">
            <div className="w-24 h-24 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 text-xs font-serif shadow-xl">Logo</div>
            <h1 className="font-serif text-[10vw] min-[400px]:text-5xl md:text-7xl lg:text-8xl text-primary font-bold tracking-tighter leading-none mb-6">hennabykawthar.</h1>
            <p className="text-white/90 font-medium text-sm uppercase tracking-widest drop-shadow-sm mb-8">Lead Henna Artist & Founder</p>
            <Link href="/reserve">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-primary/20 transition-transform hover:scale-105">Book Your Session</Button>
            </Link>
          </div>
        </div>

        {/* RECENT ARTISTRY PREVIEW */}
        <section className="px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-primary">Recent Artistry</h2>
            <p className="text-sm text-foreground/70 mt-2">A glimpse into our latest traditional and minimalist designs.</p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
            <img src="https://placehold.co/400x600/C95F31/FFFFFF?text=Henna+1" className="h-32 md:h-80 w-full object-cover rounded-xl shadow-sm hover:opacity-90 transition-opacity" alt="Henna" />
            <img src="https://placehold.co/400x600/1E5A44/FFFFFF?text=Henna+2" className="h-32 md:h-80 w-full object-cover rounded-xl shadow-sm hover:opacity-90 transition-opacity" alt="Henna" />
            <img src="https://placehold.co/400x600/F3E8DD/171717?text=Henna+3" className="h-32 md:h-80 w-full object-cover rounded-xl shadow-sm hover:opacity-90 transition-opacity" alt="Henna" />
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/gallery">
              <Button variant="outline" className="rounded-full px-8 py-5 text-primary border-primary hover:bg-primary hover:text-white transition-all">View Full Gallery</Button>
            </Link>
          </div>
        </section>

        {/* UPGRADED SERVICES MENU */}
        <section className="px-6 pb-20">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-foreground">Signature Services & Pricing</h2>
            <p className="text-sm text-foreground/70 mt-2">Curated luxury packages tailored for your special events.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Service 1 */}
            <Link href="/reserve" className="block h-full">
              <Card className="h-full border-none shadow-md bg-white rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all cursor-pointer border-l-4 border-transparent hover:border-primary flex flex-col">
                <CardContent className="p-6 flex flex-col h-full justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-foreground font-sans text-xl">Intimate Henna & Decor</h3>
                    <p className="text-sm text-accent/80 mt-2 leading-relaxed">Elegant bridal henna application combined with beautiful, minimalist traditional decoration. Perfect for small, private gatherings.</p>
                  </div>
                  <div className="flex justify-between items-end border-t border-border/50 pt-4 mt-auto">
                    <span className="text-xs text-accent uppercase tracking-wider font-bold">Book Now →</span>
                    <span className="font-serif font-bold text-primary text-2xl">₦100,000</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Service 2 */}
            <Link href="/reserve" className="block h-full">
              <Card className="h-full border-none shadow-md bg-white rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all cursor-pointer border-l-4 border-transparent hover:border-primary flex flex-col">
                <CardContent className="p-6 flex flex-col h-full justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-foreground font-sans text-xl">Intimate Party (Decor Only)</h3>
                    <p className="text-sm text-accent/80 mt-2 leading-relaxed">Transform your space with our premium traditional decor setup, perfectly scaled to set the mood for intimate henna night celebrations.</p>
                  </div>
                  <div className="flex justify-between items-end border-t border-border/50 pt-4 mt-auto">
                    <span className="text-xs text-accent uppercase tracking-wider font-bold">Book Now →</span>
                    <span className="font-serif font-bold text-primary text-2xl">₦80,000</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Service 3 */}
            <Link href="/reserve" className="block h-full">
              <Card className="h-full border-none shadow-md bg-white rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all cursor-pointer border-l-4 border-transparent hover:border-primary flex flex-col">
                <CardContent className="p-6 flex flex-col h-full justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-foreground font-sans text-xl">Grand Bridal Henna & Decor</h3>
                    <p className="text-sm text-accent/80 mt-2 leading-relaxed">The ultimate luxury package. Features exquisite, detailed bridal henna alongside a lavish, full-scale party decoration setup for a night to remember.</p>
                  </div>
                  <div className="flex justify-between items-end border-t border-border/50 pt-4 mt-auto">
                    <span className="text-xs text-accent uppercase tracking-wider font-bold">Book Now →</span>
                    <span className="font-serif font-bold text-primary text-2xl">₦150,000</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Service 4 */}
            <Link href="/reserve" className="block h-full">
              <Card className="h-full border-none shadow-md bg-white rounded-2xl overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all cursor-pointer border-l-4 border-transparent hover:border-primary flex flex-col">
                <CardContent className="p-6 flex flex-col h-full justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-foreground font-sans text-xl">Grand Party (Decor Only)</h3>
                    <p className="text-sm text-accent/80 mt-2 leading-relaxed">A breathtaking, full-scale traditional decoration experience designed to create a stunning atmosphere for large celebrations and gatherings.</p>
                  </div>
                  <div className="flex justify-between items-end border-t border-border/50 pt-4 mt-auto">
                    <span className="text-xs text-accent uppercase tracking-wider font-bold">Book Now →</span>
                    <span className="font-serif font-bold text-primary text-2xl">₦125,000</span>
                  </div>
                </CardContent>
              </Card>
            </Link>

          </div>
        </section>

      </div>
    </main>
  );
}