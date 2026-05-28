import { motion } from 'framer-motion'
import { content } from '../data/content'

export default function RhythmSection() {
  return (
    <section className="section rhythm-section relative py-20 md:py-28 px-6 md:px-12 lg:px-16">
      {/* Background */}
      <div className="rhythm-photo absolute inset-0">
        <img
          src="/images/bg-city-bubbles.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.08]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="section-grid grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 md:gap-16">
          <div className="md:sticky md:top-24 self-start">
            <motion.span
              className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/50 block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              N°.05 / RHYTHM
            </motion.span>
          </div>
          <div>
            <motion.p
              className="section-note text-base md:text-[1.05rem] text-white/70 leading-[1.9] tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              {content.rhythmNote}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
