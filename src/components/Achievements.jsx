import { motion } from "framer-motion";
import { Rocket, Server, Workflow } from "lucide-react";

const stats = [
  { icon: Rocket, label: "AI Applications Built & Deployed", value: "4+" },
  { icon: Server, label: "End-to-end Deployments", value: "Vercel · Render" },
  { icon: Workflow, label: "Focus Area", value: "Production AI Workflows" },
];

// Generates a deterministic pseudo-contribution grid (52 weeks x 7 days)
function generateContributions() {
  const weeks = 52;
  const days = 7;
  const grid = [];
  let seed = 7;
  for (let w = 0; w < weeks; w++) {
    const col = [];
    for (let d = 0; d < days; d++) {
      seed = (seed * 9301 + 49297) % 233280;
      const rand = seed / 233280;
      let level = 0;
      if (rand > 0.55) level = 1;
      if (rand > 0.75) level = 2;
      if (rand > 0.9) level = 3;
      col.push(level);
    }
    grid.push(col);
  }
  return grid;
}

const levelColor = {
  0: "bg-line",
  1: "bg-amber/25",
  2: "bg-amber/55",
  3: "bg-amber",
};

export default function Achievements() {
  const grid = generateContributions();

  return (
    <section className="relative border-t border-line/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">05 / Track Record</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-fog sm:text-4xl">
            Built, shipped, repeated.
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="glass rounded-2xl p-6"
            >
              <s.icon size={20} className="text-amber" />
              <p className="mt-4 font-display text-2xl font-semibold text-fog">{s.value}</p>
              <p className="mt-1 text-sm text-mute">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* GitHub contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass mt-6 rounded-2xl p-6 sm:p-8"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
            <p className="font-mono text-xs uppercase tracking-widest text-signal">
              github.com/saimohithrayala — contribution activity
            </p>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-mute">
              less
              {[0, 1, 2, 3].map((l) => (
                <span key={l} className={`h-2.5 w-2.5 rounded-sm ${levelColor[l]}`} />
              ))}
              more
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="flex gap-[3px]" style={{ minWidth: "640px" }}>
              {grid.map((col, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {col.map((level, di) => (
                    <div key={di} className={`h-2.5 w-2.5 rounded-sm ${levelColor[level]}`} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
