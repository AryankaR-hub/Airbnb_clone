"use client";

import { useRouter } from "next/navigation";
import { HERO, TOUR_PARAM } from "@/lib/photos";
import { useToast } from "@/components/Toast";
import { useWishlist } from "@/components/Wishlist";
import { GridIcon, HeartIcon, ShareIcon } from "@/components/icons";

const TITLE = "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10";

export default function ListingHero() {
  const router = useRouter();
  const { show } = useToast();
  const { saved, toggle } = useWishlist();

  const openTour = () => router.push(`/?modal=${TOUR_PARAM}`, { scroll: false });

  const tile = (src: string, label: string, className = "") => (
    <button
      type="button"
      onClick={openTour}
      aria-label={`${label}. Open photo tour`}
      className={`group block h-full w-full overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover transition duration-200 group-hover:brightness-[0.92]"
      />
    </button>
  );

  return (
    <section aria-labelledby="listing-title">
      <div className="flex items-center justify-between py-6">
        <h1 id="listing-title" className="text-[26px] font-semibold leading-8">
          {TITLE}
        </h1>
        <div className="flex items-center gap-1 text-sm font-medium">
          <button
            type="button"
            onClick={() => show("Share options")}
            className="flex items-center gap-2 rounded-lg px-3 py-2 underline hover:bg-wash focus:bg-soft active:bg-soft"
          >
            <ShareIcon size={16} />
            Share
          </button>
          <button
            type="button"
            onClick={toggle}
            aria-pressed={saved}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 underline hover:bg-wash focus:bg-soft active:bg-soft ${saved ? "bg-soft" : ""}`}
          >
            <HeartIcon size={16} filled={saved} />
            {saved ? "Saved" : "Save"}
          </button>
        </div>
      </div>

      <div className="relative grid h-[500px] grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-2 overflow-hidden rounded-xl">
        <div className="row-span-2">{tile(HERO.main, "Living room")}</div>
        {tile(HERO.topMiddle, "Seating area")}
        {tile(HERO.topRight, "Private jacuzzi")}
        {tile(HERO.bottomMiddle, "Bedroom")}
        {tile(HERO.bottomRight, "Building exterior")}
        <button
          type="button"
          onClick={openTour}
          className="absolute bottom-5 right-5 flex items-center gap-2 rounded-lg border border-ink bg-white px-3 py-[7px] text-[13px] font-medium hover:bg-wash"
        >
          <GridIcon size={14} />
          Show all photos
        </button>
      </div>
    </section>
  );
}
