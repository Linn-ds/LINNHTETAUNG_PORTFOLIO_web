import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Hero } from "./components/Hero";
import { Stack } from "./components/Stack";
import { Experience } from "./components/Experience";
import { Extracurricular } from "./components/Extracurricular";
import { Posts } from "./components/Posts";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <main className="min-h-screen font-sans relative">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 p-6 flex justify-center pointer-events-none">
        <div className="bg-surface-muted/80 border border-border-line backdrop-blur-xl rounded-full px-6 py-3 flex items-center gap-4 md:gap-6 pointer-events-auto shadow-sm transition-colors duration-300 max-w-full overflow-x-auto no-scrollbar">
          {["Hero", "Stack", "Experience", "Extracurricular", "Education", "Posts", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-content-muted hover:text-content transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="w-px h-4 bg-border-line mx-2"></div>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="text-content-muted hover:text-content transition-colors flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Sections */}
      <div className="relative z-10 flex flex-col gap-12 md:gap-24 transition-colors duration-300">
        <Hero />
        <Stack />
        <Experience />
        <Extracurricular />
        <Education />
        <Posts />
        <Contact />
      </div>
    </main>
  );
}
