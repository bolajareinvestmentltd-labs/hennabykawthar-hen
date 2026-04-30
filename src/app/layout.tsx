import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "hennabykawthar | Traditional Henna",
  description: "Book premium traditional henna.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen pb-20 md:pb-0`}>
        
        {/* 1. DESKTOP NAVBAR (Hidden on phones) */}
        <nav className="hidden md:block sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-border/50">
          <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
            <Link href="/" className="font-serif text-2xl text-primary font-bold tracking-tight">
              hennabykawthar.
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors">Gallery</Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
              <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
              <Link href="/reserve" className="bg-accent hover:bg-accent/90 text-white rounded-full text-xs font-semibold px-6 py-3 shadow-md transition-transform active:scale-95">
                Reserve
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex-grow">{children}</div>

        {/* 2. MOBILE APP-STYLE BOTTOM NAVBAR (Hidden on desktop) */}
        <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[380px] bg-white/95 backdrop-blur-xl border border-border shadow-2xl rounded-full px-6 py-4 flex items-center justify-between">
          <Link href="/gallery" className="flex flex-col items-center gap-1 text-accent hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            <span className="text-[10px] font-bold uppercase tracking-wider">Gallery</span>
          </Link>
          <Link href="/about" className="flex flex-col items-center gap-1 text-accent hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            <span className="text-[10px] font-bold uppercase tracking-wider">About</span>
          </Link>
          <Link href="/contact" className="flex flex-col items-center gap-1 text-accent hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span className="text-[10px] font-bold uppercase tracking-wider">Contact</span>
          </Link>
          <Link href="/reserve" className="bg-primary hover:bg-primary/90 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-lg transition-transform active:scale-95">
            Reserve
          </Link>
        </nav>

        {/* 3. FOOTER */}
        <footer className="bg-white border-t border-border w-full py-8 px-6 text-center z-30 relative mt-12 pb-28 md:pb-8">
          <div className="flex justify-center gap-6 mb-4 text-primary">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
            <a href="https://wa.me/2348123456789" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
          </div>
          <p className="text-accent/60 text-xs font-medium tracking-widest uppercase">Elegantly designed by JARES CHOICE LABs</p>
        </footer>
      </body>
    </html>
  );
}