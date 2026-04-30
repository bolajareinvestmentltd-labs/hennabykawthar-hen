export default function GalleryPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 animate-in fade-in duration-700">
      <div className="text-center mb-12">
        <h1 className="font-serif text-5xl text-primary mb-4">The Portfolio</h1>
        <p className="text-foreground/70 font-medium">A collection of our favorite traditional and minimalist designs.</p>
      </div>

      {/* Grid of Past Events */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="aspect-[3/4] relative group overflow-hidden rounded-xl shadow-md">
            <img 
              src={`https://placehold.co/600x800/${item % 2 === 0 ? 'C95F31' : '1E5A44'}/FFFFFF?text=Event+${item}`} 
              alt="Past Event" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white font-serif text-lg tracking-wider">View Detail</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}