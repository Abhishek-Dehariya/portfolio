import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

const projects = [
  {
    title: "B2B Real Estate Inventory Platform",
    description:
      "Production platform for real estate brokerage — broker-builder inventory management, lead tracking, real-time property search across 1000+ listings. Built end-to-end at Terragi PropTech.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Redux", "AWS", "PostgreSQL"],
    gradient: "from-blue-500/30 via-indigo-500/20 to-purple-500/30",
    initials: "RE",
    duration: "570+ Days in Production",
    badge: "Live in Production (Code: NDA)",
    liveUrl: null,
    githubUrl: null,
    domain: false,
  },
  {
    title: "Solar Plant Monitoring Dashboard",
    description:
      "Real-time plant health dashboard with PR curve tracking, inverter alerts, generation vs. forecast charts, and O&M ticket system. Built from an O&M engineer's perspective — showing KPIs that field engineers use daily.",
    tags: ["Next.js", "TypeScript", "Recharts", "Node.js", "PostgreSQL"],
    gradient: "from-emerald-500/30 via-teal-500/20 to-green-500/30",
    initials: "☀",
    duration: "In Development",
    badge: "Solar Domain",
    liveUrl: "https://solar-dashboard.abhishekdehariya.com",
    githubUrl: "https://github.com/Abhishek-Dehariya/solar-dashboard",
    domain: true,
  },
  {
    title: "Rooftop Solar ROI Calculator",
    description:
      "Interactive calculator for rooftop solar investment. Inputs: roof area, city, DISCOM tariff, system cost. Outputs: payback period, 25-year savings, CO2 offset. Real DISCOM tariff data for 15 major Indian cities.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "from-amber-500/30 via-orange-500/20 to-yellow-500/30",
    initials: "⚡",
    duration: "In Development",
    badge: "Solar Domain",
    liveUrl: "https://solar-roi.abhishekdehariya.com",
    githubUrl: "https://github.com/Abhishek-Dehariya/solar-roi-calculator",
    domain: true,
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 — Projects"
      title={<>Selected <span className="gradient-text">work</span></>}
      description="A few projects I've designed, built, and shipped."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group glass rounded-3xl overflow-hidden shadow-elegant hover:border-primary/50 transition-all"
          >
            <div className={`relative aspect-[4/3] bg-linear-to-br ${p.gradient} overflow-hidden`}>
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-display text-7xl font-bold text-white/40 group-hover:scale-110 group-hover:text-white/60 transition-all duration-500">
                  {p.initials}
                </span>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-card via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-2 flex-wrap">
                <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  {p.duration && (
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${p.domain ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" : "text-muted-foreground bg-primary/10 border-primary/20"}`}>
                      {p.duration}
                    </span>
                  )}
                  {p.badge && (
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${p.domain ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/30" : "text-muted-foreground bg-muted/30 border-border/40"}`}>
                      {p.badge}
                    </span>
                  )}
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2">
                {p.liveUrl ? (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="size-3.5" /> Live
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-muted/30 text-muted-foreground border border-border/40 cursor-default">
                    <ExternalLink className="size-3.5" /> {p.badge === "Live in Production (Code: NDA)" ? "NDA" : "Coming Soon"}
                  </span>
                )}
                {p.githubUrl ? (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg glass hover:bg-foreground/5 transition-colors"
                  >
                    <GithubIcon className="size-3.5" /> Code
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
