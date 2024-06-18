"use client";
import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll({ children }: any) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      {children}
    </div>
  );
}
