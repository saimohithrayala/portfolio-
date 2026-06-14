import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroVideo, { shouldShowIntro } from "./components/IntroVideo";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // null = still deciding | true = show intro | false = skip intro
  const [showIntro, setShowIntro] = useState(null);

  useEffect(() => {
    setShowIntro(shouldShowIntro());
  }, []);

  // Wait until we've checked localStorage before rendering anything
  if (showIntro === null) return null;

  return (
    <>
      {/* Intro video — only rendered when needed */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroVideo key="intro" onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Main site — hidden behind the intro until it completes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        style={{ visibility: showIntro ? "hidden" : "visible" }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Achievements />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
