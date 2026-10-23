"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for cursor follow
  const cursorX = useSpring(-100, { damping: 24, stiffness: 280, mass: 0.5 });
  const cursorY = useSpring(-100, { damping: 24, stiffness: 280, mass: 0.5 });
  const dotX = useSpring(-100, { damping: 35, stiffness: 450 });
  const dotY = useSpring(-100, { damping: 35, stiffness: 450 });

  useEffect(() => {
    // Disable on touch devices or if user prefers reduced motion
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const isInteractive = target.closest("a, button, input, textarea, [role='button'], .cursor-pointer, .interactive");
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", handleElementHover);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", handleElementHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, dotX, dotY, isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 select-none overflow-hidden">
      {/* Outer target circle (similar to screenshot reference) */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.7 : 1,
          borderColor: isHovered ? "rgba(255, 99, 71, 0.9)" : "rgba(244, 63, 94, 0.65)",
          backgroundColor: isHovered ? "rgba(244, 63, 94, 0.12)" : "rgba(244, 63, 94, 0.04)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="size-8 rounded-full border border-rose-500/60 shadow-[0_0_15px_rgba(244,63,94,0.35)] backdrop-blur-[1px]"
      />

      {/* Central pinpoint dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0.6 : 1,
          backgroundColor: isHovered ? "#38bdf8" : "#f43f5e",
        }}
        transition={{ duration: 0.12 }}
        className="size-1.5 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]"
      />
    </div>
  );
}
