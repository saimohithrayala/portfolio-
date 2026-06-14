import { motion } from "framer-motion";
import { GraduationCap, Globe2, Sparkles } from "lucide-react";

const facts = [
  {
    icon: GraduationCap,
    title: "Education",
    body: "B.Tech in Computer Science Engineering from GITAM University.",
  },
  {
    icon: Sparkles,
    title: "Focus",
    body: "LLM applications, AI agents, RAG systems, and automation workflows.",
  },
  {
    icon: Globe2,
    title: "Looking for",
    body: "Global remote opportunities and roles at AI-native startups.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">01 / About</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-fog sm:text-4xl">
              I design systems where models{" "}
              <span className="text-gradient">act, not just respond.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-mute">
              I'm an AI Engineer passionate about building LLM applications, AI agents, RAG
              systems, and automation workflows. My work focuses on turning research-grade
              ideas into reliable, deployable products — agents that search, reason, retrieve,
              and act with minimal supervision.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            {facts.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="glass flex items-start gap-4 rounded-2xl p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-panel text-amber">
                  <f.icon size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-signal">{f.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-fog">{f.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
