"use client";

import { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { AMENITY_PREVIEW, AMENITY_TOTAL } from "@/lib/amenities";
import AmenityIcon from "@/components/AmenityIcon";
import AmenitiesModal from "@/components/AmenitiesModal";
import Calendar from "@/components/Calendar";
import LaurelOutlineIcon from "@/components/LaurelOutlineIcon";

const DESCRIPTION =
  "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻 , Smart TV 📺 , pet-friendly comfort 🐾 , and stylish interiors. Just minutes from Candolim Beach 🏖️ , popular cafés, restaurants, and nightlife 🍹 , it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. 💗🌴";

const HIGHLIGHTS = [
  { icon: "Outdoor dining area", title: "Outdoor entertainment", text: "The pool and alfresco dining are great for summer trips." },
  { icon: "Ceiling fan", title: "Designed for staying cool", text: "Beat the heat with the A/C and ceiling fan." },
  { icon: "Self check-in", title: "Self check-in", text: "You can check in with the building staff." },
];

const divider = "my-8 border-t border-line";

export default function ListingDetails() {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const openerRef = useRef<HTMLButtonElement>(null);

  const closeModal = () => {
    setModalOpen(false);
    openerRef.current?.focus();
  };

  return (
    <div>
      <h2 className="text-[22px] font-semibold leading-8 text-[#303030]">Entire serviced apartment in Candolim, India</h2>
      <p className="mt-1 text-base">3 guests · 1 bedroom · 1 bed · 1 bathroom</p>

      <div className="mt-6 flex h-[81px] items-center rounded-xl border border-line px-7">
        <div className="flex shrink-0 items-center gap-2">
          <LaurelOutlineIcon className="h-[34px] w-5 shrink-0" />
          <span className="text-center text-base font-medium leading-[18px]">Guest<br />favourite</span>
          <LaurelOutlineIcon flip className="h-[34px] w-5 shrink-0" />
        </div>
        <p className="mx-6 flex-1 text-[15px] leading-[18px] text-ink">One of the most loved homes on Airbnb, according to guests</p>
        <div className="shrink-0 pr-6 text-center">
          <p className="text-xl font-semibold leading-6">4.95</p>
          <p className="mt-0.5 text-[10px] leading-[13px] tracking-[1.5px]">★★★★★</p>
        </div>
        <div className="shrink-0 border-l border-line pl-6 text-center">
          <p className="text-xl font-semibold leading-6">19</p>
          <p className="text-sm font-medium leading-4 text-ink">Reviews</p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <img src="/images/avatars/host.jpeg" alt="" className="h-12 w-12 rounded-full object-cover" />
        <div>
          <p className="text-base font-medium leading-6">Hosted by Mirashya Homes</p>
          <p className="text-sm leading-6 text-mute">2 years hosting</p>
        </div>
      </div>

      <hr className="mb-8 mt-6 border-t border-line" />
      <ul className="space-y-6">
        {HIGHLIGHTS.map((h) => (
          <li key={h.title} className="flex gap-6">
            <AmenityIcon name={h.icon} />
            <div>
              <p className="text-base font-medium leading-6">{h.title}</p>
              <p className="text-sm text-mute">{h.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <hr className="mb-6 mt-8 border-t border-line" />
      <p className="rounded-xl bg-[#f7f7f7] px-4 py-4 text-sm">
        Some info has been automatically translated. <button type="button" className="font-medium underline">Show original</button>
      </p>
      <p
        className="mt-5 overflow-hidden text-base leading-6"
        style={expanded ? undefined : { maxHeight: 96, WebkitMaskImage: "linear-gradient(to bottom, #000 72%, rgba(0,0,0,0.25) 100%)", maskImage: "linear-gradient(to bottom, #000 72%, rgba(0,0,0,0.25) 100%)" }}
      >
        {DESCRIPTION}
      </p>
      <button type="button" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded} className="mt-3 flex items-center gap-1 text-base font-medium underline">
        {expanded ? "Show less" : "Show more"}
        <ChevronRight size={16} aria-hidden />
      </button>

      <hr className={divider} />
      <h2 className="mb-6 text-[22px] font-semibold leading-8">Where you’ll sleep</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          { src: "/images/photos/bedroom-01.jpeg", title: "Bedroom", text: "1 double bed" },
          { src: "/images/photos/living-room-1-01.jpeg", title: "Living room", text: "1 sofa" },
        ].map((room) => (
          <figure key={room.title}>
            <img src={room.src} alt="" className="aspect-[3/2] w-full rounded-xl object-cover" />
            <figcaption className="mt-3">
              <p className="text-base font-medium">{room.title}</p>
              <p className="text-sm text-mute">{room.text}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <hr className={divider} />
      <section id="amenities" className="scroll-mt-[68px]">
        <h2 className="mb-6 text-[22px] font-semibold leading-8">What this place offers</h2>
        <ul className="grid grid-cols-2 gap-x-2 gap-y-6">
          {AMENITY_PREVIEW.map((item) => (
            <li key={item.name} className={`flex items-center gap-4 text-base ${item.off ? "text-mute line-through" : ""}`}>
              <AmenityIcon name={item.name} />
              {item.name}
            </li>
          ))}
        </ul>
        <button
          ref={openerRef}
          type="button"
          onClick={() => setModalOpen(true)}
          className="mt-7 h-12 rounded-lg border border-ink px-6 text-base font-medium hover:bg-wash"
        >
          Show all {AMENITY_TOTAL} amenities
        </button>
      </section>
      {modalOpen && <AmenitiesModal onClose={closeModal} />}

      <hr className={divider} />
      <Calendar />
    </div>
  );
}
