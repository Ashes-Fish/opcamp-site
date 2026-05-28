# 汤泉 OPCamp 落地页 — 系统架构文档

## 1. 技术栈与实现方案

### 1.1 技术选型

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 19.2.6 | UI 框架 |
| TypeScript | ~6.0.2 | 类型安全 |
| Vite | 8.0.12 | 构建工具 |
| Tailwind CSS | 4.3.0 | 样式方案（@tailwindcss/vite 插件） |
| Framer Motion | 12.40.0 | 动画引擎 |
| Google Fonts | — | 字体（Noto Serif SC / DM Mono / Plus Jakarta Sans / Cormorant Garamond） |

### 1.2 核心实现策略

- **状态管理**：纯 React useState / useReducer，无外部状态库（页面复杂度低，无跨组件共享可变状态需求）
- **路由**：无路由库。单页垂直滚动，所有 section 以 `id` 锚点定位
- **图片策略**：背景图通过 `public/images/` 目录引用（`/images/xxx.png`），组件内图片通过 import 引用
- **动画方案**：Framer Motion 的 `motion.div` + `AnimatePresence` 控制入场/出场/切换动画
- **响应式策略**：Tailwind 断点体系（默认 mobile-first），桌面端额外启用自定义光标和视差效果
- **弹窗系统**：BubbleModal 通过 App 层状态控制，以 props 下发给 ShootSection

### 1.3 架构模式

采用 **Container-Presentational 模式** 的变体：
- **App.tsx** 作为容器组件，持有全局状态（gateVisible、modalState、loading）
- **各 Section 组件** 为展示型组件，接收 props，内部可持有局部 UI 状态（如 tab index）
- **自定义 Hooks** 封装可复用的交互逻辑（滚动进度、泡泡光标）

---

## 2. 组件树与 Props 接口

### 2.1 组件层级总览

```
main.tsx
└── <App />                          ← 全局状态容器
    ├── <LoadingScreen />            ← 字体/资源加载中
    ├── <ErrorScreen />              ← 加载失败
    ├── <GlobalBackdrop />           ← 固定背景层
    ├── <AnimatePresence>
    │   └── <GateScreen />           ← 入口大门（条件渲染）
    ├── <main>
    │   ├── <HeroSection />          ← 首屏英雄区
    │   ├── <AboutSection />         ← 活动介绍
    │   ├── <KeywordSection />       ← 关键词声明
    │   ├── <ShootSection />         ← 泡泡射击区（含 5 个泡泡）
    │   ├── <TimelineSection />      ← 日程表
    │   ├── <RhythmSection />        ← 节奏区块
    │   ├── <InfoTable />            ← 信息表格
    │   ├── <NpcGrid />              ← NPC 人物卡片
    │   ├── <PhotoBreak />           ← 图片中断区
    │   ├── <ReviewSection />        ← 回顾/评价（含 Tabs）
    │   ├── <AudienceSection />      ← 受众描述
    │   └── <FooterSection />        ← 页脚/报名
    ├── <FloatingCTA />              ← 固定右下角 CTA
    └── <AnimatePresence>
        └── <BubbleModal />          ← 泡泡弹窗（条件渲染）
```

### 2.2 组件 Props 接口定义

