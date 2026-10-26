"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Stay = { img: string; title: string; price?: string; rating?: string };

// Both pages are taken from the reference (page 2 reuses some photos, as the reference does).
const STAYS: Stay[] = [
  { img: "s1", title: "Beautiful Studio with a view to die for", price: "₹23,600", rating: "4.91" },
  { img: "s2", title: "NAQAB - 1bhk with private pool", price: "₹42,218", rating: "4.95" },
  { img: "s3", title: "Greentique Luxury Flat with plunge pool, Calangute", price: "₹44,506", rating: "4.94" },
  { img: "s4", title: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: "4.96" },
  { img: "s5", title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: "₹39,942", rating: "4.95" },
  { img: "s4", title: "The Tropical Studio | 5 mins to Beach", price: "₹22,824", rating: "4.96" },
  { img: "s5", title: "Luxury Casa Bella 1BHK with plunge pool, Calangute", price: "₹39,942", rating: "4.95" },
  { img: "s6", title: "Kanso by Earthen Window | Jacuzzi | Terrace | Pool", price: "₹45,648", rating: "5.0" },
  { img: "s2", title: "Luxury Apt | Private Pool | 6 Mins from Beach", price: "₹48,786", rating: "4.93" },
  { img: "s4", title: "Serendipity Cottage - Calm Stay in Calangute-Baga.", price: "₹22,824", rating: "4.92" },
];
const PER_PAGE = 5;
const PAGES = Math.ceil(STAYS.length / PER_PAGE);

const arrow = "grid h-8 w-8 place-items-center rounded-full border transition disabled:cursor-default";

export default function MoreStays() {
  const [page, setPage] = useState(0);

  return (
    <section aria-labelledby="stays-title" className="border-t border-line pb-12 pt-12">
      <div className="mb-5 flex items-center justify-between">
        <h2 id="stays-title" className="text-[22px] font-semibold leading-8">More stays nearby</h2>
        <div className="flex items-center gap-2">
          <span className="mr-2 text-base text-mute" aria-live="polite">{page + 1} / {PAGES}</span>
          <button type="button" aria-label="Previous stays" disabled={page === 0} onClick={() => setPage((p) => p - 1)} className={`${arrow} border-line text-mute disabled:opacity-60 enabled:border-ink enabled:text-ink enabled:hover:bg-wash`}>
            <ChevronLeft size={16} aria-hidden />
          </button>
          <button type="button" aria-label="Next stays" disabled={page === PAGES - 1} onClick={() => setPage((p) => p + 1)} className={`${arrow} border-line text-mute disabled:opacity-60 enabled:border-ink enabled:text-ink enabled:hover:bg-wash`}>
            <ChevronRight size={16} aria-hidden />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <ul
          className="flex gap-5 transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)]"
          style={{ transform: `translateX(calc(${-page} * (100% + 20px)))` }}
        >
          {Array.from({ length: PAGES }, (_, p) => (
            <li key={p} className="grid w-full shrink-0 grid-cols-5 gap-5" aria-hidden={p !== page}>
              {STAYS.slice(p * PER_PAGE, (p + 1) * PER_PAGE).map((s, i) => (
                <a key={`${s.img}-${i}`} href="#" onClick={(e) => e.preventDefault()} tabIndex={p === page ? 0 : -1} className="group block min-w-0">
                  <img src={`/images/similar/${s.img}.jpeg`} alt="" className="aspect-square w-full rounded-[14px] object-cover" />
                  <p className="mt-2 line-clamp-2 text-base font-medium leading-5">{s.title}</p>
                  {s.price && (
                    <p className="mt-1 flex items-center gap-1.5 text-sm leading-5">
                      {s.price}
                      <span className="flex items-center gap-1"><Star size={11} fill="currentColor" aria-hidden />{s.rating}</span>
                    </p>
                  )}
                </a>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
