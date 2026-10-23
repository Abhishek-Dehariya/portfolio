"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Mail,
  Sun,
} from "lucide-react";
import { ParticleWave } from "./ParticleWave";

const profileImg = "/abhishek.png";

const PRESETS = ["reference", "solar", "cyber"] as const;
type WavePreset = (typeof PRESETS)[number];

export function Hero() {
  const [waveMode, setWaveMode] = useState<WavePreset>("reference");

  // Randomize wave visual configuration on full page reload without consecutive repeats
  useEffect(() => {
    try {
      const STORAGE_KEY = "ad_portfolio_wave_preset";
      const lastPreset = sessionStorage.getItem(STORAGE_KEY) as WavePreset | null;
      const candidates = PRESETS.filter((p) => p !== lastPreset);
      const chosen = candidates[Math.floor(Math.random() * candidates.length)] || "reference";
      sessionStorage.setItem(STORAGE_KEY, chosen);
      setWaveMode(chosen);
    } catch {
      const chosen = PRESETS[Math.floor(Math.random() * PRESETS.length)];
      setWaveMode(chosen);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-28 select-none bg-background transition-colors duration-300"
    >
      {/* 3D WebGL / Canvas Particle Wave Floor */}
      <ParticleWave themeColor={waveMode} className="opacity-95" />

      {/* Atmospheric Radial Lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(244,63,94,0.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_90%,rgba(14,165,233,0.14),transparent_70%)]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center my-auto">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-500 dark:text-rose-300 font-mono text-xs mb-4 shadow-[0_0_15px_rgba(244,63,94,0.15)]"
        >
          <span className="size-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_#f43f5e]" />
          <span>Available for Solar O&amp;M · Asset Management · Energy Software</span>
          <Sun className="size-3.5 text-amber-500 dark:text-amber-400" />
        </motion.div>

        {/* Profile Photo: Scaled to 100-120px on desktop with repositioned badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-4 group cursor-pointer"
        >
          {/* Subtle multi-gradient glow ring */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-rose-500 via-sky-500 to-emerald-400 opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />

          {/* Circular Frame (115px on desktop, proportional on smaller viewports) */}
          <div className="relative size-24 sm:size-28 md:size-[115px] rounded-full p-0.5 bg-gradient-to-b from-rose-500 to-sky-500 shadow-xl overflow-hidden">
            <img
              src={profileImg}
              alt="Abhishek Dehariya"
              width={120}
              height={120}
              loading="eager"
              className="size-full object-cover object-center rounded-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* 59 MW Badge: Repositioned at bottom-right edge so it never covers the face */}
          <div className="absolute -bottom-1 -right-2 bg-background/95 border border-rose-500/40 rounded-full px-2.5 py-0.5 text-[11px] font-mono text-rose-500 dark:text-rose-300 shadow-md z-10 whitespace-nowrap">
            59 MW
          </div>
        </motion.div>

        {/* Full Name on a Single Line across desktop and responsive scaling */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-[clamp(1.75rem,5.2vw,4.5rem)] font-extrabold tracking-tight uppercase leading-tight sm:leading-none sm:whitespace-nowrap max-w-full text-center"
        >
          <span className="text-foreground drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)] dark:drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)]">
            ABHISHEK
          </span>{" "}
          <span className="bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(244,63,94,0.6)]">
            DEHARIYA
          </span>
        </motion.h1>

        {/* Creative Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-3 flex flex-wrap items-center justify-center gap-2 text-base sm:text-2xl font-light text-muted-foreground"
        >
          <span className="text-muted-foreground font-normal">Solar O&amp;M Lead</span>
          <span className="text-rose-500 font-bold">&bull;</span>
          <span className="text-foreground font-medium">Asset Technologist</span>
          <span className="text-rose-500 font-bold">&bull;</span>
          <span className="text-sky-600 dark:text-sky-400 font-mono text-sm sm:text-lg">Energy Software Dev</span>
        </motion.div>

        {/* Condensed Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-3 max-w-xl text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans"
        >
          8+ years managing <span className="text-foreground font-medium">59 MW</span> of utility &amp; commercial solar plants across MP, Rajasthan &amp; Gujarat — plus shipping production energy software with Next.js &amp; TypeScript.
        </motion.p>

        {/* Action Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3.5"
        >
          {/* Signature Coral Glow Pill */}
          <a
            href="#about"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-rose-500 to-red-600 shadow-[0_0_25px_rgba(244,63,94,0.65)] hover:shadow-[0_0_40px_rgba(244,63,94,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 border border-rose-400/40 cursor-pointer"
          >
            <span>Know More</span>
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary Solar Button */}
          <a
            href="#solar-experience"
            className="glass inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-foreground hover:bg-foreground/5 hover:border-primary/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>59 MW Solar Career</span>
          </a>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download
            className="glass inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground border-border hover:border-foreground/20 transition-all duration-200 cursor-pointer"
          >
            <Download className="size-3.5 text-rose-500 dark:text-rose-400" />
            <span>Resume</span>
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <Mail className="size-3.5 text-sky-500 dark:text-sky-400" />
            <span>Contact</span>
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