```typescript
// ========== GateScreen ==========
interface GateScreenProps {
  onEnter: () => void;  // 点击后调用，触发 gate 淡出
}

// ========== Hero Section ==========
interface HeroSectionProps {
  // 无 props，所有内容从 content.ts 读取
}

// ========== About Section ==========
interface AboutSectionProps {
  // 无 props，从 content.ts 读取段落数组
}

// ========== Keyword Section ==========
interface KeywordSectionProps {
  // 无 props，从 content.ts 读取
}

// ========== Shoot Section ==========
interface ShootSectionProps {
  bubbles: BubbleItem[];          // 5 个泡泡数据
  onBubbleClick: (index: number) => void;  // 点击回调，由 App 层处理
}

// ========== Bubble ==========
interface BubbleProps {
  item: BubbleItem;
  index: number;
  onClick: (index: number) => void;
}

// ========== Timeline Section ==========
interface TimelineSectionProps {
  timeline: TimelineDay[];  // 两天日程
}

// ========== Rhythm Section ==========
interface RhythmSectionProps {
  note: string;
}

// ========== Info Table ==========
interface InfoTableProps {
  rows: [string, string][];  // [label, value] 元组数组
}

// ========== NPC Grid ==========
interface NpcGridProps {
  npcs: Npc[];
}

// ========== NPC Card ==========
interface NpcCardProps {
  npc: Npc;
}

// ========== Photo Break ==========
interface PhotoBreakProps {
  // 无 props，从 content.ts 读取
}

// ========== Review Section ==========
interface ReviewSectionProps {
  tabs: ReviewTab[];
}

// ========== Audience Section ==========
interface AudienceSectionProps {
  title: string;
  items: string[];
}

// ========== Footer Section ==========
interface FooterSectionProps {
  title: string;
  body: string;
  joinCards: JoinCard[];
  buttons: string[];
  partners: string;
}

// ========== Floating CTA ==========
interface FloatingCTAProps {
  visible: boolean;
  label: string;
  onClick: () => void;
}

// ========== Bubble Modal ==========
interface BubbleModalProps {
  isOpen: boolean;
  item: BubbleItem | null;
  index: number;
  onClose: () => void;
}

// ========== Loading Screen ==========
interface LoadingScreenProps {
  isLoading: boolean;
}

// ========== Error Screen ==========
interface ErrorScreenProps {
  error: string | null;
  onRetry: () => void;
}

// ========== Global Backdrop ==========
interface GlobalBackdropProps {
  // 纯固定背景层，无 props
}

// ========== Review Tabs (internal to ReviewSection) ==========
interface ReviewTabBarProps {
  tabs: string[];  // tab 标签名数组
  activeIndex: number;
  onTabChange: (index: number) => void;
}
```

---

## 3. 数据模型与接口定义

### 3.1 TypeScript 类型定义（src/types.ts）

```typescript
/** 泡泡数据项 */
interface BubbleItem {
  id: string;        // 唯一标识: "liangzhu" | "paomo" | "taste" | "shuiwei" | "xinghuo"
  label: string;     // 显示标签: "良渚" | "泡沫" | "taste" | "水位" | "星火"
  eyebrow: string;   // 眉题（空间即生活方式 / 一群真正有意思的 OPC / ...）
  body: string;      // 正文内容
}

/** 日程的一天 */
interface TimelineDay {
  title: string;     // 标题: "Day 1 · 中午｜在地漫游与破冰" / "Day 2 · 清晨到傍晚"
  rows: [string, string][];  // [时间, 事项] 元组数组
}

/** NPC 人物卡片 */
interface Npc {
  name: string;      // 名字
  tagline: string;   // 一句话标签
  bio: string;       // 详细介绍
}

/** 回顾 Tab */
interface ReviewTab {
  name: string;                // Tab 名称: "项目作品" / "参与成员"
  items: [string, string][];   // [标题, 描述] 元组数组
}

/** Footer 报名卡片 */
interface JoinCard {
  title: string;     // 卡片标题
  description: string; // 卡片描述
}

/** 活动全局状态 */
interface AppState {
  gateVisible: boolean;
  bubbleModalOpen: boolean;
  activeBubbleIndex: number;
  isLoaded: boolean;
  loadError: string | null;
}
```

### 3.2 内容数据定义（src/data/content.ts）

所有文本内容不可变，导出为 `const` 常量。结构如下：

