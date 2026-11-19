import { Section } from "./Section";

const slots = [
  { role: "Solar / energy colleague", context: "Plant operations & asset management" },
  { role: "Engineering lead", context: "Product delivery & collaboration" },
  { role: "Client or project partner", context: "Working together on a project" },
];

export function Endorsements() {
  return (
    <Section
      id="endorsements"
      eyebrow="06 — Endorsements"
      title={<>What colleagues <span className="gradient-text">say</span></>}
      description="A space for recommendations from people who have worked with me across solar operations and software delivery."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {slots.map((slot) => (
          <article key={slot.role} className="glass flex min-h-48 flex-col rounded-3xl p-6 shadow-elegant">
            <span aria-hidden="true" className="font-display text-4xl leading-none text-primary/70">“</span>
            <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              Recommendation quote placeholder. Add a colleague&apos;s words here once approved for sharing.
            </blockquote>
            <div className="mt-5 border-t border-border/70 pt-4">
              <p className="text-sm font-semibold text-foreground">{slot.role}</p>
              <p className="mt-1 text-xs text-muted-foreground">{slot.context}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
