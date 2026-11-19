"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import {
  Code2,
  Cpu,
  Database,
  Sun,
  CheckCircle2,
} from "lucide-react";

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: typeof Sun;
  accent: {
    border: string;
    bg: string;
    text: string;
    chipBg: string;
    chipBorder: string;
  };
  skills: { name: string; detail?: string }[];
  highlight: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Solar & Asset Management",
    subtitle: "8+ years managing 59 MW utility & commercial solar plants",
    icon: Sun,
    accent: {
      border: "border-amber-500/30 hover:border-amber-500/60",
      bg: "bg-amber-500/10",
      text: "text-amber-400 dark:text-amber-300",
      chipBg: "hover:bg-amber-500/10",
      chipBorder: "hover:border-amber-500/40",
    },
    skills: [
      { name: "Solar O&M", detail: "Ground-mount & rooftop lifecycle" },
      { name: "Asset Management", detail: "Availability, uptime & MTTR" },
      { name: "Plant Monitoring", detail: "SCADA & OEM portal tracking" },
      { name: "Generation Analysis", detail: "PR curve & CUF variance" },
      { name: "Preventive Maintenance", detail: "PM schedules & checklist audits" },
      { name: "Fault Diagnosis", detail: "Inverter, string & transformer issues" },
      { name: "Technical Reporting", detail: "Monthly client MIS & tariff reconciliation" },
    ],
    highlight: "Accountable for plant uptime & 98%+ availability across utility portfolios",
  },
  {
    title: "Frontend Development",
    subtitle: "Modern, responsive, type-safe web applications",
    icon: Code2,
    accent: {
      border: "border-rose-500/30 hover:border-rose-500/60",
      bg: "bg-rose-500/10",
      text: "text-rose-400 dark:text-rose-300",
      chipBg: "hover:bg-rose-500/10",
      chipBorder: "hover:border-rose-500/40",
    },
    skills: [
      { name: "React.js", detail: "Hooks, state management & SPAs" },
      { name: "Next.js", detail: "App Router, SSR & performance optimization" },
      { name: "TypeScript", detail: "Strict typing & maintainable architecture" },
      { name: "JavaScript", detail: "ES6+, async workflows & DOM APIs" },
      { name: "Tailwind CSS", detail: "Utility-first design & custom tokens" },
      { name: "HTML5", detail: "Semantic markup & accessibility standards" },
      { name: "CSS3", detail: "Flexbox, Grid, animations & glassmorphism" },
    ],
    highlight: "Authored modular TS component library cutting delivery time by ~30%",
  },
  {
    title: "Backend & Databases",
    subtitle: "API architectures, business logic & data modeling",
    icon: Database,
    accent: {
      border: "border-emerald-500/30 hover:border-emerald-500/60",
      bg: "bg-emerald-500/10",
      text: "text-emerald-400 dark:text-emerald-300",
      chipBg: "hover:bg-emerald-500/10",
      chipBorder: "hover:border-emerald-500/40",
    },
    skills: [
      { name: "Node.js", detail: "Runtime environment & service workflows" },
      { name: "NestJS", detail: "Modular enterprise backend frameworks" },
      { name: "REST APIs", detail: "RESTful endpoints & client integration" },
      { name: "SQL", detail: "Relational queries, schema design & joins" },
      { name: "PostgreSQL", detail: "Data persistence & query optimization" },
    ],
    highlight: "Integrated production services and data pipelines for 1,000+ active listings",
  },
  {
    title: "Tools & Deployment",
    subtitle: "Version control, Linux environments & cloud infrastructure",
    icon: Cpu,
    accent: {
      border: "border-sky-500/30 hover:border-sky-500/60",
      bg: "bg-sky-500/10",
      text: "text-sky-400 dark:text-sky-300",
      chipBg: "hover:bg-sky-500/10",
      chipBorder: "hover:border-sky-500/40",
    },
    skills: [
      { name: "Git", detail: "Branching workflows & version control" },
      { name: "GitHub", detail: "Collaboration, PR reviews & code management" },
      { name: "Linux", detail: "Shell scripting, server management & CLI" },
      { name: "PM2", detail: "Process management & continuous uptime" },
      { name: "AWS (S3 / EC2)", detail: "Asset storage & cloud compute hosting" },
      { name: "Azure DevOps", detail: "CI/CD pipelines & release automation" },
    ],
    highlight: "Automated deployment pipelines and server environments holding steady uptime",
  },
];

export function TechnicalSkills() {
  return (
    <Section
      id="skills"
      eyebrow="03 — Technical Skills"
      title={
        <>
          Categorized <span className="gradient-text">Core Competencies</span>
        </>
      }
      description="Proven technical capabilities across solar plant asset management and full-stack software development. Real technologies backed by verified industry execution."
    >
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className={`glass rounded-3xl p-6 sm:p-7 shadow-elegant border transition-all flex flex-col h-full ${cat.accent.border}`}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`size-11 rounded-2xl grid place-items-center shrink-0 border ${cat.accent.bg} ${cat.accent.border}`}
                >
                  <cat.icon className={`size-5.5 ${cat.accent.text}`} />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{cat.subtitle}</p>
                </div>
              </div>
              <span className="font-mono text-xs text-muted-foreground/60 shrink-0">
                0{i + 1}
              </span>
            </div>

            {/* Skills Chip Grid */}
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`group/chip rounded-xl p-2.5 bg-card/60 border border-border/70 hover:border-primary/50 transition-all flex flex-col justify-center ${cat.accent.chipBg} ${cat.accent.chipBorder}`}
                >
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="text-sm font-medium font-sans text-foreground group-hover/chip:text-primary transition-colors">
                      {skill.name}
                    </span>
                    <span className="size-1.5 rounded-full bg-foreground/20 group-hover/chip:bg-primary transition-colors shrink-0" />
                  </div>
                  {skill.detail && (
                    <span className="text-[11px] text-muted-foreground/80 line-clamp-1 mt-0.5 font-sans">
                      {skill.detail}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Highlight */}
            <div className="mt-auto pt-5 border-t border-border/50 flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className={`size-4 shrink-0 ${cat.accent.text}`} />
              <span className="font-medium text-foreground/85">{cat.highlight}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
