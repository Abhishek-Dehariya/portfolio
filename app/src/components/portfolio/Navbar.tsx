"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.classList.add("light");
      setLight(true);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const isLight = document.documentElement.classList.toggle("light");
    setLight(isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  };

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-0.5 origin-left z-60 gradient-primary"
      />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto max-w-6xl px-4 transition-all duration-300 ${
            scrolled ? "scale-[0.98]" : ""
          }`}
        >
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all duration-300 backdrop-blur-md border border-border ${
              scrolled
                ? "bg-background/90 shadow-elegant"
                : "bg-background/65"
            }`}
          >
            <a href="/" className="flex items-center gap-2 group">
              <div className="size-8 rounded-lg gradient-primary grid place-items-center font-display font-bold text-primary-foreground shadow-glow">
                A
              </div>
              <span className="font-display font-semibold text-base hidden sm:inline">
                Abhishek<span className="text-primary">.</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-4 gradient-primary rounded-full transition-all" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="size-9 rounded-lg bg-background/60 border border-border grid place-items-center hover:scale-105 transition-transform"
              >
                {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
              </button>
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#0F6E56" }}
              >
                Hire Me
              </a>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Menu"
                className="md:hidden size-9 rounded-lg bg-background/60 border border-border grid place-items-center"
              >
                {open ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>
          </div>

          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-2 bg-background/95 backdrop-blur-md border border-border rounded-2xl p-3 flex flex-col shadow-elegant"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-border">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-white"
                  style={{ backgroundColor: "#0F6E56" }}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.header>
    </>
  );
}
