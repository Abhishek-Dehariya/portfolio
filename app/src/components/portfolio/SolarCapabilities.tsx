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
    title: "Utility & C&I Solar Plant O&M",
    description:
      "Hands-on operations and maintenance keeping plants at peak generation across ground-mount and rooftop arrays.",
    points: [
      "Preventive & corrective maintenance routines",
      "Module cleaning schedules & soilage mitigation",
      "Spare parts inventory & vendor SLA coordination",
    ],
  },
  {
    icon: Building2,
    title: "Solar Asset Management",
    description:
      "Owner-side accountability for uptime, contractual availability, and multi-site portfolio performance.",
    points: [
      "59 MW portfolio across MP, Rajasthan & Gujarat",
      "Uptime, MTTR & plant availability ownership (98%+)",
      "O&M contracts, AMC proposals & budget planning",
    ],
  },
  {
    icon: LineChart,
    title: "Generation Analysis & PR Tracking",
    description:
      "Data-driven SCADA telemetry review identifying generation loss drivers and degradation trends.",
    points: [
      "Daily PR curve & CUF variance analysis",
      "Generation vs. forecast/PVSyst comparisons",
      "String-level underperformance & clipping detection",
    ],
  },
  {
    icon: Cpu,
    title: "Inverter & Electrical Troubleshooting",
    description:
      "Diagnostic engineering identifying root causes before deploying site technicians or OEM service teams.",
    points: [
      "Central & string inverter fault-log diagnosis",
      "MPPT behaviour, DC insulation & fuse failures",
      "String combiner box (SCB) current imbalance checks",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Client MIS & Technical Reporting",
    description:
      "Executive reporting delivering transparency and contractual compliance for enterprise stakeholders.",
    points: [
      "Monthly generation & downtime MIS dashboards",
      "15+ enterprise client portfolio accounts",
      "JMR, tariff reconciliation & billing support",
    ],
  },
  {
    icon: HardHat,
    title: "Site Inspections & Grid Compliance",
    description:
      "Ensuring plant operations adhere to safety standards, DISCOM requirements, and statutory regulations.",
    points: [
      "Comprehensive plant safety & electrical audits",
      "DISCOM / utility net-metering synchronization",
      "Protection, earthing & lightning audit compliance",
    ],
  },
];

export function SolarCapabilities() {
  return (
    <Section
      id="capabilities"
      eyebrow="02 — Plant Capabilities"
      title={
        <>
          Field-Tested <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">Solar Competencies</span>
        </>
      }
      description="Proven operational expertise across 59 MW of utility-scale ground-mount and commercial rooftop plants — from 6 AM SCADA telemetry checks to monthly client executive reviews."
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
            className="glass rounded-3xl p-6 shadow-elegant hover:border-amber-500/40 border border-border/80 transition-all flex flex-col h-full"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="size-10 rounded-xl bg-amber-500/10 border border-amber-500/20 grid place-items-center shrink-0">
                <c.icon className="size-5 text-amber-500 dark:text-amber-400" />
              </div>
              <span className="font-mono text-xs text-muted-foreground/60">
                0{i + 1}
              </span>
            </div>
            <h3 className="font-display text-lg font-bold mt-4 leading-snug">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
            <ul className="mt-auto space-y-2 pt-4 border-t border-border/40 mt-4">
              {c.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[13px] text-muted-foreground">
                  <span className="mt-1.5 size-1.5 rounded-full bg-amber-500/80 shrink-0" />
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
