import { useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { BubbleContent } from '../types'

interface BubbleModalProps {
  bubble: BubbleContent | null
  index: number
  onClose: () => void
}

export default function BubbleModal({ bubble, index, onClose }: BubbleModalProps) {
  const closeRef = useRef(onClose)
  closeRef.current = onClose

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeRef.current()
    }
  }, [])

  useEffect(() => {
    if (bubble) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [bubble, handleKeyDown])

  return (
    <AnimatePresence>
      {bubble && (
        <motion.div
          className="bubble-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            className="modal-underlay"
            aria-label="关闭详情"
            onClick={onClose}
          />

          <motion.article
            className="modal-card relative z-10 w-[min(580px,88vw)] max-h-[80vh] overflow-y-auto
                       rounded-2xl p-8 md:p-10 mx-4"
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              background: 'rgba(6, 18, 30, 0.92)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(221, 250, 255, 0.15)',
              boxShadow: '0 32px 80px rgba(0, 0, 0, 0.5), inset 0 1px rgba(255,255,255,0.06)',
            }}
          >
            <button
              type="button"
              className="close-button absolute top-4 right-4 w-8 h-8 flex items-center justify-center
                         rounded-full bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/90
                         transition-colors font-mono text-lg leading-none"
              aria-label="关闭详情"
              onClick={onClose}
            >
              ×
            </button>

            <span
              className="marker font-mono text-[10px] tracking-[0.25em] text-cyan-300/60 block mb-4"
            >
              BUBBLE {String(index + 1).padStart(2, '0')}
            </span>

            <h2 className="font-serif text-2xl md:text-3xl font-medium text-white/95 mb-3">
              {bubble.title}
            </h2>

            <p className="kicker text-sm md:text-base text-cyan-200/70 mb-5 font-serif tracking-wide">
              {bubble.eyebrow}
            </p>

            <p className="text-sm md:text-base text-white/70 leading-[1.9] tracking-wide">
              {bubble.body}
            </p>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
