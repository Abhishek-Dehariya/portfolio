import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowRight, CheckCircle2, MonitorSmartphone, Puzzle, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: MonitorSmartphone,
    title: "I've used the tools I now build",
    description:
      "Eight years inside SCADA screens, OEM monitoring portals and MIS spreadsheets. I know which numbers get checked at 7 AM — and which ones nobody ever opens.",
  },
  {
    icon: Puzzle,
    title: "Domain plus engineering in one person",
    description:
      "I can sit in an O&M review, agree the action list with the site team, and then write the dashboard or workflow that makes sure it happens. No translation layer lost in between.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable for outcomes, not tickets",
    description:
      "Availability targets, downtime, client review meetings — 8 years of owning what actually happened on the asset. That's the mindset I bring to product work too.",
  },
];

const roles = [
  "Solar O&M Engineer / Manager",
  "Solar Asset Manager",
  "Performance & Monitoring Analyst",
  "Energy-Tech Product / Software",
  "ClimateTech & Renewable Energy",
];

const dayOne = [
  "Monthly generation, downtime and PR reporting",
  "O&M planning, PM trackers and spares visibility",
  "Monitoring dashboards built on SCADA / portal data",
  "Client performance reviews and escalation handling",
];

export function WhyEnergySoftware() {
  return (
    <Section
      id="why"
      eyebrow="05 — Why me"
      title={
        <>
          The gap between the{" "}
          <span className="gradient-text">plant and the product</span>
        </>
      }
      description="Most people stand on one side of this line. I've spent eight years on the asset and the last couple of years building software — which is exactly where energy operations get stuck."
    >
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 shadow-elegant hover:border-primary/40 transition-colors flex gap-4"
            >
              <div className="size-11 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center shrink-0">
                <c.icon className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass rounded-3xl p-6 sm:p-7 shadow-elegant flex flex-col"
        >
          <h3 className="font-display text-lg font-semibold">Roles I&apos;m targeting</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {roles.map((r) => (
              <span
                key={r}
                className="text-xs px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 light:text-emerald-700 border border-emerald-500/25"
              >
                {r}
              </span>
            ))}
          </div>

          <h3 className="font-display text-lg font-semibold mt-8">What I can own on day one</h3>
          <ul className="mt-4 space-y-2.5">
            {dayOne.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 gradient-primary text-primary-foreground px-5 py-3 rounded-xl font-medium shadow-glow hover:scale-[1.02] transition-transform text-sm w-full justify-center sm:w-auto"
            >
              Let&apos;s talk asset or product
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}