"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

type ToastApi = { show: (text: string) => void };
const ToastContext = createContext<ToastApi>({ show: () => {} });
export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{ text: string; id: number; leaving: boolean } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const removeTimer = useRef<ReturnType<typeof setTimeout>>();

  const show = useCallback((text: string) => {
    clearTimeout(timer.current);
    clearTimeout(removeTimer.current);
    setToast({ text, id: Date.now(), leaving: false });
    timer.current = setTimeout(() => {
      setToast((t) => (t ? { ...t, leaving: true } : t));
      removeTimer.current = setTimeout(() => setToast(null), 200);
    }, 2400);
  }, []);

  useEffect(
    () => () => {
      clearTimeout(timer.current);
      clearTimeout(removeTimer.current);
    },
    [],
  );

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-8 z-[100] flex justify-center">
        {toast && (
          <div key={toast.id} className={`${toast.leaving ? "animate-toast-out" : "animate-toast-in"} rounded-lg bg-ink px-4 py-3.5 text-sm font-medium text-white shadow-lg`}>
            {toast.text}
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}
