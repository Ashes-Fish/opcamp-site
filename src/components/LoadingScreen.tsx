import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a1428]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-center relative z-10">
        <span className="font-mono text-xs tracking-[0.3em] text-white/30 block mb-6">
          // LOADING
        </span>
        <div className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-3 h-3 rounded-full bg-cyan-400/40"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
