import { Globe, Menu, Search } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-10">
        <a href="/" aria-label="Airbnb home" className="justify-self-start">
          <img src="/images/ui/logo.svg" alt="Airbnb" className="h-auto w-[103px]" />
        </a>

        <div className="flex h-12 items-center rounded-full border border-line pl-2 pr-2 shadow-[0_1px_2px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)]">
          <img src="/images/ui/searchbar-house.png" alt="" className="mr-1 h-8 w-8 object-contain" />
          <button type="button" className="px-4 text-sm font-medium">Anywhere</button>
          <span className="h-6 w-px bg-line" />
          <button type="button" className="px-4 text-sm font-medium">Anytime</button>
          <span className="h-6 w-px bg-line" />
          <button type="button" className="px-4 text-sm text-mute">Add guests</button>
          <button type="button" aria-label="Search" className="ml-1 grid h-8 w-8 place-items-center rounded-full bg-brand text-white">
            <Search size={14} strokeWidth={3} aria-hidden />
          </button>
        </div>

        <div className="flex items-center gap-2 justify-self-end">
          <button type="button" className="rounded-full px-3 py-2.5 text-sm font-medium hover:bg-wash">Become a host</button>
          <button type="button" aria-label="Language and region" className="grid h-10 w-10 place-items-center rounded-full bg-wash hover:bg-[#ebebeb]">
            <Globe size={16} aria-hidden />
          </button>
          <button type="button" aria-label="Menu" className="grid h-10 w-10 place-items-center rounded-full bg-wash hover:bg-[#ebebeb]">
            <Menu size={16} aria-hidden />
          </button>
        </div>
      </div>
    </header>
  );
}
