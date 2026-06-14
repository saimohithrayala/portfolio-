import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Designing Multi-Agent Systems: Search, Reader, Writer, Critic",
    excerpt:
      "Breaking down how coordinated agent roles produce more reliable research output than a single monolithic prompt.",
    tag: "Agents",
  },
  {
    title: "RAG at Scale: Lessons from 500-Page PDFs",
    excerpt:
      "Chunking strategies, embedding choices, and retrieval tuning that made semantic search fast and accurate.",
    tag: "RAG",
  },
  {
    title: "Tool-Calling Agents: Connecting LLMs to the Real World",
    excerpt:
      "How structured tool definitions let language models fetch live weather and news data reliably.",
    tag: "Tooling",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">06 / Writing</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-fog sm:text-4xl">
              Notes from building AI agents.
            </h2>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href="#"
              onClick={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="focus-ring glass group flex flex-col justify-between rounded-2xl p-6"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-signal">{post.tag}</span>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-fog">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{post.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-amber opacity-80 transition group-hover:opacity-100">
                Read article
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
