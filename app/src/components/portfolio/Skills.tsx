import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Vue.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux", "HTML5", "CSS3", "SCSS"],
  },
  {
    title: "Cloud & Backend",
    items: ["AWS (S3, EC2, Lambda)", "Azure (App Service, Blob)", "Node.js", "REST APIs", "MongoDB"],
  },
  {
    title: "Tools & Analytics",
    items: ["Git", "GitHub", "VS Code", "Mixpanel", "Microsoft Clarity"],
  },
  {
    title: "Domain Knowledge",
    items: ["Real Estate Tech", "B2B Platforms", "Asset Management", "Renewable Energy", "UI/UX Development"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title={<>The <span className="gradient-text">stack</span> I work with</>}
      description="Technologies, libraries, and tools I use to build production-ready web applications."
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            className="glass rounded-3xl p-8 shadow-elegant"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl font-semibold">{g.title}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                {String(g.items.length).padStart(2, "0")} skills
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  whileHover={{ y: -3 }}
                  className="px-4 py-2 rounded-xl text-sm border border-border/60 bg-card/40 hover:border-primary/60 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
