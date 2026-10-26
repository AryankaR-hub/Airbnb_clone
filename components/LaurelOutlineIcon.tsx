/** Hollow (outline-only) laurel branch for the small "Guest favourite" badge. Pure vector, stroke follows currentColor so it works in light and dark themes. `flip` mirrors it for the right side. */
export default function LaurelOutlineIcon({ flip = false, className = "" }: { flip?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 20 34"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.6 10.5Q13.1 5.5 8.6 1.3Q5.1 6.3 9.6 10.5Z M8.4 15.2Q7.6 10.0 2.4 10.6Q3.2 15.8 8.4 15.2Z M9.6 15.0Q14.4 15.6 15.4 10.8Q10.6 10.2 9.6 15.0Z M8.8 21.4Q7.2 16.4 2.0 17.6Q3.6 22.6 8.8 21.4Z M10.2 21.0Q14.6 22.6 16.2 18.2Q11.8 16.6 10.2 21.0Z M12.0 26.8Q8.8 22.9 4.6 25.6Q7.8 29.5 12.0 26.8Z M9.6 10.5C8 15 8.6 22 13 27c2.2 2.4 4 4 2.4 5.4-1.2 1-2.8.4-2.6-1" />
    </svg>
  );
}
