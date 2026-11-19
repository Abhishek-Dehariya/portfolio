"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import {
  Building2,
  ExternalLink,
  MapPin,
  ShieldCheck,
  Sun,
  Terminal,
} from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

type FilterType = "all" | "solar" | "software";

interface SolarProject {
  type: "solar";
  title: string;
  capacity: string;
  organization: string;
  location: string;
  scope: string;
  problem: string;
  action: string;
  outcome: string;
  tags: string[];
  gradient: string;
  initials: string;
}

interface SoftwareProject {
  type: "software";
  title: string;
  role: string;
  status: string;
  overview: string;
  features: string[];
  techStack: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  nda: boolean;
  gradient: string;
  initials: string;
  impact: string[];
}

const solarPlantProjects: SolarProject[] = [
  {
    type: "solar",
    title: "29 MW Utility Ground-Mount Plant O&M",
    capacity: "29 MW Utility-Scale",
    organization: "Ujaas Energy",
    location: "Madhya Pradesh",
    scope: "Full plant O&M lifecycle, central inverter servicing, string diagnostics, HT switchyard operations",
    problem:
      "Maintaining high plant uptime and preventing inverter thermal trips on a large 29 MW grid-connected solar installation under harsh site conditions.",
    action:
      "Executed stringent preventive maintenance schedules, filter/cooling fan replacements, thermography checks, string combiner box audits, and coordinated switchyard maintenance with utility authorities.",
    outcome:
      "Sustained 98%+ average plant availability over a 3.5-year tenure, consistently exceeding contractual generation thresholds.",
    tags: ["29 MW Ground-Mount", "98%+ Availability", "Central Inverters", "Switchyard"],
    gradient: "from-amber-500/30 via-orange-500/20 to-red-500/30",
    initials: "29M",
  },
  {
    type: "solar",
    title: "30 MW Rooftop & Ground-Mount Portfolio",
    capacity: "30 MW Distributed Portfolio",
    organization: "Fourth Partner Energy",
    location: "MP & Rajasthan",
    scope: "Multi-site asset management, daily SCADA performance analytics, monthly executive MIS reporting for 15+ clients",
    problem:
      "Mitigating generation loss from string-level underperformance, soiling, and intermittent grid curtailment across 15+ enterprise client installations.",
    action:
      "Standardized daily SCADA monitoring of PR curves, CUF, and inverter alarm logs; instituted rapid troubleshooting dispatch and automated monthly client review dashboards.",
    outcome:
      "Streamlined client review meetings, resolved generation anomalies promptly, and preserved contractual PR guarantees across 15+ enterprise portfolios.",
    tags: ["30 MW Portfolio", "15+ Enterprise Clients", "SCADA PR Analysis", "Client MIS"],
    gradient: "from-emerald-500/30 via-teal-500/20 to-sky-500/30",
    initials: "30M",
  },
  {
    type: "solar",
    title: "C&I Rooftop Solar Plant Operations",
    capacity: "Commercial & Industrial Rooftops",
    organization: "AMPLUS SOLAR",
    location: "Gujarat",
    scope: "Rooftop solar O&M, scheduled inspections, preventative servicing, and spare parts inventory management",
    problem:
      "Preventing soiling loss and localized electrical faults across distributed rooftop assets on high-demand industrial client properties.",
    action:
      "Enforced disciplined panel cleaning cycles, DC health audits, SPD and inverter checks, and optimized critical spares stock on site.",
    outcome:
      "Maintained zero safety incidents, minimized unplanned outages, and maximized daily solar yield across client premises.",
    tags: ["C&I Rooftops", "Preventive Maintenance", "Asset Inventory", "Gujarat"],
    gradient: "from-amber-600/30 via-amber-500/20 to-yellow-500/30",
    initials: "C&I",
  },
];

