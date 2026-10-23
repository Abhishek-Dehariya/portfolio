import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowRight, Building2, MapPin } from "lucide-react";

const items = [
  {
    role: "Asset Management Engineer",
    company: "Fourth Partner Energy",
    period: "2020 — 2023",
    location: "MP & Rajasthan",
    description:
      "Managed a 30 MW solar portfolio of rooftop and ground-mount assets. Primary technical contact for 15+ enterprise clients, reviewing SCADA data daily — PR curves, inverter faults and string-level underperformance — and producing the client MIS dashboards and performance reports behind every review meeting.",
    scope: ["30 MW portfolio", "15+ enterprise clients", "Rooftop + ground-mount"],
    tags: ["Asset Management", "SCADA", "Client MIS", "Performance Analysis"],
  },
  {
    role: "Engineer — Plant O&M",
    company: "AMPLUS SOLAR",
    period: "2019 — 2020",
    location: "Gujarat",
    description:
      "Operated and maintained rooftop solar plants across multiple client sites in Gujarat, holding uptime up through scheduled inspections, maintenance protocols and asset inventory control.",
    scope: ["Multiple client sites", "Rooftop O&M", "Asset inventory"],
    tags: ["Rooftop Solar", "O&M", "Preventive Maintenance"],
  },
  {
    role: "Engineer — Plant O&M",
    company: "Ujaas Energy",
    period: "2016 — 2019",
    location: "Madhya Pradesh",
    description:
      "Ran the full O&M lifecycle on a 29 MW ground-mount plant — one of MP's largest at the time: preventive maintenance, fault diagnosis, inverter servicing and performance reporting, with 98%+ plant availability held across a 3.5-year tenure.",
    scope: ["29 MW ground-mount", "98%+ availability", "3.5 years"],
    tags: ["Ground-Mount Solar", "Inverter Servicing", "Fault Diagnosis", "Reporting"],
  },
];

export function SolarExperience() {
  return (
    <Section
      id="solar-experience"
      eyebrow="02 — Solar Career"
      title={
        <>
          Eight years of solar,{" "}
          <span className="gradient-text">plant by plant</span>
        </>
      }
      description="Utility-scale ground-mount and commercial rooftop portfolios — O&M, asset management and the performance numbers that get reviewed every month. 59 MW in total across three states."
    >
<div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary via-accent to-transparent" />
        <div className="space-y-8 sm:space-y-12">
          {items.map((it, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={it.period}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col sm:flex-row ${
                  isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                } items-start gap-6`}
              >
                <div className="hidden sm:block flex-1" />
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-3 size-3.5 sm:size-4 rounded-full gradient-primary ring-4 ring-background shadow-glow" />
                <div className="pl-12 sm:pl-0 flex-1 w-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass rounded-2xl p-6 shadow-elegant hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                      <span className="font-mono text-xs text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                        {it.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Building2 className="size-3.5 shrink-0" />
                        {it.company}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-semibold">{it.role}</h3>
                    <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="size-3.5 shrink-0 text-primary/70" />
                      {it.location}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{it.description}</p>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {it.scope.map((s) => (
                        <div
                          key={s}
                          className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-3 py-2 text-[11px] font-mono text-emerald-400 light:text-emerald-700"
                        >
                          {s}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {it.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
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
        className="mt-10 glass rounded-3xl p-6 sm:p-8 shadow-elegant flex flex-col sm:flex-row sm:items-center gap-6 justify-between"
      >
        <div className="max-w-2xl">
          <div className="font-mono text-xs text-primary">2023 — Present</div>
          <h3 className="font-display text-lg sm:text-xl font-semibold mt-2">
            Then I started building the tools instead of only operating them
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            In 2023 I moved into software engineering — React.js, Next.js and TypeScript in production. I never left
            the energy problem: dashboards, reports and workflows for asset-heavy operations are exactly what I build
            now.
          </p>
        </div>
        <a
          href="#software"
          className="group inline-flex items-center gap-2 glass px-5 py-3 rounded-xl font-medium hover:bg-foreground/5 transition-colors text-sm shrink-0 w-fit"
        >
          See the software side
          <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </Section>
  );
}
