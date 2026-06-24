"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const EMAIL = "a.dehariya10@gmail.com";
const PHONE = "+919806610010";
const PHONE_DISPLAY = "+91 98066 10010";
const WA_URL = "https://wa.me/919806610010";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function copyToClipboard(text: string, label: string) {
  navigator.clipboard.writeText(text).then(() => {
    toast.success(`${label} copied!`, { duration: 2000 });
  });
}

function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleMailClick = () => {
    copyToClipboard(EMAIL, "Email address");
  };

  const handlePhoneClick = () => {
    if (isMobileDevice()) {
      window.location.href = `tel:${PHONE}`;
    } else {
      copyToClipboard(PHONE_DISPLAY, "Phone number");
    }
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    if (!name || !email || !subject || !message) return;

    setSending(true);

    const body = `Hi Abhishek,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setTimeout(() => {
      setSending(false);
      setSent(true);
      formRef.current?.reset();
      toast.success("Message sent via your email client!");
      setTimeout(() => setSent(false), 4000);
    }, 800);
  };

  return (
    <Section
      id="contact"
      eyebrow="05 — Contact"
      title={<>Let&apos;s <span className="gradient-text">build</span> something</>}
      description="Have a role, a project, or just want to chat? Drop me a message — I usually reply within a day."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Left card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass rounded-3xl p-8 shadow-elegant flex flex-col"
        >
          <div>
            <h3 className="font-display text-2xl font-semibold">Reach out</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Open to frontend roles, freelance opportunities, and interesting
              collaborations.
            </p>
            <button
              onClick={handleMailClick}
              className="mt-6 inline-block font-mono text-sm gradient-text font-medium hover:opacity-80 transition-opacity cursor-pointer"
              title="Click to copy email"
            >
              {EMAIL}
            </button>

            <div className="mt-6 flex items-center gap-2.5 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 w-fit">
              <span className="size-2 rounded-full bg-emerald-400 light:bg-emerald-600 animate-pulse shrink-0" />
              <span className="text-xs text-emerald-400 light:text-emerald-700 font-medium">
                Available for new opportunities
              </span>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="size-8 grid place-items-center rounded-lg bg-primary/10 border border-primary/20 shrink-0 text-base">📍</span>
                <span>Gurugram, India &mdash; IST (UTC+5:30)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="size-8 grid place-items-center rounded-lg bg-primary/10 border border-primary/20 shrink-0 text-base">⚡</span>
                <span>Usually replies within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="size-8 grid place-items-center rounded-lg bg-primary/10 border border-primary/20 shrink-0 text-base">☀</span>
                <span>Open to ClimateTech &amp; SolarTech roles</span>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="mt-auto pt-8 flex flex-wrap gap-2">
            {/* Mail — copies email */}
            <motion.button
              whileHover={{ y: -4, scale: 1.05 }}
              onClick={handleMailClick}
              aria-label="Copy email"
              title="Copy email address"
              className="size-11 grid place-items-center rounded-xl glass hover:bg-primary/15 hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Mail className="size-4" />
            </motion.button>

            {/* Phone — dialer on mobile, copy on desktop */}
            <motion.button
              whileHover={{ y: -4, scale: 1.05 }}
              onClick={handlePhoneClick}
              aria-label="Phone"
              title="Call on mobile / Copy number on desktop"
              className="size-11 grid place-items-center rounded-xl glass hover:bg-primary/15 hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Phone className="size-4" />
            </motion.button>

            {/* WhatsApp — opens WhatsApp */}
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.05 }}
              aria-label="WhatsApp"
              title="Chat on WhatsApp"
              className="size-11 grid place-items-center rounded-xl glass hover:bg-[#25D366]/15 hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors"
            >
              <WhatsAppIcon className="size-4" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/abhishek-dehariya-02404911a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.05 }}
              aria-label="LinkedIn"
              className="size-11 grid place-items-center rounded-xl glass hover:bg-primary/15 hover:text-primary hover:border-primary/40 transition-colors"
            >
              <LinkedinIcon className="size-4" />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Abhishek-Dehariya"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.05 }}
              aria-label="GitHub"
              className="size-11 grid place-items-center rounded-xl glass hover:bg-primary/15 hover:text-primary hover:border-primary/40 transition-colors"
            >
              <GithubIcon className="size-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          ref={formRef}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="lg:col-span-3 glass rounded-3xl p-8 shadow-elegant space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="What's this about?" />
          <div>
            <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Message
            </label>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me a bit about your project or role..."
              className="mt-2 w-full rounded-xl bg-card/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending || sent}
            className="group inline-flex items-center gap-2 gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-medium shadow-glow hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {sent ? "Sent ✓" : sending ? "Opening..." : "Send Message"}
            <Send className="size-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs text-muted-foreground">
            This will open your email client with the message pre-filled.
          </p>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-card/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}
