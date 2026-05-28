import { motion } from 'framer-motion'
import { content } from '../data/content'

export default function TimelineSection() {
  return (
    <section className="section timeline-section relative py-24 md:py-32 px-6 md:px-12 lg:px-16">
      {/* Background */}
      <div className="timeline-photo absolute inset-0">
        <img
          src="/images/bg-final-soft-bubble.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.1]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section head */}
        <div className="section-grid grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 md:gap-16 mb-12">
          <div className="md:sticky md:top-24 self-start">
            <motion.span
              className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/50 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              N°.04 / SCHEDULE
            </motion.span>
          </div>
          <div>
            <motion.p
              className="section-note text-sm md:text-base text-white/60 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              这次两天一夜，找到自己的水位。不熬夜。
            </motion.p>
          </div>
        </div>

        {/* Timeline groups */}
        <div className="timeline-wrap grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
          {content.timeline.map((day, di) => (
            <motion.div
              key={di}
              className="timeline-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: di * 0.15 }}
            >
              <h3 className="font-serif text-lg md:text-xl text-white/85 mb-6 tracking-wide">
                {day.title}
              </h3>

              <div className="space-y-0">
                {day.rows.map((row, ri) => (
                  <div
                    key={ri}
                    className="flex gap-4 py-3 border-b border-white/5 last:border-b-0"
                  >
                    <span className="font-mono text-xs text-cyan-300/50 whitespace-nowrap min-w-[4em] pt-0.5">
                      {row[0]}
                    </span>
                    <p className="text-sm text-white/65 leading-relaxed tracking-wide">
                      {row[1]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
