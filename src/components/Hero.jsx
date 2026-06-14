import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import AgentPipeline from "./AgentPipeline";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* background grid */}
      <div className="absolute inset-0 bg-grid bg-[size:48px_48px] opacity-[0.04]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
      <div className="absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-amber/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-signal/5 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8 lg:px-8">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-signal">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulseDot" />
            available for remote roles
          </motion.div>

          <motion.h1 variants={item} className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-fog sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Rayala Sai Mohith</span>
          </motion.h1>

          <motion.p variants={item} className="mt-3 font-mono text-sm uppercase tracking-[0.25em] text-amber sm:text-base">
            AI Engineer · Agentic AI Developer
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            Building production-ready AI agents, RAG systems, and intelligent automation
            solutions — from autonomous research pipelines to document intelligence platforms.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-ink transition hover:bg-amber/90"
            >
              View Projects
              <ArrowDown size={14} />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-fog transition hover:border-amber/50 hover:text-amber"
            >
              <Mail size={14} />
              Contact Me
            </a>
            <a
              href="/assets/Rayala_Sai_Mohith_Resume.pdf"
              download="Rayala_Sai_Mohith_Resume.pdf"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-fog transition hover:border-amber/50 hover:text-amber"
            >
              <FileDown size={14} />
              Download Resume
            </a>
            <a
              href="/assets/Rayala_Sai_Mohith_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-fog transition hover:border-amber/50 hover:text-amber"
            >
              <FileDown size={14} />
              View Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <AgentPipeline />
        </motion.div>
      </div>
    </section>
  );
}
