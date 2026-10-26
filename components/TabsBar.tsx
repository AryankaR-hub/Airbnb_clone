"use client";

import { useEffect, useState } from "react";
import ReserveButton from "@/components/ReserveButton";

const TABS = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];

/** Appears once the hero has scrolled out of view; highlights the section in view. */
export default function TabsBar() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("photos");

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("photos");
      setVisible(!!hero && hero.getBoundingClientRect().bottom < 0);
      let current = "photos";
      for (const tab of TABS) {
        const el = document.getElementById(tab.id);
        if (el && el.getBoundingClientRect().top <= 120) current = tab.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-30 border-b border-line bg-white transition-transform duration-200 ${visible ? "translate-y-0" : "invisible -translate-y-full"}`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-20 py-3">
        <nav aria-label="Listing sections" className="flex h-10 gap-[21px] pl-2">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              aria-current={active === tab.id ? "true" : undefined}
              className={`flex h-full items-center border-b-2 text-sm font-medium ${active === tab.id ? "border-ink" : "border-transparent hover:border-line"}`}
            >
              {tab.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <div className="text-right leading-4">
            <p className="text-sm leading-5">
              <span className="text-base font-medium">₹28,499</span> for 5 nights
            </p>
            <p className="text-xs leading-4">★ 4.95 · 19 reviews</p>
          </div>
          <ReserveButton className="h-10 px-4 text-base" />
        </div>
      </div>
    </div>
  );
}
