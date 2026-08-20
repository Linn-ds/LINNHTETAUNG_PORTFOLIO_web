import { motion } from "motion/react";
import { Mail, MapPin, Phone, Github, Linkedin, ArrowRight } from "lucide-react";
import { content } from "../content";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-content-muted font-mono text-sm tracking-wider uppercase mb-4">
            {content.hero.tagline}
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-content leading-[1.1]">
            {content.hero.name}
          </h1>
          
          <p className="text-content-muted leading-relaxed text-lg max-w-sm">
            {content.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-content text-surface text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex gap-4 items-center pl-2">
              <a href={content.hero.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-surface-muted border border-border-line hover:border-border-hover transition-colors text-content">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={content.hero.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-surface-muted border border-border-line hover:border-border-hover transition-colors text-content">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative bg-surface border border-border-line rounded-2xl p-8 shadow-sm transition-colors duration-300">
            <h3 className="text-xs font-bold uppercase tracking-widest text-content-muted mb-6">Quick Details</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-content-muted">
                <div className="p-3 rounded-2xl bg-surface-muted border border-border-line">
                  <Mail className="w-5 h-5 text-content" />
                </div>
                <div>
                  <p className="text-sm text-content-muted">Email</p>
                  <p className="font-medium text-content">{content.hero.email}</p>
                </div>
              </li>
              <li className="flex items-center gap-4 text-content-muted">
                <div className="p-3 rounded-2xl bg-surface-muted border border-border-line">
                  <Phone className="w-5 h-5 text-content" />
                </div>
                <div>
                  <p className="text-sm text-content-muted">Phone</p>
                  <p className="font-medium text-content">{content.hero.phone}</p>
                </div>
              </li>
              <li className="flex items-center gap-4 text-content-muted">
                <div className="p-3 rounded-2xl bg-surface-muted border border-border-line">
                  <MapPin className="w-5 h-5 text-content" />
                </div>
                <div>
                  <p className="text-sm text-content-muted">Location</p>
                  <p className="font-medium text-content">{content.hero.location}</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
