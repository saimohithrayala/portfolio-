import { motion } from "framer-motion";

const agents = [
  { id: "search", label: "Search", status: "complete" },
  { id: "reader", label: "Reader", status: "complete" },
  { id: "writer", label: "Writer", status: "active" },
  { id: "critic", label: "Critic", status: "queued" },
];

const statusColor = {
  complete: "bg-signal",
  active: "bg-amber",
  queued: "bg-mute",
};

export default function AgentPipeline() {
  return (
    <div className="relative w-full max-w-md font-mono text-xs">
      <div className="glass rounded-2xl p-5 sm:p-6">
        <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
          <span className="text-mute">agent_pipeline.run()</span>
          <span className="flex items-center gap-1.5 text-signal">
            <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-signal" />
            live
          </span>
        </div>

        <div className="space-y-3">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-3 rounded-lg border border-line/60 bg-panel/60 px-3 py-2.5"
            >
              <span
                className={`h-2 w-2 shrink-0 rounded-full ${statusColor[agent.status]} ${
                  agent.status === "active" ? "animate-pulseDot" : ""
                }`}
              />
              <span className="text-fog">{agent.label}Agent</span>
              <span className="ml-auto text-mute">
                {agent.status === "complete" && "✓ done"}
                {agent.status === "active" && "running…"}
                {agent.status === "queued" && "queued"}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-4 rounded-lg border border-line/60 bg-panel/40 px-3 py-2.5 text-mute"
        >
          <span className="text-amber">→</span> compiling structured report from 4 agents
        </motion.div>
      </div>

      {/* connecting line decoration */}
      <div className="pointer-events-none absolute -left-3 top-1/2 h-24 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-amber/30 to-transparent sm:-left-6" />
    </div>
  );
}
