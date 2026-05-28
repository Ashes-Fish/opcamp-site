import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="hero-section relative min-h-screen overflow-hidden">
      {/* Background photo */}
      <div className="hero-photo absolute inset-0">
        <img
          src="/images/bg-sky.png"
          alt=""
          className="w-full h-full object-cover img-filter"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(4,10,20,0.62), rgba(4,10,20,0.2) 54%, rgba(4,10,20,0.5)), linear-gradient(180deg, rgba(4,10,20,0.18), rgba(4,10,20,0.68))',
          }}
        />
      </div>

      {/* Sky film layer */}
      <div className="sky-film absolute inset-0 z-[1]" />

      {/* Content */}
      <div
        className="hero-copy relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-16"
        style={{ isolation: 'isolate' }}
      >
        <div className="max-w-3xl">
          <motion.span
            className="topline font-mono text-[10px] md:text-xs tracking-[0.3em] text-white/50 block mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            // OPCamp · HOT SPRING HACKATHON
          </motion.span>

          <motion.h1
            className="font-serif text-[clamp(3rem,12vw,6rem)] leading-[0.95] font-light text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            汤泉
            <br />
            OPCamp
          </motion.h1>

          <motion.h2
            className="font-serif text-[clamp(1.5rem,5vw,2.5rem)] font-light text-white/80 mb-6 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            在非标的道场，做有「回旋镖」的产品
          </motion.h2>

          <motion.p
            className="mono-line font-mono text-sm md:text-base text-white/60 mb-8 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            // WORK — LIFE — BALANCE
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="button-row flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#about"
              className="site-button primary inline-block px-7 py-3 rounded-full
                         bg-white/10 backdrop-blur-md border border-white/20
                         text-white/90 font-mono text-xs md:text-sm tracking-[0.12em] uppercase
                         hover:bg-white/15 hover:border-white/30 transition-all
                         shadow-lg"
            >
              ▸ 了解更多
            </a>
            <a
              href="#footer"
              className="site-button inline-block px-7 py-3 rounded-full
                         border border-white/15 text-white/70 font-mono text-xs md:text-sm tracking-[0.12em] uppercase
                         hover:bg-white/5 hover:text-white/90 transition-all"
            >
              立即报名
            </a>
          </motion.div>
        </div>

        {/* Dictionary card */}
        <motion.div
          className="dictionary absolute right-6 md:right-12 lg:right-16 bottom-24 md:bottom-32
                     max-w-[220px] md:max-w-[260px]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div
            className="rounded-xl p-5 backdrop-blur-md"
            style={{
              background: 'rgba(4, 10, 20, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <span className="font-mono text-[9px] tracking-[0.25em] text-white/30 block mb-2">
              词典 / DICTIONARY
            </span>
            <p className="font-serif text-sm text-white/70 leading-relaxed">
              <strong className="text-white/90 font-medium">汤泉（tāng quán）</strong>
              <br />
              名词。既是温泉，也是一群 OPC 在良渚的据点。
              便宜、实惠，还能打德扑。
            </p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-mark absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[9px] tracking-[0.3em] text-white/40">
              SCROLL
            </span>
            <motion.div
              className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative bubbles */}
      <div className="hero-bubble-layer absolute inset-0 z-[12] pointer-events-auto overflow-hidden">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bubble-glass opacity-30"
            style={{
              width: `${60 + i * 40}px`,
              height: `${60 + i * 40}px`,
              left: `${15 + i * 22}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  )
}
