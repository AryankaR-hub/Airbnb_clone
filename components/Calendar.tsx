import { ChevronLeft, ChevronRight } from "lucide-react";
import { TracedIcon } from "@/components/AmenityIcon";

// Static, non-interactive date picker (the reference's dates are dummy).
const MONTHS = [
  { year: 2026, month: 9, label: "October 2026" },
  { year: 2026, month: 10, label: "November 2026" },
];
const START = 18; // 18 Oct
const END = 23; // 23 Oct
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function cellsFor(year: number, month: number): (number | null)[] {
  const offset = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  return [...Array<null>(offset).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
}

function dayStyle(month: number, day: number) {
  if (month !== 9) return { unavailable: month === 10 && ((day >= 18 && day <= 24) || day >= 29), bg: undefined as string | undefined, selected: false };
  if (day === START) return { unavailable: false, selected: true, bg: "linear-gradient(to right, transparent 50%, #f2f2f2 50%)" };
  if (day === END) return { unavailable: false, selected: true, bg: "linear-gradient(to left, transparent 50%, #f2f2f2 50%)" };
  if (day > START && day < END) return { unavailable: false, selected: false, bg: "#f2f2f2" };
  return { unavailable: false, selected: false, bg: undefined };
}

export default function Calendar() {
  return (
    <section aria-labelledby="calendar-title">
      <h2 id="calendar-title" className="text-[22px] font-semibold leading-7">5 nights in Candolim</h2>
      <p className="mt-1 text-sm text-mute">18 Oct 2026 - 23 Oct 2026</p>

      <div className="mt-6 flex justify-between">
        {MONTHS.map((m, index) => (
          <div key={m.label} className="w-[308px]">
            <div className="mb-3 flex items-center justify-between">
              {index === 0 ? <button type="button" aria-label="Previous month" className="grid h-8 w-8 place-items-center rounded-full hover:bg-wash"><ChevronLeft size={16} /></button> : <span className="h-8 w-8" />}
              <h3 className="text-base font-medium">{m.label}</h3>
              {index === 1 ? <button type="button" aria-label="Next month" className="grid h-8 w-8 place-items-center rounded-full hover:bg-wash"><ChevronRight size={16} /></button> : <span className="h-8 w-8" />}
            </div>
            <div className="grid grid-cols-7 text-center">
              {WEEKDAYS.map((d, i) => (
                <span key={i} className="block h-6 text-xs font-medium leading-5 text-mute">{d}</span>
              ))}
              {cellsFor(m.year, m.month).map((day, i) =>
                day === null ? (
                  <span key={`e${i}`} />
                ) : (
                  (() => {
                    const s = dayStyle(m.month, day);
                    return (
                      <span key={day} className="grid h-11 place-items-center" style={{ background: s.bg }}>
                        <button
                          type="button"
                          aria-label={`${day} ${m.label}${s.selected ? ", selected" : ""}${s.unavailable ? ", unavailable" : ""}`}
                          className={`grid h-11 w-11 place-items-center rounded-full text-sm font-medium ${s.selected ? "bg-ink text-white" : s.unavailable ? "cursor-default text-[#c1c1c1] line-through" : ""}`}
                        >
                          {day}
                        </button>
                      </span>
                    );
                  })()
                ),
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3.5 flex items-center justify-between">
        <button type="button" aria-label="Keyboard shortcuts" className="grid h-8 w-[30px] place-items-center"><span className="grid h-[22px] w-[30px] place-items-center rounded-md border border-[#c1c1c1]"><TracedIcon name="Keyboard" size={35} className="text-mute" /></span></button>
        <button type="button" className="pr-1.5 text-sm font-medium underline">Clear dates</button>
      </div>
    </section>
  );
}