```typescript
// ===== About Section =====
export const ABOUT_PARAGRAPHS: string[] = [
  "回到创造该有的样子，回到纯粹的「有意思」。",
  "很多人第一次来良渚大多是顺路来的...",
  "我们会推荐他们落脚在汤泉...",
  "汤泉成为了我们的一种工作方式 + 生活方式..."
];

// ===== Keyword Section =====
export const KEYWORD = {
  title: "在非标的道场，做有「回旋镖」的产品",
  subtitles: ["空间即生活方式", "产品即生活方式"],
  body: "Still a long way to go。AI 推动的所谓平权下..."
} as const;

// ===== Bubble Items =====
export const BUBBLE_ITEMS: BubbleItem[] = [
  {
    id: "liangzhu",
    label: "良渚",
    eyebrow: "空间即生活方式",
    body: "良渚有五千年的文明遗址..."
  },
  // ... 共 5 项
];

// ===== Timeline =====
export const TIMELINE: TimelineDay[] = [
  {
    title: "Day 1 · 中午｜在地漫游与破冰",
    rows: [
      ["13:00", "数栖湾集合，漫游玉鸟集周边"],
      // ... 共 6 行
    ]
  },
  // ... Day 2
];

// ===== Rhythm =====
export const RHYTHM_NOTE: string = "一群在 AI 时代真正在做事的人...";

// ===== Info Table =====
export const INFO_ROWS: [string, string][] = [
  ["时间", "5 月 16 日 – 5 月 17 日..."],
  // ... 共 7 行
];

// ===== NPCs =====
export const NPCS: Npc[] = [
  { name: "三寿", tagline: "玄学内容出海", bio: "AI 产品经理..." },
  // ... 共 6 人
];

// ===== Quiet Manifesto =====
export const QUIET_MANIFESTO: string = "我们越来越少敢于 shutdown...";

// ===== Reviews =====
export const REVIEW_TABS: ReviewTab[] = [
  {
    name: "项目作品",
    items: [
      ["鲸落 — 宁窕", "选择心情 → AI 匹配歌单..."],
      // ... 共 6 项
    ]
  },
  {
    name: "参与成员",
    items: [
      ["Rebecca", "先后任职百事中国..."],
      // ... 共 6 项
    ]
  }
];

// ===== Audience =====
export const AUDIENCE = {
  title: "不限定身份。但如果你是这样的人，会在这里很自在：",
  items: [
    "做过一些事，也踩过一些坑...",
    "相信小工具的力量...",
    "愿意找到舒服的水位..."
  ]
} as const;

// ===== Footer =====
export const FOOTER = {
  title: "人生需要很多务虚的时刻...",
  body: "邀请你来汤泉待两天一夜...",
  joinCards: [
    {
      title: "朋友推荐（最希望的方式）",
      description: "找一位参加过往期的朋友推荐你..."
    },
    {
      title: "留言私信 + 一次电话",
      description: "身边没有人参加过？..."
    }
  ],
  buttons: ["我有朋友推荐 / 我要报名", "我想先和你们聊 10 分钟"],
  partners: "跳格 OutBox · 杭州 OPC 联盟 · ABC Labs · 数栖湾 · 千帆社 · 游戏客厅 · 观玄社"
} as const;
```

---

## 4. 程序调用流程

### 4.1 页面初始化流程

```
main.tsx
  │
  ├── 加载 index.css (Tailwind + 自定义主题 token)
  ├── 加载 Google Fonts (通过 index.html <link>)
  │
  └── render(<App />)
        │
        ├── App.tsx: useState → gateVisible=true, isLoaded=false
        │
        ├── 检查 document.fonts.ready
        │     ├── 成功 → setIsLoaded(true)
        │     └── 超时/失败 → setIsLoaded(true) 允许继续（fallback 字体）
        │
        ├── 渲染 <LoadingScreen isLoading={!isLoaded} />
        │     └── isLoaded=false → 显示加载指示器
        │     └── isLoaded=true  → 自动隐藏（AnimatePresence exit）
        │
        ├── 渲染 <GlobalBackdrop />  ← 常驻固定层
        │
        ├── <AnimatePresence>
        │     └── gateVisible=true → <GateScreen onEnter={handleEnter} />
        │           └── 用户点击 → handleEnter()
        │                 ├── setGateVisible(false)
        │                 └── localStorage.setItem('gateSeen', 'true')
        │
        └── gateVisible=false →
              ├── <HeroSection />
              ├── <AboutSection />
              ├── ...
              └── <FooterSection />
```

