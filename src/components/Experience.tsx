import { motion } from "motion/react";
import { content } from "../content";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-content-muted mb-4">Professional Journey</h2>
          <p className="text-content-muted max-w-2xl text-sm">
            My professional experience spanning across sales, account management, and data research.
          </p>
        </motion.div>

        <div className="space-y-8">
          {content.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[1fr_2px_1fr] md:gap-8 items-start">
                {/* Left Side (Desktop) / Top Side (Mobile) */}
                <div className="md:text-right md:pt-1 mb-4 md:mb-0">
                  <h3 className="text-sm font-bold text-content mb-1">{exp.role}</h3>
                  <div className="text-content font-medium text-sm mb-2">{exp.company}</div>
                  <div className="flex items-center gap-4 text-[10px] uppercase font-bold text-content-muted md:justify-end">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Divider / Dot */}
                <div className="hidden md:flex flex-col items-center h-full relative">
                  <div className="w-2 h-2 rounded-full bg-content ring-4 ring-surface-muted z-10 relative mt-1.5" />
                  <div className="absolute top-4 bottom-[-32px] w-px bg-border-line" />
                </div>

                {/* Mobile Dot */}
                <div className="absolute left-[3px] top-2 w-2 h-2 rounded-full bg-content ring-4 ring-surface-muted md:hidden" />
                <div className="absolute left-[6px] top-5 bottom-[-32px] w-px bg-border-line md:hidden" />

                {/* Right Side (Details) */}
                <div className="bg-surface-muted border border-border-line rounded-2xl p-5 transition-colors duration-300">
                  <ul className="space-y-3">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="text-content-muted text-sm flex items-start gap-3">
                        <span className="text-content-muted mt-1.5 opacity-60 text-[10px]">◆</span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
