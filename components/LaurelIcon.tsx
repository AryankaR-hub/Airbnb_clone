import { TRACED } from "@/lib/tracedIcons";

/** Solid laurel branch traced from the guest-favourite badge; currentColor so it follows the text colour. `flip` mirrors it for the right side. */
export default function LaurelIcon({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  const laurel = TRACED.Laurel;
  return (
    <svg
      viewBox={laurel.vb}
      aria-hidden="true"
      focusable="false"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      fill="currentColor"
      fillRule="evenodd"
      preserveAspectRatio="xMidYMid meet"
    >
      <path d={laurel.d} />
    </svg>
  );
}
