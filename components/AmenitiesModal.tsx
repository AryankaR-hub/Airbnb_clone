"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { AMENITY_GROUPS } from "@/lib/amenities";
import { useFocusTrap } from "@/lib/useFocusTrap";
import AmenityIcon from "@/components/AmenityIcon";

export default function AmenitiesModal({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useFocusTrap(ref, true);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 grid animate-fade-in place-items-center bg-black/50" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={ref} role="dialog" aria-modal="true" aria-labelledby="amenities-title" className="flex h-[85vh] w-[780px] max-w-[calc(100vw-48px)] animate-tour-in flex-col rounded-xl bg-white shadow-2xl">
        <div className="shrink-0 px-6 pt-6">
          <button type="button" data-autofocus onClick={onClose} aria-label="Close" className="grid h-8 w-8 place-items-center rounded-full hover:bg-wash">
            <X size={16} aria-hidden />
          </button>
        </div>
        <div className="thin-scrollbar min-h-0 flex-1 overflow-y-auto pb-10 pl-12 pr-8 pt-4">
          <h2 id="amenities-title" className="mb-6 text-[22px] font-semibold leading-7">What this place offers</h2>
          {AMENITY_GROUPS.map((group) => (
            <section key={group.title} className="mb-6">
              <h3 className="mb-1 text-lg font-medium leading-6">{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-4 min-h-[57px] border-b border-divider py-4 pr-4 text-base">
                    <span className={item.off ? "text-mute" : ""}><AmenityIcon name={item.name} /></span>
                    <span className={item.off ? "text-mute line-through" : ""}>{item.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
