import { motion } from "framer-motion";
import { Section } from "./Section";
import { Building2, Cloud, Code2, Database, GitBranch, Wrench } from "lucide-react";

const softwareRoles = [
  {
    role: "Software Developer 1",
    company: "Terragi Proptech Private Limited",
    period: "2024 — Present",
    description:
      "Built a B2B real estate inventory platform connecting brokers and builders — 1000+ property listings with real-time search and filtering. Developed a TypeScript component library that cut development time by roughly 30%, integrated AWS S3, and shipped through Azure DevOps CI/CD pipelines: 3 major feature releases in 9 months.",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "AWS", "Azure", "PostgreSQL"],
  },
  {
    role: "Frontend Developer Trainee",
    company: "Primathon Technology Ventures",
    period: "2023 — 2024",
    description:
      "Moved from an 8-year solar career into software development. Built and maintained React.js web applications and completed production-level Next.js training, working inside agile sprints and code reviews.",
    tags: ["React.js", "Next.js", "JavaScript", "HTML", "CSS"],
  },
];

const stack = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React.js", "Next.js", "Vue.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux", "HTML5", "CSS3", "SCSS"],
  },
  {
    icon: Cloud,
    title: "Cloud & Backend",
    items: ["AWS (S3, EC2, Lambda)", "Azure (App Service, Blob)", "Node.js", "REST APIs", "PostgreSQL", "MongoDB", "SQL", "TimescaleDB"],
  },
  {
    icon: GitBranch,
    title: "Tools & Analytics",
    items: ["Git", "GitHub", "Azure DevOps", "VS Code", "Mixpanel", "Microsoft Clarity"],
  },
];

export function SoftwareEngineering() {
  return (
    <Section
      id="software"
      eyebrow="06 — Software"
      title={
        <>
          Software engineering,{" "}
          <span className="gradient-text">applied to energy</span>
        </>
      }
      description="1.5+ years shipping production web applications — a second, complementary skill set on top of the domain. Time-series data, dashboards and reporting are exactly what energy operations need built."
    >
      <div className="grid md:grid-cols-2 gap-5 items-stretch">
        {softwareRoles.map((r, i) => (
          <motion.div
            key={r.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-6 shadow-elegant hover:border-primary/40 transition-colors flex flex-col h-full"
          >
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <span className="font-mono text-xs text-accent bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-full">
                {r.period}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <Building2 className="size-3.5 shrink-0" />
                {r.company}
              </span>
            </div>
            <h3 className="font-display text-xl font-semibold mt-3">{r.role}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.description}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-4">
              {r.tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8"
      >
        <div className="flex items-center gap-3 mb-5">
          <Database className="size-4 text-primary shrink-0" />
          <h3 className="font-display text-xl font-semibold">Working stack</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {stack.map((g) => (
            <div key={g.title} className="glass rounded-3xl p-6 shadow-elegant h-full">
              <div className="flex items-center gap-2.5 mb-5">
                <Wrench className="size-4 text-primary shrink-0" />
                <h4 className="font-display text-base font-semibold">{g.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-xl text-[13px] border border-border/60 bg-card/40 hover:border-primary/60 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}