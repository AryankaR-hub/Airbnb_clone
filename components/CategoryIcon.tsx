import { NamedIcon, TracedIcon } from "@/components/AmenityIcon";

const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;

/** Review-category icons drawn as crisp SVG to match the reference;  */
export default function CategoryIcon({ label, fallback, size = 28 }: { label: string; fallback: string[]; size?: number }) {
  const wrap = (children: React.ReactNode) => (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden {...common}>{children}</svg>
  );
  switch (label) {
    case "Value":
      return wrap(<><path d="M4.5 14.8V6.5a2 2 0 0 1 2-2h8.3a2 2 0 0 1 1.4.6l11.4 11.3a2 2 0 0 1 0 2.8l-8.4 8.4a2 2 0 0 1-2.8 0L5.1 16.2a2 2 0 0 1-.6-1.4Z" /><circle cx="10.2" cy="10.2" r="1.7" /></>);
    case "Check-in":
      return <TracedIcon name="Check-in" />;
    case "Communication":
      return wrap(<path d="M9 4.5h14a5 5 0 0 1 5 5v9a5 5 0 0 1-5 5h-5.2L16 27l-1.8-3.5H9a5 5 0 0 1-5-5v-9a5 5 0 0 1 5-5Z" />);
    case "Cleanliness":
      return <TracedIcon name="Cleanliness" />;
    case "Accuracy":
      return wrap(<><circle cx="16" cy="16" r="11.5" /><path d="m10.8 16.6 3.9 3.9 7-8.1" /></>);
    case "Location":
      return wrap(<><path d="M4.5 9 11 6l10 3 6.5-3v17L21 26l-10-3-6.5 3z" /><path d="M11 6v17M21 9v17" /></>);
    default:
      return <NamedIcon names={fallback} size={size} />;
  }
}
