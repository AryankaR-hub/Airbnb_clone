import type { ComponentType, ReactNode } from "react";
import * as Lucide from "lucide-react";
import { TRACED } from "@/lib/tracedIcons";

// Names that share one drawing in the reference.
const TRACED_ALIAS: Record<string, string> = {
  "Cooking basics": "Kitchen",
  "Private entrance": "Self check-in",
  "Cleaning available during stay": "Cleanliness",
};

/** Traced reference icon (filled, currentColor). Without `size` it renders at its true CSS size. */
export function TracedIcon({ name, size, className = "" }: { name: string; size?: number; className?: string }) {
  const icon = TRACED[TRACED_ALIAS[name] ?? name];
  if (!icon) return null;
  const px = size ?? Math.round(Number(icon.vb.split(" ")[2]) / 1.25);
  return (
    <svg viewBox={icon.vb} width={px} height={px} fill="currentColor" fillRule="evenodd" aria-hidden="true" focusable="false" className={`shrink-0 ${className}`}>
      <path d={icon.d} />
    </svg>
  );
}

// Original thin-line icons, 24x24 grid, 1.5 stroke, round caps and joins, currentColor.
// Names that share a drawing in the reference share one entry here (Kitchen = Cooking basics, Fridge = Freezer).
const dot = (x: number, y: number) => `M${x} ${y}h.01`;

const whiskAndSpoon: ReactNode = (
  <>
    <path d="M8 3C4.6 5.6 4.6 10.6 8 13c3.4-2.4 3.4-7.4 0-10Z" />
    <path d="M8 3v18M8 13v8" />
    <ellipse cx="16.5" cy="7" rx="2.3" ry="3.6" />
    <path d="M16.5 10.6V21" />
  </>
);
const fridge: ReactNode = (
  <>
    <rect x="6" y="3" width="12" height="18" rx="2" />
    <path d="M6 9h12M9 6.2v.01M9 12v3" />
  </>
);
const door: ReactNode = (
  <>
    <path d="M7 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17M4 21h16" />
    <path d={dot(14, 12.5)} strokeWidth="2" />
  </>
);

