import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-line/80 bg-ink/80 backdrop-blur-lg" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-fog">
          rayala<span className="text-amber">.</span>sai
          <span className="ml-2 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-mute sm:inline">
            // ai engineer
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-mute transition-colors hover:text-amber"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="focus-ring hidden rounded-full border border-amber/40 px-5 py-2 font-mono text-xs uppercase tracking-widest text-amber transition hover:bg-amber hover:text-ink md:inline-flex"
        >
          Let's Talk
        </a>

        <button
          className="focus-ring text-fog md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-line bg-ink px-6 pb-6 shadow-xl md:hidden"
        >
          <div className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-mute transition-colors hover:text-amber"
              >
                {l.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
