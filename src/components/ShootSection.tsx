import { useRef, useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { img } from '../utils/paths'
import { content } from '../data/content'
import type { BubbleContent } from '../types'
import BubbleModal from './BubbleModal'

function makePopSparks(clientX: number, clientY: number) {
  if (typeof clientX !== 'number' || typeof clientY !== 'number') return
  const count = 10
  for (let i = 0; i < count; i += 1) {
    const spark = document.createElement('span')
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.34
    const distance = 42 + Math.random() * 44
    spark.className = 'animate-pop-spark'
    spark.style.cssText = `
      position: fixed;
      width: 9px;
      height: 9px;
      z-index: 9998;
      border-radius: 999px;
      pointer-events: none;
      background: rgba(227, 252, 255, 0.96);
      box-shadow: 0 0 18px rgba(184, 241, 255, 0.84);
      left: ${clientX}px;
      top: ${clientY}px;
      --spark-x: ${Math.cos(angle) * distance}px;
      --spark-y: ${Math.sin(angle) * distance}px;
    `
    document.body.appendChild(spark)
    setTimeout(() => spark.remove(), 700)
  }
}

function getBubbleSize(index: number): number {
  const sizes = [180, 150, 200, 170, 160]
  return sizes[index] ?? 160
}

function getBubblePosition(index: number, total: number) {
  // Arrange in a circle-like pattern
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2
  const radius = 28 + (index % 3) * 2
  return {
    x: `calc(50% + ${Math.cos(angle) * radius}%)`,
    y: `calc(50% + ${Math.sin(angle) * radius * 0.7}%)`,
  }
}

export default function ShootSection() {
  const [activeBubble, setActiveBubble] = useState<BubbleContent | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 })
  const arenaRef = useRef<HTMLDivElement>(null)
  const hoverBubbleRef = useRef<HTMLElement | null>(null)

  const handleBubbleClick = useCallback(
    (bubble: BubbleContent, index: number, e: React.MouseEvent | React.TouchEvent) => {
      const point = 'touches' in e ? e.changedTouches[0] : e
      makePopSparks(point.clientX, point.clientY)
      setActiveBubble(bubble)
      setActiveIndex(index)
    },
    []
  )

  // Custom cursor for desktop
  const isDesktop =
    typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

  const handlePointerEnter = useCallback((e: React.PointerEvent) => {
    if (!isDesktop) return
    const target = e.currentTarget as HTMLElement
    hoverBubbleRef.current = target
    setCursorVisible(true)
    setCursorPos({ x: e.clientX, y: e.clientY })
  }, [isDesktop])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDesktop) return
    setCursorPos({ x: e.clientX, y: e.clientY })
  }, [isDesktop])

  const handlePointerLeave = useCallback(() => {
    if (!isDesktop) return
    hoverBubbleRef.current = null
    setCursorVisible(false)
  }, [isDesktop])

  useEffect(() => {
    if (!isDesktop) return
    const arena = arenaRef.current
    if (!arena) return

    const handleGlobalMove = (e: PointerEvent) => {
      if (!hoverBubbleRef.current) return
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('pointermove', handleGlobalMove)
    return () => document.removeEventListener('pointermove', handleGlobalMove)
  }, [isDesktop])

  return (
    <section className="shoot-section relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="shoot-photo absolute inset-0">
        <img
          src={img('images/bg-bubble-gun-review.png')}
          alt=""
          className="w-full h-full object-cover opacity-[0.18] img-filter"
        />
      </div>

      {/* Glow + fade layers */}
      <div className="absolute inset-0 section-glow" />
      <div className="absolute inset-0 section-fade" />

      <div className="relative z-4 max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section head */}
        <motion.div
          className="section-head mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/50 block mb-2">
            N°.03 / SHOOTING GALLERY
          </span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-white/85">
            剥离泡沫，泡进生活。
          </h2>
        </motion.div>

        <motion.p
          className="section-note text-sm md:text-base text-white/60 max-w-2xl mb-10 leading-relaxed tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          点击泡泡，打碎泡沫，打开每个关键词的细节。
        </motion.p>
      </div>

      {/* Bubble Arena */}
      <div
        ref={arenaRef}
        className="bubble-arena relative z-4 w-full h-[min(520px,78vh)] md:h-[500px] max-w-5xl mx-auto"
      >
        {/* Labels */}
        <span
          className="absolute z-2 font-serif text-[clamp(1.25rem,2.8vw,2rem)] tracking-[0.08em]"
          style={{
            left: 'clamp(16px, 4vw, 56px)',
            bottom: 'clamp(18px, 4vw, 48px)',
            color: 'rgba(239, 253, 255, 0.86)',
            textShadow: '0 10px 28px rgba(0, 0, 0, 0.46)',
          }}
        >
          击碎泡泡
        </span>
        <span
          className="absolute z-2 inline-block border border-cyan-200/30 rounded-full px-3 py-[6px]
                     font-mono text-[10px] tracking-[0.12em] uppercase backdrop-blur-md"
          style={{
            left: 'clamp(16px, 4vw, 56px)',
            bottom: 'clamp(54px, 7vw, 92px)',
            color: 'rgba(232, 250, 255, 0.78)',
            background: 'rgba(5, 16, 28, 0.34)',
          }}
        >
          查看更多细节
        </span>

        {/* Bubbles */}
        {content.bubbles.map((bubble, i) => {
          const pos = getBubblePosition(i, content.bubbles.length)
          const size = getBubbleSize(i)

          return (
            <motion.div
              key={bubble.id}
              className="absolute"
              style={{
                left: pos.x,
                top: pos.y,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 14,
                delay: i * 0.15,
              }}
              // Continuous floating via CSS animation
            >
              <motion.button
                type="button"
                className="float-bubble bubble-glass rounded-full flex items-center justify-center
                           text-center cursor-pointer select-none"
                style={{
                  width: size,
                  height: size,
                  animation: `opcampBubbleFloat ${3 + i * 0.5}s ease-in-out ${i * 0.4}s infinite`,
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={(e) => handleBubbleClick(bubble, i, e)}
                onPointerEnter={handlePointerEnter}
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                aria-label={`查看 ${bubble.title} 详情`}
              >
                <span
                  className="font-serif text-lg md:text-xl text-white/90 font-light"
                  style={{
                    textShadow:
                      '0 1px 10px rgba(255,255,255,0.36), 0 8px 22px rgba(4,18,30,0.32)',
                  }}
                >
                  {bubble.title}
                </span>
              </motion.button>
            </motion.div>
          )
        })}

        {/* Bubble gun icon (desktop only - follows cursor) */}
        {isDesktop && (
          <div
            className={`bubble-cursor ${cursorVisible ? 'is-visible' : ''}`}
            style={{
              transform: `translate3d(${cursorPos.x + 18}px, ${cursorPos.y + 18}px, 0) rotate(-4deg) scale(1)`,
            }}
            aria-hidden="true"
          >
            <img
              src={img('images/bubble-pop-gun-icon.png')}
              alt=""
              className="block w-[136px] h-auto"
            />
            <span
              className="cursor-primary absolute left-[38px] whitespace-nowrap rounded-full px-3 py-[7px]
                         font-serif text-sm tracking-[0.08em] backdrop-blur-md"
              style={{
                bottom: -2,
                background: 'rgba(238, 252, 255, 0.9)',
                color: '#102636',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              }}
            >
              击碎泡泡
            </span>
            <span
              className="cursor-secondary absolute left-[38px] whitespace-nowrap rounded-full px-[10px] py-[5px]
                         font-mono text-[10px] tracking-[0.1em] uppercase backdrop-blur-md"
              style={{
                bottom: -30,
                background: 'rgba(8, 21, 34, 0.62)',
                color: 'rgba(233, 250, 255, 0.84)',
              }}
            >
              查看更多细节
            </span>
          </div>
        )}
      </div>

      {/* Bubble Modal */}
      <BubbleModal
        bubble={activeBubble}
        index={activeIndex}
        onClose={() => setActiveBubble(null)}
      />
    </section>
  )
}
