import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Providers from "@/components/Providers";

// Stand-in for Airbnb Cereal. The Cereal @font-face in globals.css still wins when public/fonts/AirbnbCereal-VF.woff2 exists.
const figtree = Figtree({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-figtree", display: "swap" });

export const metadata: Metadata = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="font-sans text-ink antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
