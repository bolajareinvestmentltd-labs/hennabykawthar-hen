import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Aisha T.", text: "Kawthar made my wedding day perfect. The intricate bridal henna was breathtaking and the stain lasted for weeks!", role: "Bride" },
  { name: "Fatima S.", text: "Her minimalist designs are so elegant. I book her for every major event.", role: "Regular Client" },
  { name: "Zainab O.", text: "Professional, punctual, and incredibly talented. She made the whole bridal party feel so special.", role: "Bridesmaid" }
];

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="font-serif text-5xl text-primary mb-8 text-center">The Artistry</h1>
      
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl mb-16">
        <p className="text-foreground/80 leading-relaxed text-lg font-sans mb-6">
          With a deep reverence for tradition and an eye for minimalist elegance, Kawthar crafts temporary body art that tells a story. From lavish bridal full-body designs to delicate, modern party strips, every stroke is applied with world-class organic henna paste to ensure a rich, dark, and safe stain.
        </p>
        <p className="text-foreground/80 leading-relaxed text-lg font-sans">
          Based in Lagos, she specializes in creating a luxurious, relaxing experience for brides and clients celebrating life's most beautiful moments.
        </p>
      </div>

      <h2 className="font-serif text-4xl mb-10 text-center text-primary">Client Love</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimony, idx) => (
          <Card key={idx} className="border-none shadow-md bg-white rounded-2xl hover:-translate-y-1 transition-transform">
            <CardContent className="p-6">
              <div className="flex gap-1 mb-3 text-primary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p className="text-foreground/80 italic text-sm mb-4 leading-relaxed">"{testimony.text}"</p>
              <p className="font-bold text-accent text-sm">{testimony.name}</p>
              <p className="text-xs text-foreground/50 uppercase tracking-wider mt-1">{testimony.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}