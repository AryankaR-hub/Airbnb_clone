"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ITEM_BASE, PHOTOS, ROOMS, TOUR_PARAM } from "@/lib/photos";
import { useFocusTrap } from "@/lib/useFocusTrap";
import Lightbox from "@/components/Lightbox";
import { ChevronLeft, HeartIcon, ShareIcon } from "@/components/icons";

const TOUR_URL = `/?modal=${TOUR_PARAM}`;
const itemUrl = (index: number) => `${TOUR_URL}&modalItem=${ITEM_BASE + index}`;

type Go = (url: string, replace?: boolean) => void;

/** Reads ?modal=PHOTO_TOUR_SCROLLABLE[&modalItem=1000+n] and renders the tour / lightbox. */
export default function PhotoTourHost() {
  const router = useRouter();
  const params = useSearchParams();

  const go: Go = useCallback(
    (url, replace = false) => {
      if (replace) router.replace(url, { scroll: false });
      else router.push(url, { scroll: false });
    },
    [router],
  );

  if (params.get("modal") !== TOUR_PARAM) return null;

  const raw = params.get("modalItem");
  const parsed = raw && /^\d+$/.test(raw) ? Number(raw) - ITEM_BASE : -1;
  const active = parsed >= 0 && parsed < PHOTOS.length ? parsed : null;

  return <PhotoTour active={active} go={go} />;
}

function PhotoTour({ active, go }: { active: number | null; go: Go }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const lastActive = useRef<number | null>(null);
  const lightboxOpen = active !== null;

  useFocusTrap(rootRef, !lightboxOpen);

  // On open: lock page scroll, focus the back button. On close: restore both.
  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    rootRef.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      opener?.focus?.();
    };
  }, []);

  // The tour sits under the lightbox: make it inert, and hand focus back to the photo on return.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.toggleAttribute("inert", lightboxOpen);
    if (!lightboxOpen && lastActive.current !== null) {
      root
        .querySelector<HTMLElement>(`[data-photo-index="${lastActive.current}"]`)
        ?.focus({ preventScroll: true });
      lastActive.current = null;
    }
  }, [lightboxOpen]);

  // Keep the grid scrolled to the photo being viewed in the lightbox.
  useEffect(() => {
    if (active === null) return;
    lastActive.current = active;
    rootRef.current
      ?.querySelector(`[data-photo-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  // Esc closes the tour (the lightbox handles its own Esc).
  useEffect(() => {
    if (lightboxOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") go("/", true);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, go]);

  const jumpTo = (id: string) => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  const iconButton = "grid h-8 w-8 place-items-center rounded-full hover:bg-wash";

  return (
    <>
      <div
        ref={rootRef}
        role="dialog"
        aria-modal="true"
        aria-label="Photo tour"
        className="fixed inset-0 z-50 flex animate-tour-in flex-col bg-white"
      >
        <header className="relative flex h-[88px] shrink-0 items-center justify-center">
          <button
            type="button"
            data-autofocus
            onClick={() => go("/", true)}
            aria-label="Back to listing"
            className={`${iconButton} absolute left-[27px]`}
          >
            <ChevronLeft size={14} />
          </button>
          <h1 className="text-base font-medium">Photo tour</h1>
          <div className="absolute right-6 flex gap-[10px]">
            {/* Dummy in the reference: no toast, no wishlist change. */}
            <button type="button" aria-label="Share" className={iconButton}>
              <ShareIcon size={16} />
            </button>
            <button type="button" aria-label="Save to wishlist" className={iconButton}>
              <HeartIcon size={16} />
            </button>
          </div>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="mx-auto w-[976px] max-w-[calc(100%-48px)] pb-20">
            <nav aria-label="Jump to a room" className="mb-14">
              <ul className="grid grid-cols-4 gap-x-3 gap-y-[13px] min-[1128px]:grid-cols-8">
                {ROOMS.map((room) => (
                  <li key={room.id}>
                    <button type="button" onClick={() => jumpTo(room.id)} className="group block w-full text-left">
                      <span className="block aspect-[140/132] overflow-hidden rounded-md transition-transform duration-200 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]">
                        <img src={room.thumb} alt="" className="h-full w-full object-cover" />
                      </span>
                      <span className="mt-1.5 block text-sm leading-5 text-mute">{room.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {ROOMS.map((room) => (
              <section
                key={room.id}
                id={room.id}
                aria-labelledby={`${room.id}-title`}
                className="mb-5 scroll-mt-4 min-[1128px]:grid min-[1128px]:grid-cols-[1fr_458px]"
              >
                <div>
                  <div className="mb-5 min-[1128px]:sticky min-[1128px]:top-5 min-[1128px]:mb-0 min-[1128px]:pr-8">
                    <h2 id={`${room.id}-title`} className="text-[32px] font-medium leading-[38px]">
                      {room.title}
                    </h2>
                    {room.amenities && <p className="mt-1.5 text-base leading-[22px] text-mute">{room.amenities}</p>}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {room.rows.map((row, r) => (
                    <div key={r} className={row.length > 1 ? "grid grid-cols-2 gap-3" : ""}>
                      {row.map((photo) => (
                        <button
                          key={photo.index}
                          type="button"
                          data-photo-index={photo.index}
                          onClick={() => go(itemUrl(photo.index))}
                          aria-label={`${photo.alt}. Open photo ${photo.index + 1} of ${PHOTOS.length}`}
                          className="group block w-full overflow-hidden rounded-[10px]"
                        >
                          <img
                            src={photo.src}
                            alt=""
                            loading={photo.index < 6 ? "eager" : "lazy"}
                            decoding="async"
                            className="aspect-[3/2] w-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
                          />
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {active !== null && (
        <Lightbox
          index={active}
          onNavigate={(i) => go(itemUrl(i), true)}
          onBack={() => go(TOUR_URL, true)}
          onClose={() => go("/", true)}
        />
      )}
    </>
  );
}
