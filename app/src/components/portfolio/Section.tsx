import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-16 sm:py-24 lg:py-32 px-5 sm:px-6 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-10 sm:mb-14"
        >
          {eyebrow && (
            <div className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
