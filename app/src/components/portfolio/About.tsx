import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, GraduationCap, Lightbulb, Sun, Zap } from "lucide-react";

const stats = [
  { icon: Sun, label: "Solar Assets Managed", value: "59 MW" },
  { icon: Briefcase, label: "Years in Solar O&M & Asset Management", value: "8+" },
  { icon: Lightbulb, label: "Enterprise Clients Served", value: "15+" },
  { icon: GraduationCap, label: "Electronics & Telecom, RGPV Bhopal", value: "B.Tech" },
];

const tracks = [
  {
    period: "2016 — 2023",
    title: "Solar O&M & Asset Management",
    companies: "Ujaas Energy · Amplus Solar · Fourth Partner Energy",
    detail:
      "29 MW ground-mount plant O&M, then a 30 MW rooftop + ground-mount portfolio across MP, Rajasthan and Gujarat — 59 MW of assets in total.",
    width: "w-[92%]",
    primary: true,
  },
  {
    period: "2023 — Present",
    title: "Software Engineering",
    companies: "Primathon Technology Ventures · Terragi PropTech (Gurugram)",
    detail:
      "Production React.js, Next.js and TypeScript applications — the same data, workflows and reports, this time shipped as software.",
    width: "w-[38%]",
    primary: false,
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — Profile"
      title={
        <>
          Eight years in the field.{" "}
          <span className="gradient-text">Now I build for it.</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass rounded-3xl p-8 sm:p-10 shadow-elegant"
        >
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I&apos;m a <span className="text-foreground font-medium">solar O&amp;M and asset management engineer</span> —
            8+ years responsible for <span className="text-foreground font-medium">59 MW</span> of utility-scale
            ground-mount and rooftop solar assets across Madhya Pradesh, Rajasthan and Gujarat.
          </p>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            My working day has always been plant performance: SCADA trends at first light, PR curves, inverter and
            string-level faults, preventive maintenance schedules, spares and vendor coordination — plus monthly
            generation and downtime MIS for <span className="text-foreground font-medium">15+ enterprise clients</span>.
            I owned uptime and the reporting that went with it, not just the tickets.
          </p>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Since 2023 I build software too — currently at{" "}
            <span className="gradient-text font-semibold">Terragi PropTech (Gurugram)</span>, shipping production
            React.js, Next.js and TypeScript applications. That pairing is the whole point:{" "}
            <span className="text-foreground font-medium">
              I understand the plant, and I can build the tool that runs it.
            </span>
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            B.Tech Electronics &amp; Telecom — RGPV Bhopal (2021, 8.4 CGPA) · Based in Gurugram, open to site, regional
            and hybrid energy roles.
          </p>
        </motion.div>
<div className="lg:col-span-2 grid grid-cols-2 gap-4 items-stretch">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 hover:border-primary/40 transition-all group h-full flex flex-col"
            >
              <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center mb-4 group-hover:bg-primary/20 transition-colors shrink-0">
                <s.icon className="size-5 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div className="font-display text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-2 leading-relaxed">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Career transition — solar first, software second */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 glass rounded-3xl p-6 sm:p-8 shadow-elegant"
      >
        <div className="flex items-center gap-3 mb-6">
          <Zap className="size-4 text-primary shrink-0" />
          <h3 className="font-display text-lg font-semibold">The path so far</h3>
        </div>
        <div className="space-y-6">
          {tracks.map((t) => (
            <div key={t.period}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-primary">{t.period}</span>
                <span className="font-display text-sm font-semibold">{t.title}</span>
                <span className="text-xs text-muted-foreground">{t.companies}</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-foreground/5 overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    t.primary ? "gradient-primary" : "bg-linear-to-r from-accent/70 to-primary/40"
                  } ${t.width}`}
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.detail}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
