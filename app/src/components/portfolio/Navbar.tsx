"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#solar-experience", label: "Solar 59MW" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#projects", label: "Portfolio" },
  { href: "#software", label: "Software" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [light, setLight] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Sync theme with document class and localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isSystemLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    const activeIsLight = saved ? saved === "light" : isSystemLight;

    if (activeIsLight) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      setLight(true);
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setLight(false);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        if (e.matches) {
          document.documentElement.classList.add("light");
          document.documentElement.classList.remove("dark");
          setLight(true);
        } else {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
          setLight(false);
        }
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Scroll spy & scrolled header effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navItems.map((item) => item.href.substring(1));
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const nextIsLight = !light;
    setLight(nextIsLight);
    if (nextIsLight) {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-60 bg-gradient-to-r from-rose-500 via-sky-500 to-emerald-400 shadow-[0_0_8px_#f43f5e]"
      />

      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 backdrop-blur-xl border ${
              scrolled
                ? "bg-background/90 border-border shadow-elegant"
                : "bg-background/65 border-border/60"
            }`}
          >
            {/* Logo matching the creative developer icon vibe in screenshot */}
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="size-9 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 grid place-items-center font-display font-black text-white text-base shadow-[0_0_15px_rgba(244,63,94,0.4)] group-hover:scale-105 transition-transform">
                <span>AD</span>
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="font-display font-bold text-sm tracking-wide text-foreground group-hover:text-rose-500 transition-colors">
                  Abhishek<span className="text-rose-500">.</span>
                </span>
                <span className="text-[10px] font-mono text-muted-foreground leading-none">
                  59 MW Solar &amp; Tech
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all relative ${
                      isActive
                        ? "text-rose-500 dark:text-rose-400 bg-rose-500/10 border border-rose-500/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-1 rounded-full bg-rose-500 dark:bg-rose-400 shadow-[0_0_6px_#f43f5e]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={toggleTheme}
                aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
                title={light ? "Switch to dark theme" : "Switch to light theme"}
                className="size-8 rounded-full bg-foreground/5 border border-border grid place-items-center text-foreground hover:bg-foreground/10 transition-all cursor-pointer"
              >
                {light ? (
                  <Moon className="size-3.5 text-foreground" />
                ) : (
                  <Sun className="size-3.5 text-amber-400" />
                )}
              </button>

              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-red-600 shadow-[0_0_15px_rgba(244,63,94,0.4)] hover:shadow-[0_0_25px_rgba(244,63,94,0.6)] hover:scale-105 active:scale-95 transition-all"
              >
                <span>Let&apos;s Connect</span>
                <Sparkles className="size-3" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle mobile menu"
                className="lg:hidden size-8 rounded-full bg-foreground/5 border border-border grid place-items-center text-foreground hover:bg-foreground/10 transition-all"
              >
                {open ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-2 bg-background/95 backdrop-blur-2xl border border-border rounded-3xl p-4 flex flex-col shadow-2xl"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-rose-500 hover:bg-foreground/5 rounded-2xl transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-border">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-red-600 shadow-[0_0_15px_rgba(244,63,94,0.4)]"
                >
                  Let&apos;s Connect
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>
    </>
  );
}
