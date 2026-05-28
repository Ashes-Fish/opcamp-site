import { motion } from 'framer-motion'
import { content } from '../data/content'

export default function KeywordSection() {
  return (
    <section className="keyword-section relative py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="keyword-photo absolute inset-0">
        <img
          src="/images/bg-canopy-bubbles.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.12] img-filter"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Head */}
        <motion.div
          className="section-head mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/50 block mb-4">
            {content.keywordStatement.marker}
          </span>
          <h2 className="font-serif text-[clamp(3rem,7vw,7.2rem)] leading-[0.98] font-light text-white/90 max-w-[11em]">
            {content.keywordStatement.title}
          </h2>
        </motion.div>

        {/* Keyword cards - hidden, replaced by statement */}
        <div className="keyword-row" aria-hidden="true" style={{ display: 'none' }}>
          {content.bubbles.map((bubble, i) => (
            <div key={bubble.id} className="keyword-card">
              <span className="marker font-mono text-[9px] tracking-[0.25em] text-cyan-300/50 block mb-2">
                BUBBLE {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-lg text-white/80 mb-1">{bubble.title}</h3>
              <p className="kicker text-sm text-cyan-200/60">{bubble.eyebrow}</p>
              <p className="text-sm text-white/50 mt-2">{bubble.body}</p>
            </div>
          ))}
        </div>

        {/* Statement block */}
        <motion.div
          className="opcamp-keyword-statement relative z-6 max-w-[980px] w-[min(980px,82vw)] mt-[clamp(28px,6vw,72px)] mx-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div
            className="pl-[clamp(18px,3vw,34px)]"
            style={{ borderLeft: '1px solid rgba(226, 247, 255, 0.36)' }}
          >
            {/* Subtitles */}
            <div
              className="keyword-statement-subtitles flex flex-wrap gap-[12px_clamp(18px,3vw,34px)]"
              style={{
                color: 'rgba(224, 244, 250, 0.9)',
                fontFamily: '"Noto Serif SC", serif',
                fontSize: 'clamp(1.25rem, 2.1vw, 2rem)',
                letterSpacing: '0.04em',
                textShadow: '0 10px 30px rgba(1, 7, 14, 0.62)',
              }}
            >
              {content.keywordStatement.subtitles.map((sub, i) => (
                <span key={i}>·{sub}</span>
              ))}
            </div>

            {/* Body */}
            <p
              className="keyword-statement-body max-w-[54em] mt-[clamp(24px,4vw,42px)]"
              style={{
                color: 'rgba(237, 246, 249, 0.82)',
                fontSize: 'clamp(1rem, 1.25vw, 1.22rem)',
                lineHeight: '2',
              }}
            >
              {content.keywordStatement.body}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
