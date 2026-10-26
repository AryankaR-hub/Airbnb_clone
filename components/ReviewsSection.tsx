import { ChevronRight } from "lucide-react";
import { CATEGORIES, CHIPS, REVIEWS, type Review } from "@/lib/reviews";
import CategoryIcon from "@/components/CategoryIcon";
import ReviewText from "@/components/ReviewText";

function Avatar({ review }: { review: Review }) {
  return review.avatar ? (
    <img src={review.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
  ) : (
    <span className="grid h-10 w-10 place-items-center rounded-full text-base font-medium text-[#7a5a3a]" style={{ background: review.tint }}>
      {review.initial}
    </span>
  );
}

const BARS = [
  { n: 5, w: "96%" },
  { n: 4, w: "4%" },
  { n: 3, w: "0%" },
  { n: 2, w: "0%" },
  { n: 1, w: "0%" },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="scroll-mt-[82px] border-t border-line pb-12 pt-16">
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-3">
          <img src="/images/ui/laurel-big-left.png" alt="" className="h-[86px] w-[47px] -translate-y-3 object-contain" />
          <h2 id="reviews-title" className="text-[96px] font-bold leading-[104px]">4.95</h2>
          <img src="/images/ui/laurel-big-right.png" alt="" className="h-[86px] w-[47px] -translate-y-3 object-contain" />
        </div>
        <p className="mt-7 text-[22px] font-semibold leading-7">Guest favourite</p>
        <p className="mt-2.5 max-w-[430px] text-base leading-5 text-mute">This home is a guest favourite based on ratings, reviews and reliability</p>
        <button type="button" className="mt-4 text-sm font-medium underline">How reviews work</button>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-y-5 pt-2 min-[1128px]:grid-cols-[1.3fr_repeat(6,1fr)] min-[1128px]:pt-0">
        <div className="min-[1128px]:pr-6">
          <p className="mb-2 text-sm font-medium">Overall rating</p>
          <ul className="space-y-1">
            {BARS.map((b) => (
              <li key={b.n} className="flex items-center gap-2 text-xs">
                <span className="w-2">{b.n}</span>
                <span className="h-1 flex-1 rounded-full bg-line"><span className="block h-1 rounded-full bg-ink" style={{ width: b.w }} /></span>
              </li>
            ))}
          </ul>
        </div>
        {CATEGORIES.map((c) => (
          <div key={c.label} className="flex flex-col min-[1128px]:border-l min-[1128px]:border-line min-[1128px]:px-6">
            <div>
              <p className="text-sm font-medium leading-5">{c.label}</p>
              <p className="mt-3 text-lg font-semibold leading-6">{c.score}</p>
            </div>
            <div className="mt-2"><CategoryIcon label={c.label} fallback={c.icon} size={36} /></div>
          </div>
        ))}
      </div>

      <ul className="no-scrollbar mt-8 flex gap-3 overflow-x-auto" aria-label="Review topics">
        {CHIPS.map((chip) => (
          <li key={chip.label} className="shrink-0">
            <button type="button" className="flex items-center gap-2 rounded-2xl border border-line px-4 py-3 text-sm hover:bg-wash">
              <img src={`/images/chips/${chip.icon}.png`} alt="" className="h-6 w-6 shrink-0 object-contain" />
              <span className="font-medium">{chip.label}</span>
              <span className="text-mute">{chip.count}</span>
            </button>
          </li>
        ))}
      </ul>

      <ul className="mt-8 grid grid-cols-1 gap-x-16 gap-y-10 min-[1128px]:grid-cols-2">
        {REVIEWS.map((r) => (
          <li key={r.name}>
            <div className="flex items-center gap-3">
              <Avatar review={r} />
              <div>
                <p className="text-base font-medium leading-5">{r.name}</p>
                <p className="text-sm text-mute">{r.tenure}</p>
              </div>
            </div>
            <p className="mt-2.5 text-sm"><span aria-label="5 out of 5 stars" className="text-xs">★★★★★</span> · {r.when}</p>
            <ReviewText text={r.text} />
          </li>
        ))}
      </ul>

      <button type="button" className="mt-10 h-12 rounded-lg border border-ink px-6 text-base font-medium hover:bg-wash">Show all 19 reviews</button>
    </section>
  );
}
