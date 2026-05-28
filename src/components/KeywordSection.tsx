import { motion } from 'framer-motion'
import { img } from '../utils/paths'

export default function KeywordSection() {
  return (
    <section className="keyword-section relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="parallax-image keyword-photo absolute inset-0">
        <img
          src={img('images/bg-final-soft-bubble.png')}
          alt=""
          className="w-full h-full object-cover opacity-[0.12] img-filter"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section head — left aligned */}
        <div className="section-head mb-16 md:mb-24">
          <motion.p
            className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/50 block mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            N°.02 / KEYWORDS
          </motion.p>
          <motion.h2
            className="font-serif text-[clamp(2.5rem,6vw,4rem)] font-light text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            四个关键词
          </motion.h2>
        </div>

        {/* Asymmetric card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-16 gap-x-8 md:gap-x-12">
          {/* 01 — 关于良渚 */}
          <motion.article
            className="keyword-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0 }}
          >
            <span className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/30 block mb-5">
              01
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white/90 mb-2">
              关于良渚
            </h3>
            <p className="kicker text-xs md:text-sm text-cyan-200/50 mb-4 tracking-wide">
              空间即生活方式
            </p>
            <p className="text-sm md:text-[0.95rem] text-white/45 leading-[1.9] tracking-wide max-w-md">
              良渚有五千年的文明遗址，有大片湿地、稻田、苕溪，有路边随便走走就能遇上的博物馆和老建筑。在良渚这样的地方，空间本身就是一种生活方式。
            </p>
          </motion.article>

          {/* 03 — 关于 taste (positioned upper right) */}
          <motion.article
            className="keyword-card md:-mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <span className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/30 block mb-5">
              03
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white/90 mb-2">
              关于 taste
            </h3>
            <p className="kicker text-xs md:text-sm text-cyan-200/50 mb-4 tracking-wide">
              懂生活才能做出好产品
            </p>
            <p className="text-sm md:text-[0.95rem] text-white/45 leading-[1.9] tracking-wide max-w-md">
              一个总在出差、不下厨、不散步、不和朋友坐下来好好聊天的人，对生活的颗粒度就是粗的。OPCamp 把审美和生活经验放回产品判断里。
            </p>
          </motion.article>

          {/* 02 — 关于泡沫 (offset to the right) */}
          <motion.article
            className="keyword-card md:ml-8 md:-mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <span className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/30 block mb-5">
              02
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white/90 mb-2">
              关于泡沫
            </h3>
            <p className="kicker text-xs md:text-sm text-cyan-200/50 mb-4 tracking-wide">
              一群真正有意思的 OPC
            </p>
            <p className="text-sm md:text-[0.95rem] text-white/45 leading-[1.9] tracking-wide max-w-md">
              千万级融资的泡沫，宏大叙事的泡沫，估值曲线的泡沫，伸手一碰就破。我们更相信一个人就是一支队伍，想清楚一个产品，动手做出来，找到第一批用户，自己迭代下去。
            </p>
          </motion.article>

          {/* 04 — 关于水位 */}
          <motion.article
            className="keyword-card md:mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            <span className="marker font-mono text-[10px] tracking-[0.3em] text-cyan-300/30 block mb-5">
              04
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white/90 mb-2">
              关于水位
            </h3>
            <p className="kicker text-xs md:text-sm text-cyan-200/50 mb-4 tracking-wide">
              舒服但不松散，专注但不耗竭
            </p>
            <p className="text-sm md:text-[0.95rem] text-white/45 leading-[1.9] tracking-wide max-w-md">
              水位太高，就是淹没。水位太低，就是浮夸。水位刚好，是在 48 小时里剥掉不必要的泡沫，找到自己能持续创造的节奏。
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
