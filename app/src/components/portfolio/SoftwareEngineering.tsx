import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  Building2,
  CheckCircle2,
  Code2,
  ExternalLink,
  Layers,
  Server,
  Zap,
} from "lucide-react";

const softwareRoles = [
  {
    role: "Software Developer 1",
    company: "Terragi Proptech Private Limited",
    period: "2024 — Present",
    location: "Gurugram, India",
    description:
      "Spearheaded frontend and client interface development for a production B2B inventory platform serving brokers and builders across 1,000+ real estate listings with live search and multi-facet filtering. Architected a reusable TypeScript component library reducing delivery time by ~30%, integrated AWS S3 for secure asset management, and established automated CI/CD deployments via Azure DevOps — delivering 3 major feature releases in 9 months.",
    deliverables: [
      "1,000+ property listings with sub-second search & filtering",
      "Modular TypeScript UI component library (~30% faster feature rollouts)",
      "AWS S3 asset storage & Azure DevOps automated CI/CD pipelines",
      "3 major production releases shipped within 9 months",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "PostgreSQL", "AWS S3", "Azure DevOps"],
    liveUrl: "https://terragi.in/",
  },
  {
    role: "Frontend Developer Trainee",
    company: "Primathon Technology Ventures",
    period: "2023 — 2024",
    location: "Gurugram, India",
    description:
      "Transitioned deep operational solar expertise into modern software engineering. Built and maintained modular React.js web applications, mastered Next.js production conventions, and collaborated in agile sprints with rigorous code reviews, test validations, and performance profiling.",
    deliverables: [
      "Production-ready Next.js & React.js web application interfaces",
      "Agile 2-week sprint cycles with strict code review guidelines",
      "Responsive state management with React hooks and modern CSS",
    ],
    tags: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "REST APIs"],
    liveUrl: null,
  },
];

const engineeringPillars = [
  {
    icon: Code2,
    title: "Web Applications & Component Systems",
    detail:
      "Type-safe, responsive user interfaces built with React.js, Next.js, and TypeScript. Design systems with reusable tokens, eliminating duplicate code and accelerating feature iteration.",
  },
  {
    icon: Layers,
    title: "Business Dashboards & Data Telemetry",
    detail:
      "Data-dense operational dashboards translating complex datasets into actionable telemetry — inspired by 8 years of live plant telemetry analysis.",
  },
  {
    icon: Server,
    title: "REST APIs & Backend Integration",
    detail:
      "RESTful API design and database integrations with Node.js, NestJS, and PostgreSQL/SQL, optimizing queries and structuring business logic cleanly.",
  },
  {
    icon: Zap,
    title: "Frontend Performance & CI/CD",
    detail:
      "Core Web Vitals tuning, bundle optimization, and automated continuous integration pipelines via Azure DevOps and AWS cloud services.",
  },
];

export function SoftwareEngineering() {
  return (
    <Section
      id="software"
      eyebrow="03 — Software Engineering"
      title={
        <>
          Production Software Engineering,{" "}
          <span className="bg-gradient-to-r from-sky-400 via-rose-500 to-sky-400 bg-clip-text text-transparent">
            Built for Real Operations
          </span>
        </>
      }
      description="Shipping enterprise web applications with React.js, Next.js, and TypeScript. Combining software engineering rigor with real-world operational domain knowledge."
    >
      {/* Experience Cards */}
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {softwareRoles.map((r, i) => (
          <motion.div
            key={r.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-6 sm:p-7 shadow-elegant hover:border-sky-500/40 border border-border/80 transition-all flex flex-col h-full group"
          >
            <div className="flex items-center justify-between gap-3 flex-wrap mb-2">
              <span className="font-mono text-xs text-sky-400 bg-sky-500/10 border border-sky-500/25 px-2.5 py-1 rounded-full font-medium">
                {r.period}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/85">
                <Building2 className="size-3.5 text-sky-500 shrink-0" />
                {r.company}
              </span>
            </div>

            <h3 className="font-display text-xl font-bold mt-2">{r.role}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.description}</p>

            {/* Deliverables Checklist */}
            <div className="mt-5 space-y-2 border-t border-border/40 pt-4">
              <div className="text-xs font-mono text-foreground/80 font-semibold mb-2">
                Key Deliverables &amp; Contributions:
              </div>
              {r.deliverables.map((d) => (
                <div key={d} className="flex items-start gap-2 text-[13px] text-muted-foreground">
                  <CheckCircle2 className="size-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{d}</span>
                </div>
              ))}
            </div>

            {/* Tech Tags */}
            <div className="mt-auto pt-6 flex flex-wrap gap-1.5 items-center justify-between">
              <div className="flex flex-wrap gap-1.5 flex-1">
                {r.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-0.5 rounded-md bg-sky-500/10 text-sky-300 dark:text-sky-200 border border-sky-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {r.liveUrl && (
                <a
                  href={r.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 px-3 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 transition-all shrink-0 ml-2"
                >
                  <span>Visit Platform</span>
                  <ExternalLink className="size-3" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Engineering Pillars */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 sm:mt-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <Code2 className="size-5 text-rose-500 shrink-0" />
          <h3 className="font-display text-xl font-bold">Engineering Practices &amp; Capabilities</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {engineeringPillars.map((p) => (
            <div
              key={p.title}
              className="glass rounded-2xl p-5 shadow-elegant border border-border/80 hover:border-primary/40 transition-all flex flex-col h-full"
            >
              <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center mb-4 shrink-0">
                <p.icon className="size-5 text-primary" />
              </div>
              <h4 className="font-display text-base font-bold leading-snug">{p.title}</h4>
              <p className="mt-2 text-xs sm:text-[13px] text-muted-foreground leading-relaxed">
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}