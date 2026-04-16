# 个人简历与作品集网站 AI 开发上下文 (PRD V2.0)

## 1. 项目定位与目标角色
- **角色定位**：AI 领域求职者（重点突出 AI 产品经理能力 + AI 视频制作/创作者能力）。
- **核心目标**：展示个人的产品思维逻辑，同时提供一个极具视觉冲击力的入口来展示 AI 短视频作品。网站需传递出“懂技术的理性 + 懂内容的感性”的复合型人才形象。

## 2. 技术栈 (Tech Stack)
- 框架：Next.js (App Router, **采用多页路由架构**) + React
- 样式：Tailwind CSS
- 动效：Framer Motion (要求丝滑、克制的页面切换、滚动和悬浮动效)
- 图标：Lucide React
- 语言：TypeScript

## 3. 视觉风格与氛围定调 (Vibe & Design System)
- **核心排版 (Editorial Style)**：参考欧美高级杂志排版。大面积留白，左对齐为主。全局使用统一的网格系统。
- **字体排印 (Typography)**：高度依赖字体大小和粗细的对比。标题混用 **粗体 (Bold)** 和 *斜体 (Italic)* 来强调关键词。
- **色彩规范 (Low-saturation Warm Tones - 低饱和暖色系)**：
  - **绝对禁止使用纯黑 (#000000) 和纯白 (#FFFFFF)**。
  - 主背景色：燕麦色/暖沙色 (例如 `bg-[#F9F8F6]` 或 `bg-stone-50`)。
  - 主文本色：深暖灰/深咖色 (例如 `text-[#2C2A29]` 或 `text-stone-800`)。
  - 辅助色/边框：浅暖灰 (例如 `border-stone-200`)。
- **UI 元素与卡片复用系统 (Card System)**：
  - **核心规定**：Skill、Project、Portfolio 模块必须复用同一种高级卡片网格设计 (Bento Grid 或 大图流)。
  - **卡片特征**：大比例配图/视频缩略图 + 极简标题 + 外部链接图标 + 底部技能标签 (全大写、小字号、细边框设计)。卡片取消厚重的阴影，使用极浅边框，悬浮时轻微上浮。
  - **按钮特征**：核心功能按钮(如简历下载)采用药丸形状(Pill shape)，次要按钮采用细线框。

## 4. 页面内容架构 (Multi-Page Architecture)

**全局组件 (Global Layout)**
- **全局导航栏 (Top Navigation)**：固定在顶部。左侧显示名字 (返回首页)，右侧包含 4 个页面链接：`About`, `Skill`, `Project`, `Portfolio`。
- **全局页脚 (Footer)**：极简留白，提供联系方式(Email)和社交链接。

**页面 1：首页 (Home / `src/app/page.tsx`)**
- **Hero Section**：左右分栏布局。
- **左侧**：微标语 + 巨大且带有字体对比的个人标语 (如 "I design systems that bridge...") + 简短定位介绍。
- **CTA 区域**：必须包含一个明确的 **"Download Resume" (下载简历)** 按钮，支持配置本地附件路径 (如 `/resume.pdf`) 进行下载。
- **右侧**：低饱和暖色调个人氛围肖像照。

**页面 2：关于我 (About / `src/app/about/page.tsx`)**
- **模块 A (Basic Info)**：基础个人信息介绍，成长经历与理念。
- **模块 B (Experience)**：极简的工作/项目经历时间线 (Timeline)，包含公司/角色、时间、核心成就。

**页面 3：技能树 (Skill / `src/app/skill/page.tsx`)**
- 采用图文卡片网格展现。将抽象技能具象化。
- 包括 AI 产品技能 (系统设计/文档/模型微调) 和 AI 视频技能 (Prompt/视觉生成/工作流)。

**页面 4：产品项目 (Project / `src/app/project/page.tsx`)**
- 采用高级杂志网格设计。
- 专注于 "Product Projects" (产品案例展示)，如 AI 产品架构、逻辑分析等。

**页面 5：Portfolio (作品集 - 核心重头戏)**
- 参考大图卡片网格布局 (Bento Grid 或 2列/3列卡片流)。
- **内容分类**：分为 "Product Projects" (产品案例) 和 "AI Video Works" (视频作品)。
- **卡片设计**：大比例封面图/视频缩略图 + 极简标题 + 外部链接图标 + 底部技能标签 (如 `MIDJOURNEY`, `RUNWAY`, `PRD`)。