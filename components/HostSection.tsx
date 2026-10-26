import { Check } from "lucide-react";
import AmenityIcon from "@/components/AmenityIcon";
import { CO_HOSTS } from "@/lib/reviews";

const stat = (value: string, label: string) => (
  <div className="py-[11px]">
    <p className="text-xl font-semibold leading-6">{value}</p>
    <p className="text-sm leading-5">{label}</p>
  </div>
);

export default function HostSection() {
  return (
    <section aria-labelledby="host-title" className="border-t border-line pb-16 pt-12">
      <h2 id="host-title" className="mb-7 text-[22px] font-semibold">Meet your host</h2>
      <div className="grid grid-cols-1 gap-y-10 min-[1128px]:grid-cols-[340px_1fr] min-[1128px]:gap-x-[50px] min-[1128px]:gap-y-0">
        <div className="max-w-[340px]">
          <div className="grid grid-cols-[1fr_100px] rounded-3xl border border-line px-6 py-8 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <img src="/images/avatars/host.jpeg" alt="" className="h-[88px] w-[88px] rounded-full object-cover" />
                <span className="absolute bottom-0 right-0 grid h-7 w-7 place-items-center rounded-full bg-brand text-white ring-2 ring-white"><Check size={14} strokeWidth={3} aria-hidden /></span>
              </div>
              <p className="mt-3 text-[26px] font-semibold leading-[38px]">Mirashya Homes</p>
              <p className="mt-1 text-sm leading-4">Host</p>
            </div>
            <div className="flex flex-col justify-center border-l border-line pl-5">
              <div className="divide-y divide-line">
                {stat("1,463", "Reviews")}
                {stat("4.68★", "Rating")}
                {stat("2", "Years hosting")}
              </div>
            </div>
          </div>
          <ul className="mt-6 space-y-4 text-base">
            <li className="flex items-center gap-4"><AmenityIcon name="Balloon" /> Born in the 80s</li>
            <li className="flex items-center gap-4"><AmenityIcon name="GraduationCap" /> Where I went to school: NICMAR GOA</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[19px] font-medium leading-6">Co-Hosts</h3>
          <ul className="mt-4 grid grid-cols-3 gap-y-4">
            {CO_HOSTS.map((c) => (
              <li key={c.name} className="flex items-center gap-2.5 text-base">
                {"avatar" in c && c.avatar ? (
                  <img src={c.avatar} alt="" className="h-[34px] w-[34px] rounded-full object-cover" />
                ) : (
                  <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-divider text-sm font-medium" style={"tint" in c ? { background: c.tint } : undefined}>{c.name[0]}</span>
                )}
                {c.name}
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-[19px] font-medium leading-6">Host details</h3>
          <p className="mt-4 text-base">Response rate: 100%</p>
          <p className="text-base">Responds within an hour</p>
          <button type="button" className="mt-4 h-12 rounded-lg bg-soft px-6 text-base font-medium hover:bg-divider">Message host</button>
          <p className="mt-7 flex items-center gap-3 text-[15px] text-mute">
            <AmenityIcon name="Shield" />
            To help protect your payment, always use Airbnb to send money and communicate with hosts.
          </p>
        </div>
      </div>
    </section>
  );
}
