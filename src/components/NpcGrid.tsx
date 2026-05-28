import { motion } from 'framer-motion'
import { content } from '../data/content'

export default function NpcGrid() {
  return (
    <section className="section relative py-16 md:py-24 px-6 md:px-12 lg:px-16">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/50 block mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          N°.07 / NPCS
        </motion.div>

        <motion.h2
          className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light text-white/85 mb-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          本期 NPC
        </motion.h2>

        <div className="npc-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content.npcs.map((npc, i) => (
            <motion.article
              key={npc.name}
              className="rounded-xl p-5 md:p-6 backdrop-blur-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <span className="marker font-mono text-[9px] tracking-[0.25em] text-cyan-300/40 block mb-3">
                NPC {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-base md:text-lg text-white/85 mb-1">
                {npc.name}
              </h3>
              <p className="kicker text-xs md:text-sm text-cyan-200/60 mb-3 tracking-wide">
                {npc.role}
              </p>
              <p className="text-xs md:text-sm text-white/55 leading-relaxed tracking-wide">
                {npc.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
