"use client";

// Placeholder names - you will swap these with actual client logo images when you have them!
const brands = ["Aura", "Nova", "Lumina", "Vertex", "Pulse", "Zenith"];

export default function TrustedBy() {
  return (
    <section className="w-full border-y border-white/5 bg-[#030303] py-12 overflow-hidden">
      <div className="mx-auto mb-8 max-w-7xl px-6 sm:px-10">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-zinc-500">
          Trusted by leading ambitious brands
        </p>
      </div>
      
      <div className="relative flex w-full overflow-hidden">
        {/* Smooth gradient masks for the edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#030303] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#030303] to-transparent sm:w-40" />
        
        {/* The hardware-accelerated scrolling track */}
        <div 
          className="flex w-max items-center gap-16 pr-16 sm:gap-24 sm:pr-24"
          style={{ animation: 'infinite-scroll 20s linear infinite' }}
        >
          {/* We render the list 4 times to create an unbreakable infinite loop illusion */}
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <h3 key={i} className="text-3xl font-bold tracking-tighter text-zinc-800 transition-colors hover:text-[hsl(var(--theme-hue),80%,60%)] sm:text-4xl">
              {brand}
            </h3>
          ))}
        </div>
      </div>

      {/* Pure CSS injected directly into the component for zero-config */}
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </section>
  );
}