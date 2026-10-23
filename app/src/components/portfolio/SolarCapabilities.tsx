import { motion } from "framer-motion";
import { Section } from "./Section";
import { SolarEquipment } from "./SolarEquipment";
import {
  Building2,
  Cpu,
  FileSpreadsheet,
  HardHat,
  LineChart,
  Wrench,
} from "lucide-react";

const capabilities = [
  {
    icon: Wrench,
    title: "Plant O&M & Preventive Maintenance",
    description:
      "Scheduled maintenance that keeps plants generating — inverters, SCBs, modules and mounting structures.",
    points: [
      "PM schedules and site inspection routines",
      "Corrective maintenance and fault escalation",
      "Module cleaning cycles and spares planning",
    ],
  },
  {
    icon: Building2,
    title: "Solar Asset Management",
    description:
      "Owner-side responsibility for availability and generation across a multi-site portfolio — not just site visits.",
    points: [
      "59 MW portfolio across MP, Rajasthan, Gujarat",
      "Uptime, downtime and MTTR ownership",
      "Vendor, OEM and spares coordination",
    ],
  },
  {
    icon: LineChart,
    title: "Performance Monitoring & Analysis",
    description:
      "Reading SCADA data as a story: where generation is being lost, and what is causing it.",
    points: [
      "PR curve and CUF trend analysis",
      "Generation vs. forecast deviation checks",
      "String-level underperformance detection",
    ],
  },
  {
    icon: Cpu,
    title: "Inverter & Equipment Diagnostics",
    description:
      "First-line diagnosis from fault logs to root cause, before a service team is sent to site.",
    points: [
      "Alarm and fault-log interpretation",
      "MPPT, string current and grid-side checks",
      "Root-cause notes for OEM service visits",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Client MIS & Reporting",
    description:
      "Performance reporting that clients actually use in monthly review meetings.",
    points: [
      "Monthly generation and downtime MIS",
      "15+ enterprise client accounts",
      "Tariff and generation reconciliation support",
    ],
  },
  {
    icon: HardHat,
    title: "Site Coordination & Compliance",
    description:
      "Keeping the interface between the plant, the utility and OEM teams clean and documented.",
    points: [
      "Site inspections, permits and safety routines",
      "DISCOM / utility metering coordination",
      "EPC and OEM escalation during breakdowns",
    ],
  },
];
export function SolarCapabilities() {
  return (
    <Section
      id="capabilities"
      eyebrow="03 — Capabilities"
      title={
        <>
          What I do on a{" "}
          <span className="gradient-text">solar asset</span>
        </>
      }
      description="The work I've been accountable for across 59 MW of ground-mount and rooftop plants — from the 6 AM SCADA check to the monthly client review."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
            whileHover={{ y: -5 }}
            className="glass rounded-3xl p-6 shadow-elegant hover:border-primary/40 transition-colors flex flex-col h-full"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center shrink-0">
                <c.icon className="size-5 text-primary" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold mt-4 leading-snug">{c.title}</h3>
            <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
            <ul className="mt-auto space-y-2 pt-4">
              {c.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[13px] text-muted-foreground">
                  <span className="mt-1.5 size-1.5 rounded-full bg-accent shrink-0" />
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <SolarEquipment />
    </Section>
  );
}
