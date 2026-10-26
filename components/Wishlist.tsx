"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { useToast } from "@/components/Toast";

type WishlistApi = { saved: boolean; toggle: () => void };
const WishlistContext = createContext<WishlistApi>({ saved: false, toggle: () => {} });
export const useWishlist = () => useContext(WishlistContext);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const { show } = useToast();
  const [saved, setSaved] = useState(false);

  const toggle = useCallback(() => {
    const next = !saved;
    setSaved(next);
    show(next ? "Saved to wishlist" : "Removed from wishlist");
  }, [saved, show]);

  return <WishlistContext.Provider value={{ saved, toggle }}>{children}</WishlistContext.Provider>;
}
