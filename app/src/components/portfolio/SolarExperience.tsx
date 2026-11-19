import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowRight, Building2, MapPin, Sun, ShieldCheck, Zap, Activity } from "lucide-react";

const solarMetrics = [
  { label: "Managed Solar Capacity", value: "59 MW", detail: "29 MW Ground-Mount + 30 MW Rooftop", icon: Sun },
  { label: "Solar Industry Experience", value: "8+ Years", detail: "Utility & Commercial Scale", icon: ShieldCheck },
  { label: "Plant Availability Record", value: "98%+", detail: "3.5-Yr Tenure at Ujaas Energy", icon: Zap },
  { label: "Enterprise Client Accounts", value: "15+", detail: "Monthly MIS & Review Dashboards", icon: Activity },
];

const items = [
  {
    role: "Asset Management Engineer",
    company: "Fourth Partner Energy",
    period: "2020 — 2023",
    location: "MP & Rajasthan",
    description:
      "Managed a 30 MW solar portfolio of rooftop and ground-mount assets. Primary technical contact for 15+ enterprise clients, conducting daily SCADA performance analysis (PR curves, CUF, inverter trip logs, and string-level underperformance) and authoring client MIS dashboards for monthly review meetings.",
    scope: ["30 MW portfolio", "15+ enterprise clients", "Rooftop + ground-mount"],
    tags: ["Asset Management", "SCADA Analytics", "PR Curve & CUF", "Client MIS Reporting"],
  },
  {
    role: "Engineer — Plant O&M",
    company: "AMPLUS SOLAR",
    period: "2019 — 2020",
    location: "Gujarat",
    description:
      "Executed operations and maintenance across commercial and industrial rooftop solar plants in Gujarat. Sustained peak generation through scheduled PM routines, electrical inspections, breakdown rectification, and site inventory control.",
    scope: ["Multiple client sites", "C&I Rooftop O&M", "Preventive Maintenance"],
    tags: ["Rooftop Solar", "Plant O&M", "Preventive Maintenance", "Asset Inventory"],
  },
  {
    role: "Engineer — Plant O&M",
    company: "Ujaas Energy",
    period: "2016 — 2019",
    location: "Madhya Pradesh",
    description:
      "Managed full O&M operations on a 29 MW utility-scale ground-mount solar plant. Executed preventive maintenance, fault diagnosis, central inverter servicing, and HT/switchyard coordination, sustaining 98%+ plant availability across a 3.5-year tenure.",
    scope: ["29 MW utility ground-mount", "98%+ availability", "Central inverters"],
    tags: ["Utility Ground-Mount", "Inverter Servicing", "Fault Diagnosis", "Switchyard Coordination"],
  },
];

export function SolarExperience() {
  return (
    <Section
      id="solar"
      eyebrow="01 — Solar O&M & Asset Management"
      title={
        <>
          Eight Years of Solar,{" "}
          <span className="bg-gradient-to-r from-amber-400 via-rose-500 to-amber-500 bg-clip-text text-transparent">
            59 MW Under Management
          </span>
        </>
      }
      description="Utility-scale ground-mount and commercial rooftop portfolios — hands-on plant operations, asset health management, SCADA analytics, and monthly client reporting across Madhya Pradesh, Rajasthan, and Gujarat."
    >
      {/* Anchor for backward compatibility */}
      <span id="solar-experience" className="sr-only" />

      {/* Verified Solar Metrics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 sm:mb-16">
        {solarMetrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-5 border border-amber-500/20 hover:border-amber-500/50 transition-all flex flex-col group shadow-elegant"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-amber-400 dark:text-amber-300">
                {m.value}
              </span>
              <div className="size-8 rounded-lg bg-amber-500/10 border border-amber-500/20 grid place-items-center text-amber-400 group-hover:scale-110 transition-transform">
                <m.icon className="size-4" />
              </div>
            </div>
            <div className="text-sm font-semibold text-foreground leading-snug">{m.label}</div>
            <div className="text-xs text-muted-foreground mt-1 font-mono">{m.detail}</div>
          </motion.div>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-rose-500 to-transparent" />
        <div className="space-y-8 sm:space-y-12">
          {items.map((it, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={it.period}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col sm:flex-row ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                } items-start gap-6`}
              >
                <div className="hidden sm:block flex-1" />
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-3 size-4 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 ring-4 ring-background shadow-[0_0_12px_rgba(245,158,11,0.6)]" />
                <div className="pl-12 sm:pl-0 flex-1 w-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass rounded-2xl p-6 shadow-elegant hover:border-amber-500/40 border border-border/80 transition-all"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2.5 flex-wrap">
                      <span className="font-mono text-xs text-amber-400 bg-amber-500/10 border border-amber-500/25 px-2.5 py-1 rounded-full font-medium">
                        {it.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/85">
                        <Building2 className="size-3.5 text-amber-500 shrink-0" />
                        {it.company}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold">{it.role}</h3>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                      <MapPin className="size-3.5 shrink-0 text-amber-500/70" />
                      {it.location}
                    </div>
                    <p className="mt-3.5 text-sm text-muted-foreground leading-relaxed">{it.description}</p>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {it.scope.map((s) => (
                        <div
                          key={s}
                          className="rounded-xl bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 text-[11px] font-mono text-amber-300 dark:text-amber-200"
                        >
                          {s}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {it.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-0.5 rounded-md bg-secondary text-foreground/80 border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 glass rounded-3xl p-6 sm:p-8 shadow-elegant flex flex-col sm:flex-row sm:items-center gap-6 justify-between border border-border/80"
      >
        <div className="max-w-2xl">
          <div className="font-mono text-xs text-rose-500 dark:text-rose-400 font-semibold uppercase tracking-wider">
            Dual Domain Mastery
          </div>
          <h3 className="font-display text-lg sm:text-xl font-bold mt-1.5">
            Bridging Solar Asset Operations and Production Software Engineering
          </h3>
          <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
            I don&apos;t just understand telemetry, PR metrics, and inverter failure modes on paper — I&apos;ve spent eight years troubleshooting them on site, and today I build the dashboards, analytics tools, and web platforms that streamline them.
          </p>
        </div>
        <a
          href="#software"
          className="group inline-flex items-center gap-2 glass px-5 py-3 rounded-xl font-medium hover:bg-foreground/5 hover:border-primary/40 transition-all text-sm shrink-0 w-fit cursor-pointer"
        >
          <span>See Software Experience</span>
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </Section>
  );
}
