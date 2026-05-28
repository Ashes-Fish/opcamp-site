import { motion } from 'framer-motion'
import { img } from '../utils/paths'

interface GateScreenProps {
  onEnter: () => void
}

export default function GateScreen({ onEnter }: GateScreenProps) {
  return (
    <motion.div
      className="gate-screen fixed inset-0 z-40 flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{
        background: 'radial-gradient(ellipse at center, rgba(13, 34, 51, 0.8) 0%, rgba(4, 13, 24, 0.96) 100%)',
      }}
    >
      {/* Background bubbles */}
      <div
        className="gate-bg-bubbles absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${img('images/bg-city-bubbles.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(1.1) contrast(1.05) brightness(0.92)',
        }}
      />

      {/* Sky gradient overlay */}
      <div
        className="gate-sky absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(224, 250, 255, 0.18), transparent 30%), linear-gradient(180deg, rgba(13, 34, 51, 0.14), rgba(4, 13, 24, 0.84))',
        }}
      />

      {/* Bubble Wand */}
      <button
        type="button"
        className="relative z-10 cursor-pointer focus:outline-none"
        onClick={onEnter}
        aria-label="轻触开始"
        style={{
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <div className="relative w-[clamp(190px,24vw,280px)] h-[clamp(170px,21vw,246px)] animate-wand-float">
          {/* Wand decorative ring */}
          <div
            className="wand-ring"
            style={{
              width: 'clamp(210px, 28vw, 340px)',
              height: 'clamp(82px, 11vw, 128px)',
              left: '46%',
              top: '16%',
              transform: 'translateX(-50%) rotate(-15deg)',
              position: 'absolute',
            }}
          >
            {/* Ring decoration dots (replacing ::before and ::after) */}
            <div
              className="wand-dot"
              style={{ width: 18, height: 18, right: '13%', top: -12 }}
            />
            <div
              className="wand-dot"
              style={{ width: 12, height: 12, right: '2%', top: 18 }}
            />
          </div>

          {/* Wand stick */}
          <div
            className="wand-stick"
            style={{
              width: 'clamp(160px, 24vw, 280px)',
              height: 'clamp(74px, 9vw, 112px)',
              left: '52%',
              top: '27%',
              transform: 'translateX(-50%) rotate(-16deg)',
              opacity: 0.9,
              position: 'absolute',
            }}
          >
            {/* Stick decoration dot (replacing ::before) */}
            <div
              className="wand-dot"
              style={{ width: 10, height: 10, right: '24%', bottom: -6 }}
            />
          </div>

          {/* Wand icon */}
          <img
            src={img('images/bubble-wand-icon.png')}
            alt=""
            className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
            style={{
              filter:
                'saturate(0.82) brightness(1.04) opacity(0.92) drop-shadow(0 24px 48px rgba(1, 10, 20, 0.44)) drop-shadow(0 0 22px rgba(186, 238, 255, 0.24))',
              transformOrigin: '42% 78%',
            }}
          />

          {/* Hint text */}
          <div
            className="absolute left-1/2 -translate-x-1/2 text-center"
            style={{ bottom: 'clamp(-74px, -8vw, -54px)' }}
          >
            <span
              className="inline-block whitespace-nowrap border border-cyan-200/40 rounded-full px-4 py-[7px] 
                         font-mono text-[11px] tracking-[0.12em] uppercase
                         shadow-[0_16px_42px_rgba(0,0,0,0.28),inset_0_1px_rgba(255,255,255,0.2)]
                         backdrop-blur-[16px]"
              style={{
                background: 'rgba(7, 19, 31, 0.52)',
                color: 'rgba(237, 252, 255, 0.9)',
              }}
            >
              轻触开始
            </span>

            <p
              className="font-serif text-[clamp(1.25rem,3vw,1.8rem)] mt-3 whitespace-nowrap
                         tracking-[0.08em]"
              style={{
                color: '#f6fdff',
                textShadow: '0 8px 28px rgba(0,0,0,0.58), 0 0 24px rgba(194,242,255,0.4)',
              }}
            >
              汤泉 OPCamp
            </p>

            <div
              className="mx-auto mt-3 h-px"
              style={{
                width: '46%',
                background: 'linear-gradient(90deg, transparent, rgba(229,250,255,0.78), transparent)',
              }}
            />
          </div>
        </div>
      </button>
    </motion.div>
  )
}
