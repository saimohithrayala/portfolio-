import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-ink"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-mute">
        <span className="flex gap-1">
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-amber" />
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-amber [animation-delay:0.2s]" />
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-amber [animation-delay:0.4s]" />
        </span>
        initializing portfolio
      </div>
    </motion.div>
  );
}
