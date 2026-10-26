import { ChevronDown } from "lucide-react";
import ReserveButton from "@/components/ReserveButton";

const field = "block w-full px-3 py-2.5 text-left";
const label = "block text-[10px] font-semibold uppercase leading-3";

export default function BookingCard() {
  return (
    <aside className="sticky top-[92px] pb-8" aria-label="Reservation">
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-line px-4 py-3.5">
        <img src="/images/ui/discount.svg" alt="" className="h-8 w-8" />
        <p className="flex-1 text-sm leading-5">
          Get 10% off your next stay.
          <br />
          <button type="button" className="font-semibold underline">Terms apply</button>
        </p>
        <button type="button" className="h-8 rounded-lg bg-[#f2f2f2] px-4 text-sm font-medium hover:bg-[#ebebeb]">Claim</button>
      </div>

      <div className="rounded-xl border border-line p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        <p className="mb-5 text-base">
          <span className="text-[22px] font-semibold underline">₹28,499</span> for 5 nights
        </p>

        <div className="overflow-hidden rounded-lg border border-[#b0b0b0]">
          <div className="grid grid-cols-2 border-b border-[#b0b0b0]">
            <button type="button" className={`${field} border-r border-[#b0b0b0]`}>
              <span className={label}>Check-in</span>
              <span className="text-sm">10/18/2026</span>
            </button>
            <button type="button" className={field}>
              <span className={label}>Checkout</span>
              <span className="text-sm">10/23/2026</span>
            </button>
          </div>
          <button type="button" className={`${field} flex items-center justify-between`}>
            <span>
              <span className={label}>Guests</span>
              <span className="text-sm">2 guests</span>
            </span>
            <ChevronDown size={16} aria-hidden />
          </button>
        </div>

        <p className="mt-3 rounded-md bg-wash py-2 text-center text-xs text-mute">
          Free cancellation before <span className="font-semibold text-ink">17 October</span>
        </p>

        <ReserveButton className="mt-4 h-12 w-full text-base" />
        <p className="mt-3 text-center text-sm text-mute">You won’t be charged yet</p>
      </div>

      <p className="mt-6 flex items-center justify-center gap-2 text-xs text-mute">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false"><path d="M3 1.500a.5.5 0 0 1 1 0V2h8.300a.5.5 0 0 1 .4.800L11 5.500l1.700 2.700a.5.5 0 0 1-.4.800H4v6.500a.5.5 0 0 1-1 0z" /></svg>
        <button type="button" className="underline">Report this listing</button>
      </p>
    </aside>
  );
}
