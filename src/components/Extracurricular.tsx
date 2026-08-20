import { motion } from "motion/react";
import { content } from "../content";
import { ArrowUpRight } from "lucide-react";

export function Extracurricular() {
  return (
    <section id="extracurricular" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-content-muted mb-4">Volunteering & Extracurricular</h2>
          <p className="text-content-muted max-w-2xl text-sm">
            A selection of my involvements in volunteering, academic competitions, research initiatives, and public policy observing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.extracurricular.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-surface border border-border-line rounded-2xl p-6 overflow-hidden cursor-pointer hover:border-border-hover transition-colors shadow-sm duration-300"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-content-muted tracking-widest uppercase mb-2 block">
                      {project.period}
                    </span>
                    <h3 className="text-lg font-bold text-content mb-1">
                      {project.title}
                    </h3>
                    <p className="text-content-muted text-sm font-medium">{project.role}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-surface-muted border border-border-line flex items-center justify-center group-hover:bg-content group-hover:text-surface transition-all transform group-hover:rotate-45 shrink-0 ml-4">
                    <ArrowUpRight className="w-4 h-4 text-content-muted group-hover:text-surface transition-colors" />
                  </div>
                </div>
                
                <p className="text-content-muted text-xs leading-relaxed mt-auto pt-4 border-t border-border-line">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
