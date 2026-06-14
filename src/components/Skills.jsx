import { motion } from "framer-motion";

const skills = [
  { name: "Python", category: "Core" },
  { name: "Machine Learning", category: "Core" },
  { name: "LangChain", category: "Agents" },
  { name: "AI Agents", category: "Agents" },
  { name: "RAG", category: "Agents" },
  { name: "LLM", category: "Agents" },
  { name: "OpenAI / Mistral AI", category: "Models" },
  { name: "FastAPI", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "React.js", category: "Frontend" },
  { name: "Vercel", category: "Deploy" },
  { name: "Render", category: "Deploy" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">02 / Stack</p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-fog sm:text-4xl">
              The toolkit behind the agents.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-mute">
            Tools and frameworks I reach for when designing, training, retrieving, and shipping
            intelligent systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 4) * 0.07, duration: 0.45, ease: "easeOut" }}
              whileHover={{ y: -4, borderColor: "rgba(255,159,28,0.5)" }}
              className="glass group rounded-xl p-4 transition-colors sm:p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-mute group-hover:text-signal">
                {skill.category}
              </p>
              <p className="mt-2 font-display text-sm font-medium text-fog sm:text-base">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