const softwareApplications: SoftwareProject[] = [
  {
    type: "software",
    title: "B2B Real Estate Inventory Platform",
    role: "Software Developer 1 (Terragi PropTech)",
    status: "570+ Days in Production",
    overview:
      "Production enterprise platform connecting brokers and builders, streamlining real-time inventory management, lead workflows, and property search.",
    features: [
      "1,000+ active listings with instant multi-facet filtering and real-time query handling",
      "Custom reusable TypeScript component library that accelerated feature delivery by ~30%",
      "AWS S3 cloud asset storage integrated with Azure DevOps CI/CD deployment pipelines",
      "3 major production releases delivered in 9 months with zero downtime",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "PostgreSQL", "AWS S3", "Azure DevOps"],
    liveUrl: "https://terragi.in/",
    githubUrl: null,
    nda: true,
    gradient: "from-blue-500/30 via-indigo-500/20 to-purple-500/30",
    initials: "RE",
    impact: ["1,000+ active listings", "~30% faster feature delivery", "3 releases · zero downtime"],
  },
  {
    type: "software",
    title: "Solar Plant Monitoring Dashboard",
    role: "Full Stack Engineer (Domain Project)",
    status: "In Development / Live Preview",
    overview:
      "Real-time solar plant health and telemetry dashboard crafted from the perspective of an experienced solar O&M engineer.",
    features: [
      "Performance Ratio (PR) curve tracking and daily CUF variance trendlines",
      "Live inverter fault alarms with root-cause diagnostic categorization",
      "Generation vs. forecast comparison charts and field ticketing workflow",
    ],
    techStack: ["Next.js", "TypeScript", "Recharts", "Node.js", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://solar-dashboard.abhishekdehariya.com",
    githubUrl: "https://github.com/Abhishek-Dehariya/solar-dashboard",
    nda: false,
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
    initials: "☀",
    impact: ["PR & CUF trend monitoring", "Inverter alarm diagnosis", "Forecast vs. generation"],
  },
  {
    type: "software",
    title: "Rooftop Solar ROI Calculator",
    role: "Frontend Engineer (Domain Project)",
    status: "In Development / Live Preview",
    overview:
      "Interactive solar financial modeling application helping commercial and residential property owners evaluate solar investment returns.",
    features: [
      "Dynamic DISCOM tariff rates modeled across 15 major Indian cities",
      "Calculates payback duration, 25-year cumulative savings, and lifetime CO₂ offset",
      "Interactive sliders and responsive charting for sales enablement",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "https://solar-roi.abhishekdehariya.com",
    githubUrl: "https://github.com/Abhishek-Dehariya/solar-roi-calculator",
    nda: false,
    gradient: "from-amber-500/30 via-orange-500/20 to-yellow-500/30",
    initials: "⚡",
    impact: ["15 Indian city tariffs", "25-year savings model", "Payback & CO₂ estimates"],
  },
];

export function Projects() {
  const [filter, setFilter] = useState<FilterType>("all");

  const showSolar = filter === "all" || filter === "solar";
  const showSoftware = filter === "all" || filter === "software";

  return (
    <Section
      id="portfolio"
      eyebrow="04 — Selected Projects & Achievements"
      title={
        <>
          Proven Impact in <span className="gradient-text">Solar &amp; Software</span>
        </>
      }
      description="Selected achievements from 8+ years managing utility solar assets and shipping production web applications. Verified work with real-world technical outcomes."
    >
      {/* Interactive Filter Pills */}
      <div className="flex flex-wrap items-center justify-start gap-2 mb-10">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            filter === "all"
              ? "bg-rose-500 text-white shadow-[0_0_15px_rgba(244,63,94,0.4)]"
              : "glass text-muted-foreground hover:text-foreground hover:bg-foreground/5"
          }`}
        >
          All Projects (6)
        </button>
        <button
          onClick={() => setFilter("solar")}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
            filter === "solar"
              ? "bg-amber-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]"
              : "glass text-muted-foreground hover:text-foreground hover:bg-foreground/5"
          }`}
        >
          <Sun className="size-3.5" />
          <span>Solar Plants &amp; O&amp;M (3)</span>
        </button>
        <button
          onClick={() => setFilter("software")}
          className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
            filter === "software"
              ? "bg-sky-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(14,165,233,0.4)]"
              : "glass text-muted-foreground hover:text-foreground hover:bg-foreground/5"
          }`}
        >
          <Terminal className="size-3.5" />
          <span>Software Applications (3)</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="space-y-12"
        >
          {/* Solar Projects Section */}
          {showSolar && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <Sun className="size-4.5 text-amber-500" />
                <h3 className="font-display text-xl font-bold">Solar Plants &amp; Key Operational Achievements</h3>
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25 ml-auto">
                  Verified 59 MW
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {solarPlantProjects.map((p, idx) => (
                  <motion.article
                    key={p.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="glass rounded-3xl overflow-hidden shadow-elegant border border-border/80 hover:border-amber-500/40 transition-all flex flex-col group"
                  >
                    {/* Visual Card Header */}
                    <div className={`relative h-28 bg-gradient-to-br ${p.gradient} p-4 flex items-center justify-between`}>
                      <span className="font-display text-4xl font-black text-white/30 group-hover:text-white/50 transition-colors">
                        {p.initials}
                      </span>
                      <div className="text-right">
                        <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-background/90 text-amber-400 border border-amber-500/30">
                          {p.capacity}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                          <Building2 className="size-3 text-amber-500" />
                          {p.organization}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="size-3 text-amber-500" />
                          {p.location}
                        </span>
                      </div>

                      <h4 className="font-display text-lg font-bold group-hover:text-amber-400 transition-colors mt-1">
                        {p.title}
                      </h4>

                      {/* Problem - Action - Outcome */}
                      <div className="mt-4 space-y-2.5 text-xs">
                        <div className="rounded-xl p-2.5 bg-card/60 border border-border/60">
                          <span className="font-mono font-semibold text-foreground/90 block mb-0.5">
                            Challenge / Scope:
                          </span>
                          <span className="text-muted-foreground leading-relaxed">{p.problem}</span>
                        </div>
                        <div className="rounded-xl p-2.5 bg-card/60 border border-border/60">
                          <span className="font-mono font-semibold text-foreground/90 block mb-0.5">
                            Action Taken:
                          </span>
                          <span className="text-muted-foreground leading-relaxed">{p.action}</span>
                        </div>
                        <div className="rounded-xl p-2.5 bg-amber-500/10 border border-amber-500/25">
                          <span className="font-mono font-semibold text-amber-400 dark:text-amber-300 block mb-0.5">
                            Verified Result:
                          </span>
                          <span className="text-amber-200/90 leading-relaxed font-medium">{p.outcome}</span>
                        </div>
                      </div>

                      {/* Scope Tags */}
                      <div className="mt-auto pt-4 flex flex-wrap gap-1.5 border-t border-border/40 mt-4">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-foreground/80 border border-border"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          )}

          {/* Software Applications Section */}
          {showSoftware && (
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <Terminal className="size-4.5 text-sky-400" />
                <h3 className="font-display text-xl font-bold">Software Development &amp; Web Applications</h3>
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/25 ml-auto">
                  Production &amp; Tools
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {softwareApplications.map((p, idx) => (
                  <motion.article
                    key={p.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="glass rounded-3xl overflow-hidden shadow-elegant border border-border/80 hover:border-sky-500/40 transition-all flex flex-col group"
                  >
                    {/* Conceptual UI preview; kept distinct from a real product screenshot. */}
                    <div className={`relative overflow-hidden h-40 bg-gradient-to-br ${p.gradient} p-4`} aria-label={`${p.title} interface preview concept`}>
                      <div className="absolute inset-0 bg-background/35" />
                      <div className="relative h-full rounded-2xl border border-white/20 bg-slate-950/75 p-3 shadow-xl backdrop-blur-sm">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <div className="flex items-center gap-2">
                            <span className="grid size-6 place-items-center rounded-lg bg-white/10 text-xs text-white">{p.initials}</span>
                            <span className="text-[10px] font-semibold text-white">{p.title}</span>
                          </div>
                          <span className="size-1.5 rounded-full bg-emerald-400" />
                        </div>
                        <div className="mt-3 grid grid-cols-[1.3fr_1fr] gap-2">
                          <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                            <div className="flex h-12 items-end gap-1">
                              {[35, 58, 44, 78, 62, 92, 70, 100, 84, 94].map((height, barIndex) => (
                                <span key={barIndex} className="flex-1 rounded-t-sm bg-gradient-to-t from-sky-500 to-emerald-300 opacity-90" style={{ height: `${height}%` }} />
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2 rounded-lg border border-white/10 bg-white/5 p-2">
                            <span className="block h-1.5 w-3/4 rounded bg-white/30" />
                            <span className="block h-1.5 w-full rounded bg-white/15" />
                            <span className="block h-1.5 w-2/3 rounded bg-white/15" />
                            <span className="block h-1.5 w-5/6 rounded bg-white/15" />
                          </div>
                        </div>
                        <span className="absolute bottom-2 right-3 font-mono text-[9px] text-white/70">UI PREVIEW CONCEPT</span>
                      </div>
                      <span className="absolute right-6 top-6 rounded-full bg-background/95 px-2.5 py-1 font-mono text-[10px] font-bold text-sky-300 ring-1 ring-sky-400/30">{p.status}</span>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <span className="font-mono text-xs text-sky-400 font-medium">
                        {p.role}
                      </span>
                      <h4 className="font-display text-lg font-bold group-hover:text-sky-400 transition-colors mt-1">
                        {p.title}
                      </h4>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                        {p.overview}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Project outcomes and engineering impact">
                        {p.impact.map((item) => (
                          <span key={item} className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold leading-snug text-emerald-200">
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Important Features */}
                      <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start gap-1.5">
                            <span className="mt-1 size-1.5 rounded-full bg-sky-400 shrink-0" />
                            <span className="leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.techStack.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-sky-500/10 text-sky-300 dark:text-sky-200 border border-sky-500/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="mt-auto pt-5 flex items-center gap-2 border-t border-border/40 mt-4">
                        {p.liveUrl ? (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-rose-500 to-red-600 text-white hover:opacity-90 transition-opacity"
                          >
                            <ExternalLink className="size-3.5" />
                            <span>Live Demo</span>
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-muted/40 text-muted-foreground border border-border/40 cursor-default">
                            Coming Soon
                          </span>
                        )}

                        {p.githubUrl ? (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg glass hover:bg-foreground/5 transition-colors"
                          >
                            <GithubIcon className="size-3.5" />
                            <span>Code</span>
                          </a>
                        ) : p.nda ? (
                          <span
                            title="Enterprise codebase protected by NDA"
                            className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1.5 rounded-lg bg-card/60 text-muted-foreground border border-border/50"
                          >
                            <ShieldCheck className="size-3 text-sky-400" />
                            <span>Code: NDA</span>
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
