import { motion } from 'framer-motion'
import { img } from '../utils/paths'
import { content } from '../data/content'

export default function PhotoBreak() {
  return (
    <section className="photo-break relative min-h-[78vh] flex items-end py-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background image */}
      <div className="break-photo absolute inset-0">
        <img
          src={img('images/bg-beach-bubbles.png')}
          alt=""
          className="w-full h-full object-cover img-filter opacity-40 md:opacity-60"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(4,10,20,0.2) 0%, rgba(4,10,20,0.6) 40%, rgba(4,10,20,0.88) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="quiet-copy-wrap max-w-2xl">
          <motion.p
            className="quiet-manifesto font-serif text-[clamp(1.2rem,2.8vw,1.8rem)] text-white/80 leading-[1.7] tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            {content.quietManifesto}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
