import { motion } from "framer-motion";
import {
  Boxes,
  Cable,
  Cpu,
  Gauge,
  MonitorSmartphone,
  Radio,
  ShieldCheck,
  Sun,
  Zap,
} from "lucide-react";

const equipment = [
  {
    icon: Sun,
    title: "Solar PV modules",
    detail: "Poly and mono modules on fixed-tilt ground-mount and rooftop arrays.",
    action: "Inspected & cleaned",
  },
  {
    icon: Cpu,
    title: "String & central inverters",
    detail: "Alarm and fault-log interpretation, MPPT behaviour and grid-side parameters.",
    action: "Diagnosed",
  },
  {
    icon: Cable,
    title: "Strings, SCBs & DC distribution",
    detail: "String current imbalance, fuse and SPD checks across the DC side.",
    action: "Monitored",
  },
  {
    icon: Zap,
    title: "LT/HT panels & transformers",
    detail: "AC side and evacuation equipment, handled with site and utility teams.",
    action: "Coordinated",
  },
  {
    icon: Gauge,
    title: "Energy meters & net metering",
    detail: "Generation metering, bidirectional and net-metering readings used for reporting.",
    action: "Reported",
  },
  {
    icon: Radio,
    title: "SCADA & data loggers",
    detail: "Modbus tag and trend data feeding PR, CUF and downtime analysis.",
    action: "Analysed daily",
  },
  {
    icon: MonitorSmartphone,
    title: "Monitoring portals",
    detail: "OEM and plant portals — such as Sungrow iSolarCloud — for remote performance review.",
    action: "Used daily",
  },
  {
    icon: Boxes,
    title: "Mounting structures",
    detail: "Fixed-tilt ground-mount structures: structural, torque and corrosion checks during PM.",
    action: "PM routine",
  },
  {
    icon: ShieldCheck,
    title: "Protection & earthing",
    detail: "String fuses, SPDs, earthing and cable health kept inside PM checklists.",
    action: "PM routine",
  },
];
/* Code-drawn plant schematic: arrays through inverters, transformers and evacuation. */
function PlantSchematic() {
  const rows = [
    { yTop: 128, topW: 64, botW: 78, h: 30, skew: 12, gap: 16, offset: 12 },
    { yTop: 168, topW: 76, botW: 96, h: 36, skew: 18, gap: 18, offset: 8 },
  ];
  return (
    <svg viewBox="0 0 900 240" aria-hidden="true" className="w-full h-36 sm:h-48 lg:h-56">
      <defs>
        <linearGradient id="eqPanelFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--brand-cyan)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--brand-emerald)" stopOpacity="0.1" />
        </linearGradient>
        <radialGradient id="eqSunGlow">
          <stop offset="0%" stopColor="var(--brand-solar)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--brand-solar)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="770" cy="56" r="62" fill="url(#eqSunGlow)" />
      <circle cx="770" cy="56" r="22" fill="var(--brand-solar)" opacity="0.7" />

      <path d="M0 214 H900" stroke="var(--brand-emerald)" strokeOpacity="0.3" strokeWidth="2" />

      {rows.map((r, ri) => (
        <g key={ri}>
          {Array.from({ length: 4 }, (_, i) => {
            const x = r.offset + i * (r.topW + r.gap);
            const points = `${x + r.skew},${r.yTop} ${x + r.skew + r.topW},${r.yTop} ${x + r.botW + r.skew},${
              r.yTop + r.h
            } ${x},${r.yTop + r.h}`;
            return (
              <g key={i}>
                <polygon
                  points={points}
                  fill="url(#eqPanelFill)"
                  stroke="var(--brand-cyan)"
                  strokeOpacity="0.45"
                  strokeWidth="1.5"
                />
                <line
                  x1={x + r.skew + r.topW / 2}
                  y1={r.yTop}
                  x2={x + r.botW / 2 + r.skew / 2}
                  y2={r.yTop + r.h}
                  stroke="var(--brand-cyan)"
                  strokeOpacity="0.3"
                  strokeWidth="1"
                />
              </g>
            );
          })}
        </g>
      ))}

      {[520, 578].map((x) => (
        <g key={x}>
          <rect
            x={x}
            y={150}
            width={46}
            height={64}
            rx={6}
            fill="var(--brand-emerald)"
            fillOpacity="0.12"
            stroke="var(--brand-emerald)"
            strokeOpacity="0.5"
            strokeWidth="1.5"
          />
          {[0, 1, 2].map((k) => (
            <line
              key={k}
              x1={x + 9}
              y1={166 + k * 11}
              x2={x + 37}
              y2={166 + k * 11}
              stroke="var(--brand-cyan)"
              strokeOpacity="0.45"
              strokeWidth="2"
            />
          ))}
        </g>
      ))}

      <g>
        <rect
          x={680}
          y={140}
          width={64}
          height={74}
          rx={6}
          fill="var(--brand-solar)"
          fillOpacity="0.12"
          stroke="var(--brand-solar)"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
        {[0, 1, 2].map((k) => (
          <rect
            key={k}
            x={692 + k * 18}
            y={128}
            width={8}
            height={14}
            rx={2}
            fill="var(--brand-solar)"
            fillOpacity="0.45"
          />
        ))}
      </g>

      <g stroke="var(--brand-emerald)" strokeOpacity="0.45" strokeWidth="2" fill="none">
        <path d="M826 214 L838 96 L850 214" />
        <path d="M832 152 H856" />
        <path d="M834 124 H854" />
      </g>

      <g fill="none" strokeWidth="2" strokeOpacity="0.85" strokeLinecap="round">
        <path
          d="M300 126 L300 102 L543 102 L543 148"
          stroke="var(--brand-cyan)"
          strokeDasharray="6 9"
          className="animate-flow"
        />
        <path d="M624 182 H680" stroke="var(--brand-cyan)" strokeDasharray="6 9" className="animate-flow" />
        <path d="M744 178 H820" stroke="var(--brand-solar)" strokeDasharray="6 9" className="animate-flow" />
      </g>
    </svg>
  );
}
export function SolarEquipment() {
  return (
    <div className="mt-14 sm:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-6 sm:p-8 shadow-elegant overflow-hidden"
      >
        <div className="flex items-start gap-3 mb-2">
          <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center shrink-0">
            <Zap className="size-5 text-primary" />
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-semibold">
              Systems &amp; equipment I&apos;ve worked with
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Nine categories of plant equipment — the DC side through to metering and evacuation — on 29 MW
              ground-mount and multi-site rooftop plants.
            </p>
          </div>
        </div>
        <div className="mt-6 -mb-2">
          <PlantSchematic />
        </div>
      </motion.div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {equipment.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-5 hover:border-primary/40 transition-colors flex flex-col h-full"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center shrink-0">
                <e.icon className="size-4 text-primary" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/25 whitespace-nowrap">
                {e.action}
              </span>
            </div>
            <h4 className="font-display text-base font-semibold mt-4">{e.title}</h4>
            <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{e.detail}</p>
          </motion.div>
        ))}
      </div>

      <p className="mt-5 text-xs font-mono text-muted-foreground">
        Equipment exposure across ground-mount and rooftop plants · MP · Rajasthan · Gujarat
      </p>
    </div>
  );
}