### 4.2 泡泡点击 → 弹窗流程

```
用户点击泡泡 (ShootSection 内)
  │
  ├── 触发 Bubble.onClick(index)
  │     ├── pop 动画：scale 1→0, opacity 1→0 (Framer Motion)
  │     ├── spawn 粒子效果：10 个 spark div 圆圈散射 + fadeOut
  │     │
  │     └── ShootSection.onBubbleClick(index)
  │           └── App.tsx handleBubbleClick(index)
  │                 ├── setActiveBubbleIndex(index)
  │                 └── setBubbleModalOpen(true)
  │
  ├── <AnimatePresence>
  │     └── bubbleModalOpen=true → <BubbleModal
  │           isOpen={true}
  │           item={BUBBLE_ITEMS[activeBubbleIndex]}
  │           index={activeBubbleIndex}
  │           onClose={handleCloseModal}
  │         />
  │           ├── Enter: scale 0.9→1 + opacity 0→1 + backdropBlur
  │           ├── 显示内容
  │           │     ├── 标记: "BUBBLE 0{index+1}"
  │           │     ├── 标题: item.label
  │           │     ├── 眉题: item.eyebrow
  │           │     └── 正文: item.body
  │           └── 关闭方式：
  │                 ├── 点击 × 按钮 → onClose()
  │                 ├── 点击暗色背景 → onClose()
  │                 └── 按 ESC 键 → useEffect keydown 监听 → onClose()
  │
  └── handleCloseModal()
        ├── setBubbleModalOpen(false)
        └── setActiveBubbleIndex(-1)
```

### 4.3 Gate Screen 二次访问逻辑

```
App.tsx mount
  │
  ├── 读取 localStorage.getItem('gateSeen')
  │     ├── null / undefined → setGateVisible(true)  // 首次访问
  │     └── 'true' → setGateVisible(false)           // 已访问过
  │
  └── render 逻辑见上方初始化流程
```

### 4.4 Review Tab 切换流程

```
ReviewSection
  │
  ├── useState activeTab = 0
  ├── 渲染 <ReviewTabBar
  │       tabs={tabs.map(t => t.name)}   // ["项目作品", "参与成员"]
  │       activeIndex={activeTab}
  │       onTabChange={setActiveTab}
  │     />
  │
  └── <AnimatePresence mode="wait">
        └── activeTab === 0 → 渲染 "项目作品" 卡片列表
            activeTab === 1 → 渲染 "参与成员" 卡片列表
              └── AnimatePresence 提供 cross-fade 过渡
      </AnimatePresence>
```

### 4.5 桌面端自定义光标流程

```
ShootSection (desktop only)
  │
  ├── useEffect: 检测是否为桌面端（!('ontouchstart' in window)）
  │
  ├── 桌面端：
  │     ├── 设置 cursor: none on container
  │     ├── 渲染 <div className="custom-cursor"> 跟随鼠标位置
  │     │     └── 背景图: url('/images/bubble-pop-gun-icon.png')
  │     └── mousemove 事件 → 更新 cursor div 的 transform: translate(x, y)
  │
  └── 移动端：无自定义光标，正常 touch 交互
```

---

## 5. 文件清单

