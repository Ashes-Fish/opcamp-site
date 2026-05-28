# 汤泉 OPCamp 落地页 — 产品需求文档 (PRD)

## 产品目标
1. 为「汤泉 OPCamp」活动提供一个沉浸式的品牌宣传落地页
2. 通过泡泡交互、暗色调视觉和叙事性文字传递「work-life balance」和「亲自然」的活动理念
3. 在所有设备上提供流畅、稳健的浏览体验

## 用户故事
- 作为访客，我可以通过 Gate Screen 的「轻触开始」进入活动页面
- 作为访客，我可以滚动浏览所有活动介绍、日程、参与成员和报名信息
- 作为访客，我可以点击泡泡查看详细内容（Bubble Modal）
- 作为访客，我可以在桌面端通过自定义光标获得沉浸式的泡泡射击体验
- 作为访客，我可以在手机端流畅浏览所有内容

## 需求分级

### P0 (必须)
1. 全页面暗色主题（#071522 / #0a1428 背景）
2. Gate Screen：全屏覆盖层，点击「轻触开始」淡出
3. Hero Section：全屏、大标题、副标题、2 个 CTA 按钮、滚动指示器
4. About Section：4 段长文介绍
5. Keyword Section：大标题 + 声明区块
6. Shoot Section：5 个浮泡泡 + 点击弹出模态框
7. Timeline Section：双日日程表
8. Info Table：7 行活动信息
9. NPC Grid：6 张人物卡片
10. Photo Break Section：全宽图片 + 文字
11. Review Section：标签切换 + 6 张卡片
12. Audience Section：3 段受众描述
13. Footer Section：报名信息 + CTA 按钮 + 合作伙伴
14. Floating CTA：固定右下角
15. Bubble Modal：覆盖层弹窗 + 关闭按钮 + ESC 关闭

### P1 (重要)
1. 桌面端泡泡区自定义光标（泡泡枪图标）
2. 泡泡点击时的火花粒子动画
3. 泡泡浮动/呼吸动画
4. Tab 切换动画
5. 视差滚动背景效果
6. 响应式布局（移动端单列）
7. Google Fonts 加载（Noto Serif SC, DM Mono, Plus Jakarta Sans）
8. 加载/错误状态处理

### P2 (锦上添花)
1. Gate Screen 泡泡棒浮动动画
2. 页面滚动平滑过渡
3. 文字淡入动画
4. 全局背景渐变效果

## 页面区块（16 个）
1. Gate Screen（入口大门）
2. Hero Section
3. About Section
4. Keyword Section
5. Shoot Section（泡泡射击区）
6. Timeline Section（日程）
7. Rhythm Section（节奏）
8. Info Table
9. NPC Grid
10. Photo Break
11. Review Section（回顾）
12. Audience Section（受众）
13. Footer Section
14. Floating CTA
15. Bubble Modal
16. Loading/Error State

## UI 方向
- **主题色调**：深色 (#071522/#0a1428) + 青蓝强调色 (#00d9ff)
- **字体**：Noto Serif SC（标题/正文）、DM Mono（标签/UI）、Plus Jakarta Sans（后备）
- **视觉语言**：玻璃质感、泡泡反射、微妙发光、气泡般圆润
- **图片**：原项目图片资产（拷贝复用）

## 移动端策略
- Tailwind CSS 响应式断点（sm/md/lg）
- 移动端：单列布局、增大触摸目标、减少视差
- 桌面端：多列布局、自定义光标、视差效果
- Info Table 在移动端堆叠显示
- 文本使用 `clamp()` 控制字体大小

## 待确认问题
1. 是否需要保留原项目的所有图片？ → 是，拷贝复用
2. 是否需要保留原项目的字体？ → 是
3. 动画库使用 Framer Motion？ → 是
4. 是否需要无障碍支持？ → 基本语义标签 + ARIA
5. 是否需要分析/统计？ → 否
6. iPhone Safe Area 适配？ → 是
