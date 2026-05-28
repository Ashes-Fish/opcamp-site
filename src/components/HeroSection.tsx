import { motion } from 'framer-motion'
import { img } from '../utils/paths'

export default function HeroSection() {
  return (
    <section className="hero-section relative min-h-screen overflow-hidden">
      {/* Background photo */}
      <div className="hero-photo absolute inset-0">
        <img
          src={img('images/bg-sky.png')}
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
            // V02    2026 · 5.30 - 5.31    杭州 · 良渚汤泉
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
            剥离泡沫，泡进生活。
          </motion.h2>

          <motion.p
            className="font-serif text-base md:text-lg text-white/70 max-w-xl mb-6 leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            在松弛的空间里做有意思的创造。良渚汤泉 · 48 小时 · 关于空间、AI 产品与生活方式的实验。
          </motion.p>

          <motion.p
            className="mono-line font-mono text-sm md:text-base text-white/60 mb-8 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            A GATHERING OF OPCs | 48 HOURS OF NOT BEING NPC
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
              报名下一期
            </a>
            <a
              href="#footer"
              className="site-button inline-block px-7 py-3 rounded-full
                         border border-white/15 text-white/70 font-mono text-xs md:text-sm tracking-[0.12em] uppercase
                         hover:bg-white/5 hover:text-white/90 transition-all"
            >
              看看上期都发生了什么
            </a>
          </motion.div>
        </div>

        {/* Dictionary card */}
          <motion.div
            className="dictionary absolute right-6 md:right-12 lg:right-16 bottom-24 md:bottom-32
                       max-w-[220px] md:max-w-[280px]"
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
              <span className="font-mono text-[11px] tracking-[0.08em] text-white/40 block mb-3">
                泡 / pao /
              </span>
              <p className="font-serif text-sm text-white/70 leading-relaxed mb-2">
                <b className="text-white/80 font-medium">v.</b> to soak; to immerse oneself fully. 把自己交给当下
              </p>
              <p className="font-serif text-sm text-white/70 leading-relaxed">
                <b className="text-white/80 font-medium">n.</b> a bubble; something fragile, fleeting. 易碎，转瞬即逝
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
