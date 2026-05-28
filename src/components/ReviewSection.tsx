import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { img } from '../utils/paths'
import { content } from '../data/content'
import type { ReviewItem } from '../types'

const tabs = [
  { id: 'projects', label: '项目作品' },
  { id: 'members', label: '参与成员' },
] as const

type TabId = (typeof tabs)[number]['id']

export default function ReviewSection() {
  const [activeTab, setActiveTab] = useState<TabId>('projects')

  const items: ReviewItem[] =
    activeTab === 'projects' ? content.reviews.projects : content.reviews.members

  return (
    <section className="section review-section relative py-24 md:py-32 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="review-photo absolute inset-0">
        <img
          src={img('images/bg-bubble-gun-review.png')}
          alt=""
          className="w-full h-full object-cover opacity-[0.1] img-filter"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section head */}
        <motion.div
          className="section-head mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <span className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/50 block mb-2">
            N°.08 / REVIEW
          </span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light text-white/85">
            过去发生了什么
          </h2>
        </motion.div>

        {/* Tab row */}
        <div
          className="tab-row flex gap-1 mb-10 p-1 rounded-xl inline-flex"
          style={{ background: 'rgba(255, 255, 255, 0.04)' }}
          role="tablist"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`px-5 py-2 rounded-lg font-mono text-xs tracking-[0.12em] uppercase transition-all
                ${
                  activeTab === tab.id
                    ? 'bg-white/10 text-white/90 shadow-sm'
                    : 'text-white/40 hover:text-white/70'
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Review strip */}
        <div className="review-strip grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          <AnimatePresence mode="wait">
            {items.map((item, i) => (
              <motion.article
                key={`${activeTab}-${item.title}`}
                className="rounded-xl p-5 md:p-6 backdrop-blur-sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <span className="marker font-mono text-[9px] tracking-[0.25em] text-cyan-300/40 block mb-2">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-sm md:text-base text-white/85 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-white/55 leading-relaxed tracking-wide">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
