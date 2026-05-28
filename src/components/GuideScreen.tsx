import { motion } from 'framer-motion'
import { img } from '../utils/paths'
import { content } from '../data/content'

interface GuideScreenProps {
  onEnter: () => void
}

export default function GuideScreen({ onEnter }: GuideScreenProps) {
  const { onboarding } = content

  return (
    <motion.div
      className="guide-screen fixed inset-0 z-30 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      style={{
        background: 'rgba(4, 10, 20, 0.96)',
        isolation: 'isolate',
      }}
    >
      {/* Background image */}
      <img
        src={img('images/bg-city-bubbles.png')}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.1] img-filter pointer-events-none"
      />

      {/* Glow layer */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(circle at 24% 22%, rgba(206, 243, 255, 0.34), transparent 26%), radial-gradient(circle at 76% 18%, rgba(255, 241, 205, 0.2), transparent 24%), radial-gradient(circle at 52% 82%, rgba(116, 207, 228, 0.22), transparent 34%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Vignette layer */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background:
            'linear-gradient(180deg, rgba(3, 11, 21, 0.08), rgba(3, 11, 21, 0.72)), radial-gradient(circle at center, transparent 0 54%, rgba(2, 7, 14, 0.52) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="guide-panel relative z-[4] flex flex-col items-center text-center px-6 max-w-lg mx-auto"
        style={{ isolation: 'isolate' }}
      >
        <motion.span
          className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/50 block mb-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {onboarding.marker}
        </motion.span>

        <motion.h1
          className="font-serif text-[clamp(2rem,6vw,3.2rem)] font-light text-white/90 mb-10 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {onboarding.title}
        </motion.h1>

        <div className="space-y-6 mb-10 w-full">
          {onboarding.steps.map(([num, desc], i) => (
            <motion.div
              key={num}
              className="flex items-start gap-5 text-left"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.3 + i * 0.12 }}
            >
              <span
                className="font-mono text-xs text-cyan-300/40 shrink-0 mt-0.5 min-w-[1.5em]"
              >
                {num}
              </span>
              <p className="text-sm md:text-base text-white/65 leading-relaxed tracking-wide">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.button
          type="button"
          className="site-button primary inline-block px-8 py-3 rounded-full
                     font-mono text-xs md:text-sm tracking-[0.12em] uppercase
                     transition-all shadow-lg cursor-pointer"
          style={{
            background: 'rgba(190, 222, 231, 0.78)',
            color: '#071321',
            boxShadow: '0 16px 48px rgba(0,0,0,0.28)',
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.75 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={onEnter}
        >
          {onboarding.button}
        </motion.button>
      </div>
    </motion.div>
  )
}
