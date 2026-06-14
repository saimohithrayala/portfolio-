import { motion } from "framer-motion";

const milestones = [
  {
    period: "Foundations",
    title: "B.Tech, Computer Science Engineering",
    body: "GITAM University — built a foundation in algorithms, systems, and software engineering.",
  },
  {
    period: "Milestone 01",
    title: "Weather & News AI Agent",
    body: "First tool-calling agent — connected an LLM to live external APIs and maintained multi-turn context.",
  },
  {
    period: "Milestone 02",
    title: "Mood-Based AI Recommendation System",
    body: "Explored sentiment analysis to personalize recommendations based on a user's emotional state.",
  },
  {
    period: "Milestone 03",
    title: "RAG Document Intelligence Platform",
    body: "Built semantic search over 500+ page PDFs, reducing lookup time from minutes to seconds.",
  },
  {
    period: "Milestone 04",
    title: "AI Research Agent",
    body: "Designed a coordinated multi-agent system — Search, Reader, Writer, and Critic — to autonomously produce structured reports.",
  },
  {
    period: "Now",
    title: "Shipping & deploying",
    body: "Deploying production AI workflows end-to-end on Vercel and Render, and looking for the next challenge.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">04 / Journey</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-fog sm:text-4xl">
            From coursework to deployed agents.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-line sm:left-[7px]" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
                className="relative flex gap-6 pl-7 sm:pl-10"
              >
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-amber bg-ink" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-signal">{m.period}</p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-fog sm:text-xl">{m.title}</h3>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-mute">{m.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
