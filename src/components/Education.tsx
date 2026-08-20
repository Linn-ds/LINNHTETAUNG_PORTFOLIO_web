import { motion } from "motion/react";
import { content } from "../content";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="p-2 rounded-xl bg-surface-muted border border-border-line">
                <GraduationCap className="w-4 h-4 text-content-muted" />
              </div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-content-muted">Education</h2>
            </motion.div>

            <div className="space-y-6">
              {content.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-surface border border-border-line rounded-2xl p-5 hover:border-border-hover transition-colors shadow-sm duration-300"
                >
                  <span className="text-[10px] text-content-muted font-bold tracking-widest uppercase block mb-2">{edu.period}</span>
                  <h3 className="text-sm font-bold text-content mb-1">{edu.degree}</h3>
                  <p className="text-content text-xs mb-3 font-medium">{edu.university}, {edu.location}</p>
                  <p className="text-content-muted text-xs leading-relaxed">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="p-2 rounded-xl bg-surface-muted border border-border-line">
                <Award className="w-4 h-4 text-content-muted" />
              </div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-content-muted">Certifications</h2>
            </motion.div>

            <div className="space-y-4">
              {content.certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-4 bg-surface border border-border-line rounded-2xl p-5 hover:border-border-hover transition-colors shadow-sm duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-content mt-1.5 shrink-0" />
                  <p className="text-content-muted text-xs leading-relaxed">{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