const DRAWINGS: Record<string, ReactNode> = {
  Kitchen: whiskAndSpoon,
  "Cooking basics": whiskAndSpoon,
  Fridge: fridge,
  Freezer: fridge,
  Microwave: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <rect x="6" y="8.5" width="9" height="7" rx="1" />
      <path d="M18 9.5h.01M18 12.5v3" />
    </>
  ),
  Cooker: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="9" cy="8.2" r="1.7" />
      <circle cx="15" cy="8.2" r="1.7" />
      <circle cx="9" cy="13.2" r="1.7" />
      <circle cx="15" cy="13.2" r="1.7" />
      <path d="M8 18h.01M12 18h.01M16 18h.01" />
    </>
  ),
  Toaster: (
    <>
      <rect x="3" y="9" width="18" height="10" rx="3" />
      <path d="M8 9V7.5A1.5 1.5 0 0 1 9.5 6h5A1.5 1.5 0 0 1 16 7.5V9M18 13h.01" />
    </>
  ),
  Blender: (
    <>
      <path d="M6.5 3h11l-1.6 11h-7.8z" />
      <path d="M9.2 14.2 8 21h8l-1.2-6.8M12 17.5v.01" />
      <path d="M17.5 5.5h2" />
    </>
  ),
  Kettle: (
    <>
      <path d="M6 20.5h12l.8-9.5A6.8 5.5 0 0 0 5.2 11z" />
      <path d="M12 3.5V5.5M9.5 5.5h5" />
      <path d="M18.6 9c3 0 3 6 0 6M5.4 9.5 3 8" />
      <path d="m10 17.5 4-5" />
    </>
  ),
  Coffee: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M5 8h14M8 5.5h.01" />
      <path d="M8.5 13.5h6v3a2.5 2.5 0 0 1-2.5 2.5h-1a2.5 2.5 0 0 1-2.5-2.5zM14.5 14.5h.8a1.2 1.2 0 0 1 0 2.4h-.8" />
    </>
  ),
  "Wine glasses": (
    <>
      <path d="M7 3h10v5.2a5 5 0 0 1-10 0z" />
      <path d="M7.2 8.5h9.6M12 13.2V20M8.5 21h7" />
    </>
  ),
  "Crockery and cutlery": (
    <>
      <path d="M4 3v5a2 2 0 0 0 4 0V3M6 3v18" />
      <path d="M15 4a8 8 0 0 1 0 16M15 8a4 4 0 0 1 0 8" />
    </>
  ),
  Hairdryer: (
    <>
      <circle cx="10" cy="8.5" r="5.5" />
      <circle cx="10" cy="8.5" r="1.8" />
      <path d="M15.5 6.5h3v4h-3M7.5 13.5 6 20.5a1.5 1.5 0 0 0 3 0l1.1-5.6" />
    </>
  ),
  "Cleaning products": (
    <>
      <path d="M5 9.5h13l-1.3 10.7a1 1 0 0 1-1 .8H7.3a1 1 0 0 1-1-.8z" />
      <path d="M8 9.5V7a4 4 0 0 1 8 0v2.5" />
      <rect x="11.5" y="14" width="4.5" height="4.5" rx=".8" />
    </>
  ),
  Shampoo: (
    <>
      <path d="M9 3h5M11.5 3v3M9 6h5" />
      <rect x="8" y="8" width="7" height="13" rx="2" />
      <path d="M8 12h7M8 16.5h7" />
    </>
  ),
  "Hot water": (
    <>
      <path d="M4 12.5h16v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" />
      <path d="M11 4.5l-1 4.5M14 4.5 13 9M17 4.5 16 9" />
      <path d="M4.5 9.5V4.5M3 6l1.5-1.5L6 6" />
    </>
  ),
  "Shower gel": (
    <>
      <path d="M4.5 10.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2z" />
      <path d="M6.5 8.5V5h3l1 1.5M8 5V3.5" />
      <circle cx="16.5" cy="7" r="1" />
      <circle cx="18" cy="11" r="1" />
    </>
  ),
  "Washing machine": (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="13" r="4.5" />
      <path d="m9 16 6-6M7.5 6.2h.01M10.5 6.2h.01" />
    </>
  ),
  Hangers: (
    <>
      <path d="M12 8V6.6a2.3 2.3 0 1 0-2.3-2.3" />
      <path d="M12 8 3.4 15.4a1.4 1.4 0 0 0 .9 2.6h15.4a1.4 1.4 0 0 0 .9-2.6z" />
    </>
  ),
  "Bed linen": (
    <>
      <path d="M5 4a1 1 0 0 1 1-1h8l5 5v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4M5 16.5h14M5 19h14" />
    </>
  ),
  "Room-darkening blinds": (
    <>
      <path d="M3.5 4h17M5 4v10.5h14V4M12 14.5v3" />
      <circle cx="12" cy="19" r="1.1" />
    </>
  ),
  Iron: (
    <>
      <path d="M3 17.5h18v-2.2A5.8 5.8 0 0 0 15.2 9.5H11A5.5 5.5 0 0 0 5.4 14L3 17.5Z" />
      <path d="M9.5 9.5V8a2 2 0 0 1 2-2H14M8 20.5h.01M12 20.5h.01M16 20.5h.01" />
    </>
  ),
  "Clothes storage": (
    <>
      <rect x="5" y="3" width="14" height="15" rx="1.5" />
      <path d="M12 3v15M10 10v1.5M14 10v1.5M7 18v3M17 18v3" />
    </>
  ),
  Cot: (
    <>
      <path d="M3 4v16M21 4v16M3 6.5h18M3 17h18" />
      <path d="M6.5 6.5V17M9.5 6.5V17M12 6.5V17M14.5 6.5V17M17.5 6.5V17" />
    </>
  ),
  TV: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M12 16v3.5M8.5 20h7" />
    </>
  ),
  "Air conditioning": (
    <>
      {[0, 60, 120].map((deg) => (
        <g key={deg} transform={`rotate(${deg} 12 12)`}>
          <path d="M12 3v18M9.7 5.3 12 7.6l2.3-2.3M9.7 18.7 12 16.4l2.3 2.3" />
        </g>
      ))}
    </>
  ),
  "Ceiling fan": (
    <>
      {[0, 90, 180, 270].map((deg) => (
        <path
          key={deg}
          transform={`rotate(${deg} 12 12)`}
          d="M12 10.4C11.8 6.6 13.2 3.5 15.8 3.5c2.3 0 2.5 2.6.8 4.3-1.2 1.3-2.8 2.4-4.6 2.6Z"
        />
      ))}
      <circle cx="12" cy="12" r="1.4" />
    </>
  ),
  "Exterior security cameras on property": (
    <>
      <rect x="4" y="5.5" width="12" height="8" rx="2" transform="rotate(-14 10 9.5)" />
      <path d="M16 8.2 20.5 7v6l-4.4-1.2" />
      <path d="M6.5 15.5v3.2a2.8 2.8 0 0 0 2.8 2.8" />
    </>
  ),
  "Carbon monoxide alarm": (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8.5 8.5h2M13.5 8.5h2M8.5 15.5h7M5.5 5.5l13 13" />
    </>
  ),
  "Smoke alarm": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M5.5 5.5l13 13" />
    </>
  ),
  Wifi: (
    <>
      <path d="M2.5 9.2a14 14 0 0 1 19 0M5.6 12.6a9.4 9.4 0 0 1 12.8 0M8.8 15.9a4.9 4.9 0 0 1 6.4 0" />
      <circle cx="12" cy="19.3" r="1" />
    </>
  ),
  "Dedicated workspace": (
    <>
      <path d="M3 14.5h18M5 14.5V21M19 14.5V21" />
      <path d="M6.5 14.5V10l3-3.5h2M16 14.5V9h2.5v5.5" />
    </>
  ),
  "Private entrance": door,
  "Self check-in": (
    <>
      <path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17M3.5 21h17" />
      <path d="M9 21V8h6v13" />
      <path d="M13 14.5h.01" strokeWidth="2" />
    </>
  ),
  "Patio or balcony": (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M12 3v10M7 8h10M12 13v7M9 17.5l3 2.5 3-2.5M8.5 21h7" />
    </>
  ),
  "Outdoor dining area": (
    <>
      <path d="M4 11a8 8 0 0 1 16 0zM12 3v1" />
      <path d="M12 11v3.5M3.5 14.5h17M6 14.5V21M18 14.5V21M9 17.5h6" />
    </>
  ),
  "Free parking on premises": (
    <>
      <path d="M5.2 12 7 6.8a1.6 1.6 0 0 1 1.5-1.1h7a1.6 1.6 0 0 1 1.5 1.1l1.8 5.2" />
      <path d="M4 12h16v6.2a.8.8 0 0 1-.8.8h-1.9a.8.8 0 0 1-.8-.8V17H7.5v1.2a.8.8 0 0 1-.8.8H4.8a.8.8 0 0 1-.8-.8z" />
      <path d="M7 14.5h.01M17 14.5h.01M2.5 10h1.5M20 10h1.5" />
    </>
  ),
  Pool: (
    <>
      <path d="M9 3v9M15 3v9M9 6.5h6M9 9.5h6" />
      <path d="M3 15q1.5-1.5 3 0t3 0 3 0 3 0 3 0 3 0M3 19q1.5-1.5 3 0t3 0 3 0 3 0 3 0 3 0" />
    </>
  ),
  "Hot tub": (
    <>
      <path d="M3.5 11.5h17v6a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5z" />
      <path d="M7 11.5V6.5a2 2 0 0 1 2-2M15 3.5l-1 4M18 3.5l-1 4" />
    </>
  ),
  Gym: (
    <>
      <path d="M5.5 9v6M8.5 6.5v11M15.5 6.5v11M18.5 9v6M8.5 12h7M3 11v2M21 11v2" />
    </>
  ),
  "Pets allowed": (
    <>
      <circle cx="6.6" cy="10.4" r="1.5" />
      <circle cx="10" cy="6.6" r="1.5" />
      <circle cx="14" cy="6.6" r="1.5" />
      <circle cx="17.4" cy="10.4" r="1.5" />
      <path d="M12 12.5c2.6 0 5 2.4 5 4.4 0 1.7-1.3 2.5-2.7 2.5-.9 0-1.5-.5-2.3-.5s-1.4.5-2.3.5C8.3 19.4 7 18.6 7 16.9c0-2 2.4-4.4 5-4.4Z" />
    </>
  ),
  "Cleaning available during stay": (
    <>
      <path d="M9.5 4h5v3h-5zM14.5 5.5H17M12 7v2" />
      <path d="M7.5 9.5h9a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-9.5a1 1 0 0 1 1-1z" />
      <path d="M19.5 4.5h.01M20.5 7h.01M19 9.2h.01" />
    </>
  ),
  Balloon: (
    <>
      <path d="M12 15.8c-3.6-1.9-6-4.3-6-7.2a6 6 0 1 1 12 0c0 2.9-2.4 5.3-6 7.2Z" />
      <path d="M10.3 18.6 12 15.8l1.7 2.8ZM12 18.6v2.8" />
    </>
  ),
  "Cancellation policy": (
    <>
      <rect x="3.8" y="4.2" width="16.4" height="17" rx="2.2" />
      <path d="M8.6 2.6v3.2M15.4 2.6v3.2M3.8 10.6h16.4M9.5 13.6l5 5M14.5 13.6l-5 5" />
    </>
  ),
  "House rules": (
    <>
      <path d="M15.07 12.64A6 6 0 1 0 12.94 14.77L12.37 15.34 17.68 19.51 19.81 17.38Z" />
      <circle cx="8.56" cy="8.46" r="0.85" />
    </>
  ),
  Lightbulb: (
    <>
      <path d="M12 3a6 6 0 0 0-3.500 10.900c.7.600 1 1.300 1 2.100v.5h5V16c0-.8.300-1.500 1-2.100A6 6 0 0 0 12 3Z" />
      <path d="M10 19.500h4M10.800 21.500h2.400" />
    </>
  ),
  GraduationCap: (
    <>
      <path d="m2.500 9.500 9.500-5 9.500 5-9.500 5z" />
      <path d="M6.500 12v4.200c0 1.500 2.500 2.800 5.500 2.800s5.500-1.300 5.500-2.800V12M21.500 9.500v5.500" />
    </>
  ),
  Shield: (
    <>
      <path d="M12 3 4.500 5.800v5.700c0 4.500 3 8 7.500 9.500 4.500-1.500 7.500-5 7.500-9.500V5.800z" />
      <path d="M12 3v18" />
    </>
  ),
  "Long-term stays allowed": (
    <>
      <path d="M4 7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8l-5 5H5a1 1 0 0 1-1-1z" />
      <path d="M8 3.5v4M16 3.5v4M4 10.5h16M15 20v-4a1 1 0 0 1 1-1h4" />
    </>
  ),
};

export default function AmenityIcon({ name, size = 24 }: { name: string; size?: number }) {
  if (TRACED[TRACED_ALIAS[name] ?? name]) return <TracedIcon name={name} size={size} />;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className="shrink-0"
    >
      {DRAWINGS[name] ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  );
}

// Lucide helper kept for non-amenity icons (host facts, safety, things to know).
type IconComponent = ComponentType<{ size?: number; strokeWidth?: number; "aria-hidden"?: boolean }>;
const registry = Lucide as unknown as Record<string, IconComponent>;

export function NamedIcon({ names, size = 24, strokeWidth = 1.5 }: { names: string[]; size?: number; strokeWidth?: number }) {
  const Icon = names.map((n) => registry[n]).find(Boolean) ?? Lucide.Circle;
  return <Icon size={size} strokeWidth={strokeWidth} aria-hidden />;
}
