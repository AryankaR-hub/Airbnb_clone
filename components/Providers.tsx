"use client";

import { ToastProvider } from "@/components/Toast";
import { WishlistProvider } from "@/components/Wishlist";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <WishlistProvider>{children}</WishlistProvider>
    </ToastProvider>
  );
}