```
src/
├── main.tsx                          ← 已存在，入口文件
├── index.css                         ← 已存在，Tailwind + 自定义主题
├── App.tsx                           ← 容器组件（全局状态 + 组合所有 section）
├── types.ts                          ← 所有 TypeScript 类型定义
│
├── data/
│   └── content.ts                    ← 所有文本内容常量
│
├── hooks/
│   ├── useScrollProgress.ts          ← 滚动进度 hook
│   └── useBubbleCursor.ts            ← 泡泡区自定义光标 hook
│
└── components/
    ├── GateScreen.tsx                ← 入口大门（泡泡棒 + "轻触开始"）
    ├── HeroSection.tsx               ← 首屏英雄区
    ├── AboutSection.tsx              ← 活动介绍（4 段落）
    ├── KeywordSection.tsx            ← 关键词声明
    ├── ShootSection.tsx              ← 泡泡射击区（含 5 个浮动泡泡）
    ├── BubbleModal.tsx               ← 泡泡内容弹窗
    ├── TimelineSection.tsx           ← 双日日程
    ├── RhythmSection.tsx             ← 节奏区块
    ├── InfoTable.tsx                 ← 信息表格（7 行）
    ├── NpcGrid.tsx                   ← NPC 人物卡片网格
    ├── PhotoBreak.tsx                ← 图片中断区
    ├── ReviewSection.tsx             ← 回顾/评价（含 TabBar 子组件）
    ├── AudienceSection.tsx           ← 受众描述
    ├── FooterSection.tsx             ← 页脚/报名
    ├── FloatingCTA.tsx               ← 固定右下角 CTA
    ├── LoadingScreen.tsx             ← 加载中状态
    ├── ErrorScreen.tsx               ← 错误状态
    └── GlobalBackdrop.tsx            ← 全局固定背景层

public/
├── images/
│   ├── bg-beach-bubbles.png          ← 背景图：海滩泡泡
│   ├── bg-bubble-gun-review.png      ← 背景图：泡泡枪/回顾区
│   ├── bg-canopy-bubbles.png         ← 背景图：天篷泡泡
│   ├── bg-city-bubbles.png           ← 背景图：城市泡泡
│   ├── bg-final-hero-bubbles.png     ← 背景图：首屏泡泡
│   ├── bg-final-soft-bubble.png      ← 背景图：柔光泡泡
│   ├── bg-giant-bubble.png           ← 背景图：巨型泡泡
│   ├── bg-sky.png                    ← 背景图：天空
│   ├── bubble-pop-gun-icon.png       ← 桌面端自定义光标
│   ├── bubble-wand-icon.png          ← Gate 屏幕泡泡棒
│   ├── img1.jpg ~ img5.jpg           ← Photo Break 图片
│   ├── favicon.svg                   ← 已存在
│   └── icons.svg                     ← 已存在
```

---

## 6. 各组件状态管理细则

| 组件 | 状态变量 | 类型 | 说明 |
|------|----------|------|------|
| App.tsx | `gateVisible` | boolean | Gate 屏幕可见性 |
| App.tsx | `bubbleModalOpen` | boolean | 泡泡弹窗可见性 |
| App.tsx | `activeBubbleIndex` | number | 当前激活的泡泡索引 |
| App.tsx | `isLoaded` | boolean | 字体/资源加载完成 |
| App.tsx | `loadError` | string \| null | 加载错误信息 |
| App.tsx | `ctaVisible` | boolean | Floating CTA 可见性（基于滚动位置） |
| ReviewSection | `activeTab` | number | 当前 Tab 索引 |
| ShootSection | `poppedIndices` | Set\<number\> | 已点击过的泡泡索引集合 |
| GateScreen | 无 | — | 纯展示 + 回调 |
| FloatingCTA | 无 | — | 由 App.tsx props 控制 |

---

## 7. 样式方案

### 7.1 Tailwind 自定义主题（已在 index.css 中定义）

```css
@theme {
  --font-serif: "Noto Serif SC", serif;
  --font-mono: "DM Mono", "Plus Jakarta Sans", sans-serif;
  --font-sans: "Plus Jakarta Sans", "DM Mono", sans-serif;
  --color-deep: #071522;
  --color-deeper: #0a1428;
  --color-dark-card: rgba(4, 10, 20, 0.62);
  --color-cyan-light: rgba(190, 222, 231, 0.78);
  --color-cyan-soft: rgba(237, 246, 249, 0.9);
  --color-cyan-bright: rgba(0, 217, 255, 0.4);
}
```

