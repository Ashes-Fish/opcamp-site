interface ErrorScreenProps {
  onRetry?: () => void
}

export default function ErrorScreen({ onRetry }: ErrorScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a1428]">
      <div className="text-center p-8">
        <span className="font-mono text-xs tracking-[0.3em] text-white/30 block mb-4">
          // ERROR
        </span>
        <h2 className="font-serif text-2xl font-medium text-white/80 mb-4">
          页面加载遇到了一点问题
        </h2>
        <p className="font-mono text-sm text-white/40 mb-6">
          Something went wrong. Please try again.
        </p>
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="px-6 py-2 rounded-full border border-cyan-400/40 text-cyan-400 
                       hover:bg-cyan-400/10 transition-colors font-mono text-sm tracking-wider"
          >
            重试 / RETRY
          </button>
        )}
      </div>
    </div>
  )
}
