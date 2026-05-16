import { motion } from "framer-motion";
import { Section } from "./Section";
import { Building2 } from "lucide-react";

const items = [
  {
    role: "Software Developer 1",
    company: "Terragi Proptech Private Limited",
    period: "2024 — Present",
    description:
      "Built B2B Real Estate Inventory Platform connecting brokers and builders — managing 1000+ property listings with real-time search and filtering. Developed TypeScript component library reducing dev time ~30%. Integrated AWS S3 and Azure DevOps CI/CD pipelines. Shipped 3 major feature releases in 9 months.",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "AWS", "Azure", "PostgreSQL"],
  },
  {
    role: "Frontend Developer Trainee",
    company: "Primathon Technology Ventures",
    period: "2023 — 2024",
    description:
      "Transitioned from 8-year solar career into software development. Built and maintained React.js web applications; completed production-level Next.js training. Participated in code reviews and agile sprints.",
    tags: ["React.js", "Next.js", "JavaScript", "HTML", "CSS"],
  },
  {
    role: "Asset Management Engineer",
    company: "Fourth Partner Energy",
    period: "2020 — 2023",
    description:
      "Managed 30 MW solar portfolio (rooftop + ground-mount) across MP and Rajasthan. Primary technical contact for 15+ enterprise clients. Monitored SCADA data daily — tracked PR curves, inverter faults, string-level underperformance. Built client MIS dashboards and performance reports.",
    tags: ["Asset Management", "SCADA", "Solar Energy", "MIS Reporting", "Client Management"],
  },
  {
    role: "Engineer",
    company: "AMPLUS SOLAR",
    period: "2019 — 2020",
    description:
      "Operated and maintained rooftop solar plants ensuring high uptime across multiple client sites in Gujarat. Managed asset inventory, conducted regular inspections, implemented maintenance protocols.",
    tags: ["Renewable Energy", "O&M", "Rooftop Solar", "Gujarat"],
  },
  {
    role: "Engineer",
    company: "Ujaas Energy",
    period: "2016 — 2019",
    description:
      "Operated 29 MW ground-mount solar plant — one of MP's largest at the time. Full O&M lifecycle: preventive maintenance, fault diagnosis, inverter servicing, performance reporting. Maintained 98%+ plant availability over 3.5-year tenure.",
    tags: ["Solar Plants", "O&M", "29 MW", "Performance Analysis", "Preventive Maintenance"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 — Experience"
      title={<>My professional <span className="gradient-text">journey</span></>}
      description="From 59 MW of solar operations to production web apps — every role has compounded into something rare."
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-primary via-accent to-transparent" />
        <div className="space-y-8 sm:space-y-12">
          {items.map((it, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
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
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="font-mono text-xs text-primary">{it.period}</span>
                      <Building2 className="size-4 text-muted-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">{it.role}</h3>
                    <div className="text-sm text-muted-foreground mt-1">{it.company}</div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      {it.description}
                    </p>
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
    </Section>
  );
}
