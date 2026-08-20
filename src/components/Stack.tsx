import { motion } from "motion/react";
import { content } from "../content";
import { Code2, Briefcase, Brain } from "lucide-react";

const icons = [Code2, Briefcase, Brain];

export function Stack() {
  return (
    <section id="stack" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-content-muted mb-4">Technical Arsenal</h2>
          <p className="text-content-muted max-w-2xl text-sm">
            A blend of modern programming languages, business platforms, and core analytical competencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.stack.map((group, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-surface-muted border border-border-line rounded-2xl p-6 hover:border-border-hover transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-surface border border-border-line flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="w-6 h-6 text-content" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-content-muted mb-6">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-xl bg-surface border border-border-line text-xs text-content-muted hover:text-content hover:border-border-hover transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
