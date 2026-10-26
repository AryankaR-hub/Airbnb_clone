import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 16, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ChevronLeft = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4" />
  </Svg>
);

export const ChevronRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28" />
  </Svg>
);

export const CloseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m6 6 20 20M26 6 6 26" />
  </Svg>
);

export const ShareIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M27 18v9a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-9M16 3v23M6 13l9.3-9.3a1 1 0 0 1 1.4 0L26 13" />
  </Svg>
);

export const HeartIcon = ({ filled, ...p }: IconProps & { filled?: boolean }) => (
  <Svg
    {...p}
    fill={filled ? "#ff385c" : "none"}
    stroke={filled ? "#ff385c" : "currentColor"}
  >
    <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z" />
  </Svg>
);

export const GridIcon = (p: IconProps) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" focusable="false">
    {[2.5, 8, 13.5].flatMap((cy) =>
      [2.5, 8, 13.5].map((cx) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.35" />),
    )}
  </svg>
);
