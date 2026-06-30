import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
const profileImg = "/abhishek.jpeg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 sm:pt-32">
      {/* Animated background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/3 -left-32 size-80 sm:size-105 rounded-full bg-primary/30 blur-[120px] animate-blob" />
      <div className="absolute bottom-1/4 -right-32 size-80 sm:size-105 rounded-full bg-accent/30 blur-[120px] animate-blob [animation-delay:-7s]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 px-4 py-1.5 rounded-full text-xs text-emerald-400 light:text-emerald-700 font-medium mb-6"
            >
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to ClimateTech & SolarTech Roles
              <Sparkles className="size-3 text-primary" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05]"
            >
              Abhishek <span className="gradient-text">Dehariya</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-5 text-base sm:text-xl text-muted-foreground"
            >
              <span className="font-mono text-sm text-primary">{"<"}Full-Stack Developer · Solar & Energy Domain · React · Next.js{" />"}</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-4 max-w-xl mx-auto lg:mx-0 text-sm sm:text-lg text-muted-foreground leading-relaxed"
            >
              8+ years operating 59 MW of solar assets across India. 1.5 years shipping production web apps. Now building the software that renewable energy engineers actually need — because I&apos;ve lived those problems firsthand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 gradient-primary text-primary-foreground px-5 sm:px-6 py-3 rounded-xl font-medium shadow-glow hover:scale-[1.03] transition-transform text-sm sm:text-base"
              >
                View Projects
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 glass px-5 sm:px-6 py-3 rounded-xl font-medium hover:bg-foreground/5 transition-colors text-sm sm:text-base"
              >
                <Download className="size-4" />
                Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-medium text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
              >
                <Mail className="size-4" />
                Contact
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 pt-6 border-t border-border/30 flex flex-wrap items-center gap-x-8 gap-y-4 justify-center lg:justify-start"
            >
              {[
                { value: "59 MW", label: "Solar Managed" },
                { value: "8+", label: "Yrs in Energy" },
                { value: "15+", label: "Enterprise Clients" },
                { value: "1.5 yrs", label: "Dev Experience" },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="font-display text-xl font-bold gradient-text">{s.value}</div>
                  <div className="text-[11px] text-muted-foreground font-mono mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Glow rings */}
              <div className="absolute -inset-6 rounded-full bg-linear-to-tr from-primary/40 via-accent/30 to-transparent blur-2xl opacity-80" />
              <div className="absolute -inset-1 rounded-full gradient-primary opacity-90 blur-[2px]" />

              {/* Image frame */}
              <div className="relative size-56 sm:size-72 lg:size-80 rounded-full p-0.75 gradient-primary shadow-glow">
                <div className="relative size-full rounded-full overflow-hidden glass">
                  <img
                    src={profileImg}
                    alt="Abhishek Dehariya — Full-Stack Developer | Solar & Energy Expert"
                    className="size-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-2 sm:-left-6 glass rounded-2xl px-3 py-2 shadow-elegant"
              >
                <div className="text-[10px] font-mono text-muted-foreground">Currently</div>
                <div className="text-xs sm:text-sm font-semibold">Full-Stack Dev @ Terragi</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-2 -right-2 sm:-right-4 glass rounded-2xl px-3 py-2 shadow-elegant"
              >
                <div className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold">Open to work</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hidden sm:flex absolute left-1/2 -translate-x-1/2 bottom-4 text-xs text-muted-foreground font-mono"
        >
          <div className="flex flex-col items-center gap-2">
            <span>scroll</span>
            <div className="w-px h-10 bg-linear-to-b from-primary to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
