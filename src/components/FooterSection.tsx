import { motion } from 'framer-motion'
import { img } from '../utils/paths'
import { content } from '../data/content'

export default function FooterSection() {
  return (
    <section id="footer" className="footer-section relative py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background */}
      <img
        src={img('images/bg-giant-bubble.png')}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.15] img-filter"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(4,10,20,0.62), rgba(4,10,20,0.2) 54%, rgba(4,10,20,0.5)), linear-gradient(180deg, rgba(4,10,20,0.4), rgba(4,10,20,0.88))',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title & Body */}
        <div className="mb-14">
          <motion.h2
            className="font-serif text-[clamp(1.8rem,4.5vw,3rem)] font-light text-white/85 leading-[1.2] mb-6 max-w-[980px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            {content.footer.title}
          </motion.h2>
          <motion.p
            className="font-serif text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.15 }}
          >
            {content.footer.body}
          </motion.p>
        </div>

        {/* Join grid */}
        <div className="join-grid grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {content.footer.join.map((card, i) => (
            <motion.article
              key={i}
              className="rounded-xl p-6 md:p-7 backdrop-blur-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="font-serif text-base md:text-lg text-white/85 mb-3 tracking-wide">
                {card.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed tracking-wide">
                {card.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="button-row centered flex flex-wrap gap-4 justify-center mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
        >
          <a
            href="#"
            className="site-button primary inline-block px-8 py-3 rounded-full
                       font-mono text-xs md:text-sm tracking-[0.12em] uppercase
                       transition-all shadow-lg"
            style={{
              background: 'rgba(190, 222, 231, 0.78)',
              color: '#071321',
              boxShadow: '0 16px 48px rgba(0,0,0,0.28)',
            }}
          >
            {content.footer.buttons[0]}
          </a>
          <a
            href="#"
            className="site-button inline-block px-8 py-3 rounded-full
                       border border-white/20 text-white/70 font-mono text-xs md:text-sm tracking-[0.12em] uppercase
                       hover:bg-white/5 hover:text-white/90 transition-all"
          >
            {content.footer.buttons[1]}
          </a>
        </motion.div>

        {/* Partners */}
        <motion.p
          className="partners text-center text-xs md:text-sm text-white/30 font-mono tracking-[0.08em]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {content.footer.partners}
        </motion.p>

        {/* Copyright */}
        <motion.p
          className="copyright text-center text-[10px] text-white/15 font-mono tracking-[0.1em] mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &copy; 2026 OPCamp
        </motion.p>
      </div>
    </section>
  )
}
