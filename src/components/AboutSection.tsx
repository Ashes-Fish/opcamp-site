import { motion } from 'framer-motion'
import { img } from '../utils/paths'
import { content } from '../data/content'

const bubbles = [
  { size: 60, left: '15%', top: '30%' },
  { size: 100, left: '37%', top: '70%' },
  { size: 140, left: '59%', top: '30%' },
  { size: 180, left: '81%', top: '70%' },
]

export default function AboutSection() {
  return (
    <section className="section about-section relative py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden" id="about">
      {/* Background with parallax */}
      <div className="parallax-image about-photo absolute inset-0">
        <img
          src={img('images/bg-final-soft-bubble.png')}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Glow layer — matches other sections */}
      <div className="absolute inset-0 section-glow" />
      {/* Black semi-transparent overlay — matches other sections */}
      <div className="absolute inset-0 section-fade" />

      {/* Decorative floating bubbles */}
      <div className="hero-bubble-layer absolute inset-0 z-[12] pointer-events-auto overflow-hidden">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full bubble-glass opacity-30"
            style={{
              width: b.size,
              height: b.size,
              left: b.left,
              top: b.top,
              transform: `translateY(${-(2 + i * 4)}px)`,
            }}
          />
        ))}
      </div>

      <div className="section-grid relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 md:gap-16">
        {/* Left column: marker + heading */}
        <div className="md:sticky md:top-24 self-start">
          <motion.p
            className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/50 mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            N°.01
          </motion.p>
          <motion.h2
            className="font-serif text-[clamp(1.8rem,4.5vw,3rem)] font-light text-white/85 leading-[1.2]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            关于汤泉 OPCamp
          </motion.h2>
        </div>

        {/* Right column: long copy */}
        <div className="long-copy">
          {content.aboutParagraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              className={
                i === 0
                  ? 'lead font-serif text-2xl md:text-3xl text-white/90 leading-relaxed mb-6'
                  : 'text-base md:text-[1.05rem] text-white/70 leading-[1.9] mb-5'
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
