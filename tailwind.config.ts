import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#222222",
        mute: "#6a6a6a",
        line: "#dddddd",
        wash: "#f7f7f7",
        brand: "#ff385c",
        soft: "#f2f2f2",
        divider: "#ebebeb",
      },
      fontFamily: {
        // Same stack as the reference's computed body font-family.
        sans: ['"Airbnb Cereal VF"', "var(--font-figtree)", "Circular", "-apple-system", "BlinkMacSystemFont", "system-ui", "Roboto", '"Helvetica Neue"', "sans-serif"],
      },
      keyframes: {
        tourIn: { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "none" } },
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        toastOut: { from: { opacity: "1" }, to: { opacity: "0", transform: "translateY(8px)" } },
        toastIn: { from: { opacity: "0", transform: "translateY(8px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: {
        "tour-in": "tourIn 280ms cubic-bezier(0.2, 0, 0, 1)",
        "fade-in": "fadeIn 180ms ease-out",
        "toast-in": "toastIn 200ms ease-out",
        "toast-out": "toastOut 200ms ease-in forwards",
      },
    },
  },
  plugins: [],
};
export default config;
