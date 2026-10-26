"use client";

import { useEffect, useRef } from "react";
import { PHOTOS } from "@/lib/photos";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { ChevronLeft, ChevronRight, CloseIcon, GridIcon } from "@/components/icons";

type Props = {
  index: number;
  onNavigate: (index: number) => void;
  /** Back to the Photo Tour grid (Esc, grid icon). */
  onBack: () => void;
  /** Close everything and return to the listing (X). */
  onClose: () => void;
};

const arrowBase =
  "fixed top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border bg-white transition-colors";

export default function Lightbox({ index, onNavigate, onBack, onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const total = PHOTOS.length;
  const photo = PHOTOS[index];
  const hasPrev = index > 0;
  const hasNext = index < total - 1;

  useFocusTrap(ref, true);

  useEffect(() => {
    ref.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && hasPrev) {
        e.preventDefault();
        onNavigate(index - 1);
      } else if (e.key === "ArrowRight" && hasNext) {
        e.preventDefault();
        onNavigate(index + 1);
      } else if (e.key === "Escape") {
        e.preventDefault();
        onBack();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, hasPrev, hasNext, onNavigate, onBack]);

  // Warm the cache for the neighbours so arrow navigation feels instant.
  useEffect(() => {
    [index - 1, index + 1].forEach((i) => {
      if (PHOTOS[i]) new Image().src = PHOTOS[i].src;
    });
  }, [index]);

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.roomTitle}, photo ${index + 1} of ${total}`}
      className="fixed inset-0 z-[60] flex animate-fade-in flex-col bg-white"
    >
      <header className="grid h-[70px] shrink-0 grid-cols-[1fr_auto_1fr] items-center px-5">
        <button
          type="button"
          onClick={onBack}
          aria-label="Show all photos"
          className="grid h-8 w-8 place-items-center justify-self-start rounded-full hover:bg-wash"
        >
          <GridIcon size={16} />
        </button>
        <h2 className="text-base font-medium">{photo.roomTitle}</h2>
        <div className="flex items-center gap-6 justify-self-end">
          <span aria-hidden="true" className="text-sm">
            {index + 1} of {total}
          </span>
          <button
            type="button"
            data-autofocus
            onClick={onClose}
            aria-label="Close"
            className="grid h-8 w-8 place-items-center rounded-full hover:bg-wash"
          >
            <CloseIcon size={16} />
          </button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1 items-start justify-center pt-[18px]">
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          className="block animate-fade-in object-contain"
          style={{ maxHeight: "calc(100vh - 176px)", maxWidth: "calc(100vw - 224px)" }}
        />
      </div>

      <button
        type="button"
        aria-label="Previous photo"
        disabled={!hasPrev}
        onClick={() => onNavigate(index - 1)}
        className={`${arrowBase} left-5 ${hasPrev ? "border-ink text-ink hover:bg-wash" : "border-[#ebebeb] text-[#c1c1c1]"}`}
      >
        <ChevronLeft size={16} />
      </button>
      <button
        type="button"
        aria-label="Next photo"
        disabled={!hasNext}
        onClick={() => onNavigate(index + 1)}
        className={`${arrowBase} right-5 ${hasNext ? "border-ink text-ink hover:bg-wash" : "border-[#ebebeb] text-[#c1c1c1]"}`}
      >
        <ChevronRight size={16} />
      </button>

      <p role="status" aria-live="polite" className="sr-only">
        {photo.roomTitle}, photo {index + 1} of {total}
      </p>
    </div>
  );
}
