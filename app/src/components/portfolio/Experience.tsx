import { motion } from "framer-motion";
import { Section } from "./Section";
import { Building2 } from "lucide-react";

const items = [
  {
    role: "Software Developer 1",
    company: "Terragi Proptech Private Limited",
    period: "2024 — Present",
    description:
      "Developed user-friendly web applications utilizing React.js and Next.js, enhancing user engagement and satisfaction. Collaborated with cross-functional teams to define, design, and implement innovative features. Optimized applications for maximum speed and scalability, improving performance metrics and user experience.",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "AWS", "Azure"],
  },
  {
    role: "Frontend Developer Trainee",
    company: "Primathon Technology Ventures",
    period: "2023 — 2024",
    description:
      "Assisted in the development and maintenance of web applications using HTML, CSS, and JavaScript. Gained hands-on experience with the React.js framework. Participated in code reviews and collaborated with mentors to improve coding skills.",
    tags: ["React.js", "JavaScript", "HTML", "CSS"],
  },
  {
    role: "Asset Management Engineer",
    company: "Fourth Partner Energy",
    period: "2020 — 2023",
    description:
      "Managed the operation of solar plants to ensure optimal performance and reliability. Developed and maintained relationships with vendors. Oversaw asset management processes to maximize efficiency and minimize operational downtime.",
    tags: ["Asset Management", "Solar Energy", "Client Management"],
  },
  {
    role: "Engineer",
    company: "AMPLUS SOLAR",
    period: "2019 — 2020",
    description:
      "Operated and maintained rooftop solar plants, ensuring optimal performance and efficiency. Managed asset inventory and conducted regular inspections to uphold safety and operational standards.",
    tags: ["Renewable Energy", "Operations", "Maintenance"],
  },
  {
    role: "Engineer",
    company: "Ujaas Energy",
    period: "2016 — 2019",
    description:
      "Managed operation and maintenance of solar plants for both rooftop and ground-mounted systems. Conducted regular inspections, troubleshooting, and coordinated preventive maintenance schedules. Analyzed performance data and generated reports.",
    tags: ["Solar Plants", "O&M", "Performance Analysis"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 — Experience"
      title={<>My professional <span className="gradient-text">journey</span></>}
      description="From engineering renewable energy systems to building real estate tech — every step has shaped how I think and build."
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
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
