import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 lg:px-8">
        <p className="font-display text-lg font-semibold tracking-wide text-fog">
          Rayala Sai Mohith
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/saimohithrayala"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="focus-ring text-mute transition hover:text-amber"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:saimohithrayala27@gmail.com"
            aria-label="Email"
            className="focus-ring text-mute transition hover:text-amber"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
