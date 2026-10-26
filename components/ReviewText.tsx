"use client";

import { ChevronRight } from "lucide-react";

// The reference shows "Show more" by review length, not by measured overflow
// (a 4-line review that fits completely still has it; short ones never do).
const SHOW_MORE_MIN_CHARS = 200;

export default function ReviewText({ text }: { text: string }) {
  return (
    <>
      <p className="mt-1 line-clamp-4 text-base leading-[21px]">{text}</p>
      {text.length >= SHOW_MORE_MIN_CHARS && (
        <button type="button" className="mt-2 flex items-center gap-1 text-base font-medium underline">
          Show more <ChevronRight size={14} aria-hidden />
        </button>
      )}
    </>
  );
}
