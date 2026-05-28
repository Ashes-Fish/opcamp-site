import { motion } from 'framer-motion'
import { content } from '../data/content'

export default function InfoTable() {
  return (
    <section className="section relative py-16 md:py-24 px-6 md:px-12 lg:px-16">
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/50 block mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          N°.06 / INFO
        </motion.div>

        <div className="info-table space-y-0 max-w-3xl">
          {content.info.map((row, i) => (
            <motion.div
              key={i}
              className="flex flex-col sm:flex-row gap-2 sm:gap-6 py-4 border-b border-white/5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <span className="font-mono text-xs text-cyan-300/50 whitespace-nowrap min-w-[6em] shrink-0">
                {row.label}
              </span>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                {row.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
