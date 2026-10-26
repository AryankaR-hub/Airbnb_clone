"use client";

import { useToast } from "@/components/Toast";

export default function ReserveButton({ className = "" }: { className?: string }) {
  const { show } = useToast();
  return (
    <button
      type="button"
      onClick={() => show("You won’t be charged yet")}
      className={`rounded-lg bg-[linear-gradient(to_right,#e61e4d_0%,#e31c5f_50%,#d70466_100%)] font-medium text-white ${className}`}
    >
      Reserve
    </button>
  );
}
