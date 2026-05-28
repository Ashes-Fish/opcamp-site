# 汤泉 OPCamp 落地页 — 重构交付

## 概述

已从零重构「汤泉 OPCamp」活动落地页。保持原项目全部文字内容、交互逻辑不变，使用全新代码实现，优先保证健壮性和手机适配性。

## 技术栈

- Vite 8 + React 19 + TypeScript 6
- Tailwind CSS v4
- Framer Motion 12（动画库）
- Google Fonts（Noto Serif SC / DM Mono / Plus Jakarta Sans）

## 文件结构

```
opcamp-rebuild/
├── index.html
├── vite.config.ts
├── src/
│   ├── main.tsx              # 入口
│   ├── index.css             # Tailwind + 主题 tokens
│   ├── App.tsx               # 主组件（路由/状态编排）
│   ├── App.css               # 全局动画/样式
│   ├── types.ts              # 类型定义
│   ├── data/
│   │   └── content.ts        # 全部文字内容
│   └── components/
│       ├── LoadingScreen.tsx  # 加载骨架屏
│       ├── ErrorScreen.tsx   # 错误状态
│       ├── GateScreen.tsx    # 入口大门（泡泡棒动画）
│       ├── HeroSection.tsx   # Hero 首屏
│       ├── AboutSection.tsx  # 关于
│       ├── KeywordSection.tsx# 关键词/产品声明
│       ├── ShootSection.tsx  # 泡泡射击区（核心交互）
│       ├── BubbleModal.tsx   # 泡泡详情弹窗
│       ├── TimelineSection.tsx# 日程
│       ├── RhythmSection.tsx # 节奏说明
│       ├── InfoTable.tsx     # 信息表
│       ├── NpcGrid.tsx       # NPC 网格
│       ├── PhotoBreak.tsx    # 图文间隔
│       ├── ReviewSection.tsx # 回顾（Tab 切换）
│       ├── AudienceSection.tsx# 受众
│       ├── FooterSection.tsx # 页脚/报名
│       └── FloatingCTA.tsx   # 浮动报名按钮
└── public/
    └── images/               # 15 张图片资源
```

## 交互逻辑（与原项目一致）

1. **入口大门**：全屏覆盖，点击泡泡棒/「轻触开始」淡出
2. **泡泡射击**：5 个浮泡泡 → 点击弹出火花粒子 → 打开详情弹窗
3. **自定义光标**：桌面端泡泡区鼠标替换为泡泡枪图标
4. **Tab 切换**：项目作品 ↔ 参与成员，动画过渡
5. **Modal 弹窗**：× / 遮罩 / ESC 关闭
6. **浮动 CTA**：滚动后右下角出现

## 健壮性保障

- TypeScript 严格类型，编译零错误
- 加载状态（LoadingScreen）+ 错误状态（ErrorScreen + 重试）
- 图片 fallback（onError 处理）
- Safe Area 适配（env(safe-area-inset-bottom)）
- 禁用文字选中/触摸高亮（-webkit-tap-highlight-color）
- Scroll event 使用 passive 监听
- 组件卸载时清理事件监听和定时器

## 构建结果

- 构建成功，436 模块转换
- JS: 361 KB (gzip: 115 KB)
- CSS: 35 KB (gzip: 7.5 KB)
- HTML: 0.8 KB

## 启动命令

```bash
cd opcamp-rebuild
npm run dev    # 开发服务器
npm run build  # 生产构建
npm run preview # 预览构建产物
```