### 7.2 响应式策略

- **基础（mobile first）**：单列布局，`padding: 16-20px`，触摸目标 ≥44px
- **`md` (≥768px)**：两列布局可用，启用部分视差效果
- **`lg` (≥1024px)**：多列布局，启用自定义光标和完整视差

---

## 8. 加载与错误处理

### 8.1 加载流程

1. `main.tsx` 挂载 `App`
2. `App` 初始化后监听 `document.fonts.ready`
3. 字体就绪 → `setIsLoaded(true)` → 自动从 LoadingScreen 过渡到主内容
4. 字体加载超时（10 秒）→ 放弃等待，setIsLoaded(true) 继续渲染

### 8.2 错误边界

- **图片加载失败**：`<img>` 设置 `onError` → 替换为占位背景色
- **字体加载失败**：浏览器 fallback 字体自动生效
- **全局 JS 错误**：ErrorScreen 组件渲染 + "重试" 按钮触发 `window.location.reload()`

---

## 9. 图像资源映射

| 图片文件 | 使用位置 | 引用方式 |
|----------|----------|----------|
| `bg-beach-bubbles.png` | GlobalBackdrop / Hero | `url('/images/bg-beach-bubbles.png')` |
| `bg-bubble-gun-review.png` | ReviewSection 背景 | `url('/images/bg-bubble-gun-review.png')` |
| `bg-canopy-bubbles.png` | AboutSection 背景 | `url('/images/bg-canopy-bubbles.png')` |
| `bg-city-bubbles.png` | KeywordSection 背景 | `url('/images/bg-city-bubbles.png')` |
| `bg-final-hero-bubbles.png` | HeroSection 装饰 | `url('/images/bg-final-hero-bubbles.png')` |
| `bg-final-soft-bubble.png` | 全局叠加层 | `url('/images/bg-final-soft-bubble.png')` |
| `bg-giant-bubble.png` | 装饰元素 | `url('/images/bg-giant-bubble.png')` |
| `bg-sky.png` | 背景天空 | `url('/images/bg-sky.png')` |
| `bubble-pop-gun-icon.png` | 桌面端自定义光标 | `url('/images/bubble-pop-gun-icon.png')` |
| `bubble-wand-icon.png` | GateScreen 泡泡棒图标 | `url('/images/bubble-wand-icon.png')` |
| `img1.jpg` ~ `img5.jpg` | PhotoBreak 轮播/展示 | `import` 或 `url('/images/img1.jpg')` |

---

## 10. 未明确事项与假设

1. **PhotoBreak 的具体展示方式**：假设为全宽图片 + 浮层文字的形式，交替使用 5 张图片作为背景
2. **Gate Screen 动画细节**：假设为点击后 0.5s 淡出 + scale 缩小，之后从 DOM 移除
3. **泡泡浮动动画**：假设为每个泡泡有不同的浮动延迟和幅度（`y` 轴 ±8px，周期 3-5s 随机）
4. **火花粒子效果**：假设为 10 个圆形 `<div>` 从泡泡中心向随机方向散射 + 0.6s 渐隐
5. **Floating CTA 显示时机**：假设在 HeroSection 之后出现（scrollY > 视口高度 × 0.8）
6. **桌面端 vs 移动端检测**：通过 `'ontouchstart' in window` 检测，不使用 UA 字符串
7. **ReviewSection 卡片布局**：假设为 2 列网格（桌面端）→ 单列（移动端）
8. **NPC Grid 布局**：假设为 3 列（桌面端）→ 2 列（平板）→ 单列（移动端）
9. **Gate 二次访问**：使用 localStorage 持久化标记，不清除
10. **i18n**：纯中文内容，无国际化需求
