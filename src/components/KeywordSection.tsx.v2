import { motion } from 'framer-motion'
import { img } from '../utils/paths'
import { content } from '../data/content'

export default function KeywordSection() {
  return (
    <section className="keyword-section relative overflow-hidden">
      <div className="parallax-image keyword-photo absolute inset-0">
        <img
          src={img('images/bg-final-soft-bubble.png')}
          alt=""
          className="w-full h-full object-cover opacity-[0.12] img-filter"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-32">
        <div className="section-head mb-12 md:mb-16">
          <motion.p
            className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/50 block mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            N°.02 / KEYWORDS
          </motion.p>
          <motion.h2
            className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-light text-white/85"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            四个关键词
          </motion.h2>
        </div>

        <div className="keyword-row grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
          {content.bubbles.map((bubble, i) => (
            <motion.article
              key={bubble.id}
              className="keyword-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="marker font-mono text-[10px] tracking-[0.2em] text-cyan-300/40 block mb-3">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-lg md:text-xl text-white/85 mb-2">
                {bubble.title}
              </h3>
              <p className="kicker text-sm md:text-base text-cyan-200/60 mb-3 tracking-wide">
                {bubble.eyebrow}
              </p>
              <p className="text-sm md:text-base text-white/55 leading-relaxed tracking-wide">
                {bubble.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
