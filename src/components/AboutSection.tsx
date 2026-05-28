import { motion } from 'framer-motion'
import { content } from '../data/content'

export default function AboutSection() {
  return (
    <section id="about" className="section about-section relative py-24 md:py-32 px-6 md:px-12 lg:px-16">
      {/* Background */}
      <div className="about-photo absolute inset-0">
        <img
          src="/images/bg-final-hero-bubbles.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.15] img-filter"
        />
      </div>

      <div className="section-grid relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 md:gap-16">
        {/* Marker column */}
        <div className="md:sticky md:top-24 self-start">
          <motion.span
            className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/50 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            // ABOUT / 关于
          </motion.span>
        </div>

        {/* Content column */}
        <div className="long-copy">
          {content.aboutParagraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              className={`${i === 0 ? 'lead font-serif text-lg md:text-xl text-white/90 leading-relaxed mb-6' : 'text-base md:text-[1.05rem] text-white/70 leading-[1.9] mb-5'} tracking-wide`}
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
