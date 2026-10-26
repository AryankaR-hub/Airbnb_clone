import AmenityIcon, { NamedIcon } from "@/components/AmenityIcon";

const COLUMNS = [
  {
    icon: "Cancellation policy",
    title: "Cancellation policy",
    lines: ["Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.", "Review this host’s full policy for details."],
  },
  {
    icon: "House rules",
    title: "House rules",
    lines: ["Check-in after 2:00 pm", "Checkout before 11:00 am", "3 guests maximum"],
  },
  {
    icon: ["ShieldHalf", "Shield"],
    title: "Safety & property",
    lines: ["Carbon monoxide alarm not reported", "Smoke alarm not reported", "Exterior security cameras on property"],
  },
];

export default function ThingsToKnow() {
  return (
    <section aria-labelledby="things-title" className="border-t border-line py-12">
      <h2 id="things-title" className="mb-5 text-[22px] font-semibold leading-8">Things to know</h2>
      <div className="grid grid-cols-1 gap-8 min-[1128px]:grid-cols-3">
        {COLUMNS.map((c) => (
          <div key={c.title}>
            {typeof c.icon === "string" ? <AmenityIcon name={c.icon} size={24} /> : <NamedIcon names={c.icon} size={24} />}
            <h3 className="mt-[18px] text-base font-semibold leading-6">{c.title}</h3>
            <div className="mt-3 space-y-2 text-base leading-[21px]">
              {c.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <button type="button" className="mt-2 text-base font-medium leading-[21px] underline">Learn more</button>
          </div>
        ))}
      </div>
    </section>
  );
}
