import { motion } from "framer-motion";
import { Mail, Github, FileDown, ArrowUpRight } from "lucide-react";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "saimohithrayala27@gmail.com",
    href: "mailto:saimohithrayala27@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/saimohithrayala",
    href: "https://github.com/saimohithrayala",
  },
  {
    icon: FileDown,
    label: "Resume",
    value: "Download PDF",
    href: "/assets/Rayala_Sai_Mohith_Resume.pdf",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass overflow-hidden rounded-3xl p-8 sm:p-14"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">07 / Contact</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-fog sm:text-5xl">
            Have a problem worth automating? Let's talk.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-mute sm:text-base">
            Open to remote AI engineering roles and collaborations with startups building
            agentic products. The fastest way to reach me is email.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                download={c.label === "Resume" ? true : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: "easeOut" }}
                whileHover={{ y: -3 }}
                className="focus-ring group flex items-center justify-between rounded-2xl border border-line bg-panel/60 px-5 py-4 transition hover:border-amber/40"
              >
                <div className="flex items-center gap-3">
                  <c.icon size={18} className="text-amber" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-mute">{c.label}</p>
                    <p className="mt-0.5 text-sm text-fog">{c.value}</p>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-mute transition group-hover:text-amber group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
