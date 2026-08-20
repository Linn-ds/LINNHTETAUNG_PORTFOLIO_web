import { motion } from "motion/react";
import { Send } from "lucide-react";
import { content } from "../content";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface-muted border border-border-line rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm transition-colors duration-300"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-content-muted mb-4">Let's Connect</h2>
          <p className="text-content-muted text-sm mb-12 max-w-xl mx-auto">
            Whether you're from a university admission team, a recruiter, or just want to say hi, my inbox is always open.
          </p>

          <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-surface border border-border-line rounded-xl px-4 py-3 text-sm text-content placeholder:text-content-muted focus:outline-none focus:border-border-hover transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-surface border border-border-line rounded-xl px-4 py-3 text-sm text-content placeholder:text-content-muted focus:outline-none focus:border-border-hover transition-colors"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-surface border border-border-line rounded-xl px-4 py-3 text-sm text-content placeholder:text-content-muted focus:outline-none focus:border-border-hover transition-colors resize-none"
            />
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-content text-surface text-sm font-semibold rounded-xl px-4 py-3 hover:opacity-90 transition-opacity group"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-border-line flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-content-muted text-sm">
              © {new Date().getFullYear()} {content.hero.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm font-medium">
              <a href={`mailto:${content.hero.email}`} className="text-content-muted hover:text-content transition-colors">
                Email
              </a>
              <a href={content.hero.linkedin} target="_blank" rel="noreferrer" className="text-content-muted hover:text-content transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
