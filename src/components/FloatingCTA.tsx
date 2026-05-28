import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#footer"
          className="floating-cta fixed z-30 flex items-center justify-center rounded-full
                     font-mono text-xs tracking-[0.12em] uppercase no-underline"
          style={{
            width: 'clamp(56px, 7vw, 72px)',
            height: 'clamp(56px, 7vw, 72px)',
            right: 'clamp(16px, 2vw, 28px)',
            bottom: 'calc(clamp(16px, 2vw, 28px) + env(safe-area-inset-bottom, 0px))',
            background: 'rgba(190, 222, 231, 0.78)',
            color: '#071321',
            boxShadow: '0 16px 48px rgba(0,0,0,0.28)',
          }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          报名
        </motion.a>
      )}
    </AnimatePresence>
  )
}
