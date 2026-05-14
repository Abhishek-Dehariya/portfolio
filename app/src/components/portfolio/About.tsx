import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, GraduationCap, Lightbulb, Rocket } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "1.5+" },
  { icon: Rocket, label: "Projects Shipped", value: "10+" },
  { icon: Lightbulb, label: "Tech Stacks", value: "15+" },
  { icon: GraduationCap, label: "Background", value: "B.Tech" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — About"
      title={
        <>
          A developer who loves <span className="gradient-text">crafting interfaces</span>
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
            I'm a <span className="text-foreground font-medium">Software Developer</span> with 1.5+ years of hands-on
            experience building modern web applications using{" "}
            <span className="text-foreground font-medium">React.js</span>,{" "}
            <span className="text-foreground font-medium">Next.js</span>, and{" "}
            <span className="text-foreground font-medium">TypeScript</span>, focused on
            building intuitive real estate solutions.
          </p>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Originally trained as an Electronics &amp; Telecommunication Engineer (B.Tech, RGPV — 8.4 GPA),
            I transitioned into software development — bringing a strong analytical
            mindset and structured problem-solving to every product I build.
          </p>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Currently a <span className="gradient-text font-semibold">Software Developer 1 at Terragi Proptech Private Limited</span>,
            building scalable B2B real estate platforms that connect brokers and
            builders, shipping pixel-perfect, performant interfaces used by real customers.
          </p>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-5 hover:border-primary/40 transition-colors group"
            >
              <s.icon className="size-5 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-display text-3xl font-bold">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
