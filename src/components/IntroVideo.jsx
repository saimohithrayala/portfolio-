import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "portfolio_intro_played";

export default function IntroVideo({ onComplete }) {
  const [phase, setPhase]     = useState("playing"); // playing | fading | done
  const [muted, setMuted]     = useState(true);       // shown to user
  const videoRef  = useRef(null);
  const calledRef = useRef(false);

  /* ── finish: fade to black → hand off to site ── */
  const finish = useCallback(() => {
    if (calledRef.current) return;
    calledRef.current = true;
    try { localStorage.setItem(STORAGE_KEY, "true"); } catch (_) {}
    setPhase("fading");
    setTimeout(() => { setPhase("done"); onComplete(); }, 900);
  }, [onComplete]);

  /* ── start video as soon as data is available ── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Always start muted — the ONLY way to guarantee autoplay in every browser
    video.muted  = true;
    video.volume = 1;

    const play = () => {
      video.play().catch(() => finish()); // if even muted autoplay fails → skip
    };

    if (video.readyState >= 2) {
      play();
    } else {
      video.addEventListener("loadeddata", play, { once: true });
    }

    video.addEventListener("ended", finish, { once: true });

    return () => {
      video.removeEventListener("loadeddata", play);
      video.removeEventListener("ended", finish);
    };
  }, [finish]);

  /* ── toggle mute via button ── */
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  if (phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* ── Video ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/video/intro.mp4"
        muted
        playsInline
        preload="auto"
      />

      {/* ── Fade-to-black overlay ── */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "fading" ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
      />

      {/* ── Top-right controls: Mute toggle + Skip ── */}
      <AnimatePresence>
        {phase === "playing" && (
          <motion.div
            key="controls"
            className="absolute top-6 right-6 z-10 flex items-center gap-3 sm:top-8 sm:right-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            {/* Mute / Unmute button */}
            <button
              onClick={toggleMute}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-white/80 backdrop-blur-md transition-all hover:border-white/60 hover:bg-black/60 hover:text-white"
              aria-label={muted ? "Unmute video" : "Mute video"}
            >
              {muted ? (
                /* Speaker off */
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <line x1="23" y1="9" x2="17" y2="15"/>
                  <line x1="17" y1="9" x2="23" y2="15"/>
                </svg>
              ) : (
                /* Speaker on */
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                </svg>
              )}
              {muted ? "Unmute" : "Mute"}
            </button>

            {/* Skip Intro button */}
            <button
              onClick={finish}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-white/80 backdrop-blur-md transition-all hover:border-white/60 hover:bg-black/60 hover:text-white"
              aria-label="Skip intro video"
            >
              Skip Intro
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 4l8 8-8 8"/>
                <path d="M13 4l8 8-8 8"/>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function shouldShowIntro() {
  try { return localStorage.getItem(STORAGE_KEY) !== "true"; } catch (_) { return true; }
}
