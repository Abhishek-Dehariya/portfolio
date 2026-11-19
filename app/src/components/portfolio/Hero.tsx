"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  Mail,
  Sun,
} from "lucide-react";
import { ParticleWave } from "./ParticleWave";

const PRESETS = ["reference", "solar", "cyber"] as const;
type WavePreset = (typeof PRESETS)[number];

export function Hero() {
  // Safe lazy initializer to avoid cascading render lint error in React 19
  const [waveMode] = useState<WavePreset>(() => {
    if (typeof window === "undefined") return "reference";
    try {
      const STORAGE_KEY = "ad_portfolio_wave_preset";
      const lastPreset = sessionStorage.getItem(STORAGE_KEY) as WavePreset | null;
      const candidates = PRESETS.filter((p) => p !== lastPreset);
      const chosen = candidates[Math.floor(Math.random() * candidates.length)] || "reference";
      sessionStorage.setItem(STORAGE_KEY, chosen);
      return chosen;
    } catch {
      return PRESETS[Math.floor(Math.random() * PRESETS.length)];
    }
  });

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-28 select-none bg-background transition-colors duration-300"
    >
      {/* 3D WebGL / Canvas Particle Wave Floor — 100% UNCHANGED */}
      <ParticleWave themeColor={waveMode} className="opacity-95" />

      {/* Atmospheric Lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(244,63,94,0.09),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_90%,rgba(14,165,233,0.12),transparent_70%)]" />
      {/* Light mode floor contrast tint so wave particles stand out with high definition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-slate-200/50 via-sky-100/20 to-transparent dark:hidden" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center my-auto">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-500 dark:text-rose-300 font-mono text-xs mb-4 shadow-[0_0_15px_rgba(244,63,94,0.15)] backdrop-blur-md"
        >
          <span className="size-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_#f43f5e]" />
          <span>Available for Solar O&amp;M · Asset Management · Software Roles</span>
          <Sun className="size-3.5 text-amber-500 dark:text-amber-400" />
        </motion.div>

        {/* Profile Photograph: Significantly enlarged and prominent with subtle multi-gradient glow ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-5 group cursor-pointer"
        >
          {/* Subtle multi-gradient glow ring */}
          <div className="absolute -inset-1.5 sm:-inset-2 rounded-full bg-gradient-to-r from-rose-500 via-sky-500 to-emerald-400 opacity-70 blur-md sm:blur-lg group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />

          {/* Circular Frame - Prominent scale */}
          <div className="relative size-36 sm:size-40 md:size-44 lg:size-48 rounded-full p-1 bg-gradient-to-b from-rose-500 to-sky-500 shadow-2xl overflow-hidden">
            <Image
              src="/abhishek.png"
              alt="Abhishek Dehariya"
              width={200}
              height={200}
              priority
              className="size-full object-cover object-center rounded-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* 59 MW Badge: Clear and non-obtrusive */}
          <div className="absolute -bottom-1 -right-1 sm:-bottom-1.5 sm:-right-2 bg-background/95 border border-rose-500/50 rounded-full px-3 py-1 text-xs font-mono font-bold text-rose-500 dark:text-rose-300 shadow-lg z-10 whitespace-nowrap backdrop-blur-md">
            59 MW
          </div>
        </motion.div>

        {/* Full Name on a Single Line across desktop with responsive typography */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-[clamp(1.85rem,5.2vw,3.75rem)] font-extrabold tracking-tight uppercase leading-tight sm:leading-none sm:whitespace-nowrap max-w-full text-center"
        >
          <span className="text-foreground drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)] dark:drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)]">
            ABHISHEK
          </span>{" "}
          <span className="bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(244,63,94,0.55)]">
            DEHARIYA
          </span>
        </motion.h1>

        {/* Suggested Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-3 text-lg sm:text-2xl md:text-[1.75rem] font-display font-bold tracking-tight text-foreground/95"
        >
          Solar Expertise.{" "}
          <span className="bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">
            Technology Solutions.
          </span>
        </motion.h2>

        {/* Professional Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-2.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm sm:text-lg font-medium text-muted-foreground"
        >
          <span className="text-foreground font-semibold">Solar O&amp;M Lead</span>
          <span className="text-rose-500 font-bold">|</span>
          <span className="text-foreground font-semibold">Asset Technologist</span>
          <span className="text-rose-500 font-bold">|</span>
          <span className="text-sky-500 dark:text-sky-400 font-mono text-xs sm:text-base">Software Developer</span>
        </motion.div>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-3.5 max-w-2xl text-xs sm:text-sm md:text-[15px] text-muted-foreground leading-relaxed font-sans"
        >
          Managing solar assets and building digital solutions with{" "}
          <span className="text-foreground font-medium">React, Next.js, and TypeScript</span>. 8+ years managing{" "}
          <span className="text-foreground font-medium">59 MW</span> of utility-scale &amp; commercial solar assets across MP, Rajasthan, and Gujarat.
        </motion.p>

        {/* Action Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          {/* Primary Action: View projects */}
          <a
            href="#portfolio"
            className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-red-600 shadow-[0_0_25px_rgba(244,63,94,0.6)] hover:shadow-[0_0_35px_rgba(244,63,94,0.85)] hover:scale-105 active:scale-95 transition-all duration-300 border border-rose-400/30 cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary Action: Download resume */}
          <a
            href="/resume.pdf"
            download="Abhishek-Dehariya-Resume.pdf"
            className="glass inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-foreground hover:bg-foreground/5 hover:border-primary/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <FileText className="size-4 text-rose-500 dark:text-rose-400" />
            <span>Download Resume</span>
          </a>

          {/* Tertiary Action: Let's connect */}
          <a
            href="#contact"
            className="glass inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 hover:border-sky-500/30 transition-all duration-200 cursor-pointer"
          >
            <Mail className="size-4 text-sky-500 dark:text-sky-400" />
            <span>Let&apos;s Connect</span>
          </a>
        </motion.div>

        {/* Downward Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 flex flex-col items-center gap-1 text-[11px] text-muted-foreground font-mono"
        >
          <span>scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="size-3.5 text-rose-500 dark:text-rose-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
