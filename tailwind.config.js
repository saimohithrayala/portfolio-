/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0B0E",
        panel: "#13151A",
        line: "#23262E",
        mute: "#8B92A3",
        fog: "#C8CCD6",
        amber: "#FF9F1C",
        amberDim: "#B6711A",
        signal: "#5EEAD4",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #1B1E26 1px, transparent 1px), linear-gradient(to bottom, #1B1E26 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: 0.3, transform: "scale(0.9)" },
          "50%": { opacity: 1, transform: "scale(1.15)" },
        },
        scan: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "0% 100%" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2s ease-in-out infinite",
        scan: "scan 8s linear infinite",
      },
    },
  },
  plugins: [],
};
