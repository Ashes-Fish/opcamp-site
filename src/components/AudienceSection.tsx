import { motion } from 'framer-motion'
import { img } from '../utils/paths'
import { content } from '../data/content'

export default function AudienceSection() {
  return (
    <section className="audience-section relative py-20 md:py-28 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="audience-photo absolute inset-0">
        <img
          src={img('images/bg-city-bubbles.png')}
          alt=""
          className="w-full h-full object-cover opacity-[0.06]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          className="font-serif text-[clamp(1.8rem,4.5vw,3rem)] font-light text-white/85 leading-[1.2] mb-10 max-w-[980px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          {content.audience.title}
        </motion.h2>

        <div className="space-y-6">
          {content.audience.rows.map((row, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p
                className="text-[clamp(1.08rem,2.8vw,1.4rem)] font-serif text-white/70 leading-[1.7] tracking-wide"
                style={{
                  paddingLeft: 'clamp(18px, 3vw, 34px)',
                  borderLeft: '1px solid rgba(226, 247, 255, 0.24)',
                }}
              >
                {row}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
