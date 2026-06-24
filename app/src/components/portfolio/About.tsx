import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, GraduationCap, Lightbulb, Rocket } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Solar Assets Managed", value: "59 MW" },
  { icon: Rocket, label: "Years in Energy Sector", value: "8+" },
  { icon: Lightbulb, label: "Enterprise Clients", value: "15+" },
  { icon: GraduationCap, label: "Electronics & Telecom, RGPV", value: "B.Tech" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={
        <>
          Engineer who learned to code.{" "}
          <span className="gradient-text">Developer who knows solar.</span>
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
            I&apos;m a <span className="text-foreground font-medium">Full-Stack Developer</span> with an unusual background:{" "}
            <span className="text-foreground font-medium">8 years as a solar O&amp;M and asset management engineer</span>{" "}
            before transitioning into software.
          </p>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            I&apos;ve monitored SCADA dashboards at 6 AM, written MIS reports for{" "}
            <span className="text-foreground font-medium">15+ enterprise clients</span>, and managed{" "}
            <span className="text-foreground font-medium">59 MW of solar assets</span> across MP and Rajasthan.
            Now I build the software that engineers like me needed but didn&apos;t have.
          </p>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Currently at <span className="gradient-text font-semibold">Terragi PropTech (Gurugram)</span>, building B2B
            real estate platforms with React.js, Next.js, TypeScript.
            Targeting ClimateTech and SolarTech roles where domain expertise and engineering skills compound.
          </p>
          <p className="mt-5 text-sm text-muted-foreground">
            B.Tech Electronics &amp; Telecom — RGPV Bhopal (2021, 8.4 CGPA)
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
    </Section>
  );
}
