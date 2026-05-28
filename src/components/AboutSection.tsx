import { motion } from 'framer-motion'
import { img } from '../utils/paths'
import { content } from '../data/content'

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
                  ? 'lead font-serif text-lg md:text-xl text-white/90 leading-relaxed mb-6'
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
