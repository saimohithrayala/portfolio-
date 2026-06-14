import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    tag: "01 · Multi-Agent System",
    title: "AI Research Agent",
    description:
      "A multi-agent research system that autonomously searches, analyzes, validates, and compiles structured reports through coordinated AI agents.",
    pipeline: ["Search", "Reader", "Writer", "Critic"],
    github: "https://github.com/saimohithrayala",
    demo: "https://multi-research-agent-git-main-sai-mohith-s-projects.vercel.app/",
  },
  {
    tag: "02 · RAG Platform",
    title: "RAG Document Intelligence Platform",
    description:
      "A document intelligence platform capable of processing 500+ page PDFs using semantic retrieval and vector search, cutting information lookup time from minutes to seconds.",
    pipeline: ["PDF Upload", "Chunk + Embed", "Vector Search", "Semantic Answer"],
    github: "https://github.com/saimohithrayala",
    demo: "https://ask-ai-sable-six.vercel.app",
  },
  {
    tag: "03 · Sentiment-Aware",
    title: "Mood-Based AI Recommendation System",
    description:
      "An AI-powered recommendation system that analyzes user mood and emotional sentiment to deliver personalized content recommendations — adapting suggestions to the user's current emotional state.",
    pipeline: ["Mood Input", "Sentiment Analysis", "Recommendation Engine", "Personalized Output"],
    github: "https://github.com/saimohithrayala",
    demo: "https://mood-based-ai-chatbots.vercel.app",
  },
  {
    tag: "04 · Tool-Calling Agent",
    title: "Weather & News AI Agent",
    description:
      "An intelligent assistant providing real-time weather forecasts and the latest news through natural conversation, using tool-calling to dynamically fetch external data and maintain context across turns.",
    pipeline: ["User Query", "Tool Router", "Live Data Fetch", "Conversational Response"],
    github: "https://github.com/saimohithrayala",
    demo: "https://news-and-climate-ai.vercel.app",
  },
];

function ProjectCard({ project, index }) {
  const reversed = index % 2 === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* visual / screenshot placeholder */}
      <div className="glass relative aspect-[16/10] overflow-hidden rounded-2xl p-1">
        <div className="flex h-full w-full flex-col rounded-xl border border-line bg-panel">
          {/* fake browser chrome */}
          <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="ml-3 truncate font-mono text-[10px] text-mute">{project.demo.replace("https://", "")}</span>
          </div>
          {/* pipeline visualization as the "screenshot" */}
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 sm:p-10">
            <div className="flex w-full flex-wrap items-center justify-center gap-2">
              {project.pipeline.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="whitespace-nowrap rounded-full border border-line bg-ink/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-fog sm:text-xs">
                    {step}
                  </span>
                  {i < project.pipeline.length - 1 && (
                    <span className="text-amber/50">→</span>
                  )}
                </div>
              ))}
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-mute">
              project preview · {project.tag}
            </span>
          </div>
        </div>
      </div>

      {/* content */}
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">{project.tag}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-fog sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-mute sm:text-base">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-fog transition hover:border-amber/50 hover:text-amber"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-widest text-ink transition hover:bg-amber/90"
          >
            Live Demo
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">03 / Projects</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-fog sm:text-4xl">
            Four agents, four problems solved.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-20 sm:gap-28">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
