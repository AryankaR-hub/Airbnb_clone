import { ChevronRight, Minus, Plus, Search } from "lucide-react";

const ctl = "grid h-10 w-10 place-items-center rounded-lg bg-white shadow-[0_2px_6px_rgba(0,0,0,0.2)]";

// Static stand-in for the reference's map: water, land, two soft circles and the home marker.
export default function LocationSection() {
  return (
    <section id="location" aria-labelledby="location-title" className="scroll-mt-[77px] border-t border-line py-12">
      <h2 id="location-title" className="text-[22px] font-semibold">Where you’ll be</h2>
      <p className="mt-6 text-base">Candolim, Goa, India</p>

      <div
        role="img"
        aria-label="Map showing the approximate area of the listing in Candolim, Goa"
        className="relative mt-6 h-[480px] overflow-hidden rounded-xl bg-[#e8f0e3]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      >
        <div className="absolute inset-0 bg-[#aad3e6]" style={{ clipPath: "polygon(0 0, 40% 0, 21% 100%, 0 100%)" }} />
        <span className="absolute left-[30%] top-[40%] h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#cfe3c3]/90" />
        <span className="absolute left-[70%] top-[59%] h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#cfe3c3]/90" />
        <span className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink text-white shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
          <svg viewBox="0 0 56 56" width="56" height="56" aria-hidden focusable="false" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 51.5V25.5L28 14.7l13.3 10.8v26" />
            <path d="M21.4 51.5V38.1h13.3v13.4" />
            <path d="M9.3 51.5h38.1" />
          </svg>
        </span>
        <button type="button" aria-label="Search map" className={`${ctl} absolute left-3 top-3 rounded-full`}><Search size={16} aria-hidden /></button>
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <button type="button" aria-label="Zoom in" className={ctl}><Plus size={18} aria-hidden /></button>
          <button type="button" aria-label="Zoom out" className={ctl}><Minus size={18} aria-hidden /></button>
        </div>
      </div>

      <p className="mt-4 text-[15px] leading-5">Exact location will be provided after booking.</p>
      <h3 className="mt-10 text-[19px] font-medium leading-6">Neighbourhood highlights</h3>
      <p className="mt-3 text-base leading-6">Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.</p>
      <button type="button" className="mt-4 flex items-center gap-1 text-base font-medium underline">Show more <ChevronRight size={18} strokeWidth={2} aria-hidden /></button>
    </section>
  );
}
