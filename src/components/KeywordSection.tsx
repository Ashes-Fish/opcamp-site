import { motion } from 'framer-motion'
import { img } from '../utils/paths'
import { content } from '../data/content'

export default function KeywordSection() {
  return (
    <section className="keyword-section relative py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="parallax-image keyword-photo absolute inset-0">
        <img
          src={img('images/bg-final-soft-bubble.png')}
          alt=""
          className="w-full h-full object-cover opacity-[0.12] img-filter"
        />
      </div>

      {/* Glow layer — ambient radial gradient */}
      <div className="absolute inset-0 section-glow" />
      {/* Black overlay — keeps text readable */}
      <div className="absolute inset-0 section-fade" />

      {/* Decorative floating bubbles */}
      <div className="hero-bubble-layer absolute inset-0 z-[12] pointer-events-auto overflow-hidden">
        {[
          { size: 60, left: '15%', top: '30%', y: -2 },
          { size: 100, left: '37%', top: '70%', y: -6 },
          { size: 140, left: '59%', top: '30%', y: -10 },
          { size: 180, left: '81%', top: '70%', y: -14 },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full bubble-glass opacity-30"
            style={{
              width: b.size,
              height: b.size,
              left: b.left,
              top: b.top,
              transform: `translateY(${b.y}px)`,
            }}
          />
        ))}
      </div>

      {/* Section head */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="section-head mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/50 block mb-3">
            {content.keywordStatement.marker}
          </p>
          <h2 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-light text-white/85">
            {content.keywordStatement.title}
          </h2>
        </motion.div>

        {/* Keyword cards */}
        <div className="keyword-row grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
          {content.bubbles.map((bubble, i) => (
            <motion.article
              key={bubble.id}
              className="keyword-card rounded-xl p-6 md:p-7 backdrop-blur-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
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
