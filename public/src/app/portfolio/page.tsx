'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

import { ExternalLink, X } from 'lucide-react'

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <section className="pt-32 pb-24 bg-[#F9F8F6]">

      <div className="max-w-7xl mx-auto px-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}

          className="mb-16"
        >
          <h1 className="text-5xl font-serif font-medium leading-tight mb-6 tracking-wide">
            Creative Portfolio
          </h1>
          <p className="text-stone-600 max-w-2xl leading-relaxed">
            跨越学术科研与视觉创作的边界。这里记录了我的视频作品、工作文档与持续构建的代码实践。
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="space-y-8">
          {/* Row 1: Full-width featured card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="overflow-hidden border border-stone-200 rounded-2xl bg-white/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-stone-200/50 relative"
          >
            <div className="p-10">
              {/* Tags */}
              <div className="flex gap-2 mb-6">
                <span className="text-xs px-3 py-1 border border-stone-300 rounded-full text-stone-600">Side Project</span>
                <span className="text-xs px-3 py-1 border border-stone-300 rounded-full text-stone-600">In Progress</span>
              </div>
              
              {/* Corner badge */}
              <div className="absolute top-4 right-4 bg-stone-100 text-stone-600 border border-stone-200 rounded-full px-3 py-1 text-xs italic">
                ↑ currently building this
              </div>
              
              {/* Content */}
              <h2 className="text-3xl font-bold text-[#2C2A29] mb-4">个人简历与作品集网站 (Vibe Coding)</h2>
              <p className="text-stone-600 leading-relaxed">
                正在通过 AI 协作实现前端页面的从零到一构建，结合现代前端技术与设计理念，打造一个展示个人技能与项目的专业平台。
              </p>
            </div>
          </motion.div>

          {/* Row 2: Two-column video cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {/* Video Card 1 */}
            <motion.div
              className="overflow-hidden border border-stone-200 rounded-2xl bg-white/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-stone-200/50 cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              onClick={() => setActiveVideo('/videos/video1.mov')}
            >
              {/* Image */}
              <div className="aspect-video contrast-[0.95] sepia-[.1] hue-rotate-[-15deg] group">
                <img 
                  src="/images/image1.png" 
                  alt="AI 银发回忆录视频" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#2C2A29]">AI 银发回忆录视频</h3>
                  <div onClick={() => setActiveVideo('/videos/video1.mov')} className="text-stone-400 hover:text-stone-600 transition-colors cursor-pointer">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
                
                <p className="text-stone-600 mb-6 leading-relaxed text-sm">
                  使用 AI 技术创建的银发族回忆录视频，通过视觉效果和叙事手法，展现老年人的生活故事和人生智慧。
                </p>
              </div>
            </motion.div>

            {/* Video Card 2 */}
            <motion.div
              className="overflow-hidden border border-stone-200 rounded-2xl bg-white/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-stone-200/50 cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              onClick={() => setActiveVideo('/videos/video2.mov')}
            >
              {/* Image */}
              <div className="aspect-video contrast-[0.95] sepia-[.1] hue-rotate-[-15deg] group">
                <img 
                  src="/images/image2.jpeg" 
                  alt="AI 漫剧短片制作" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#2C2A29]">AI 漫剧短片制作</h3>
                  <div onClick={() => setActiveVideo('/videos/video2.mov')} className="text-stone-400 hover:text-stone-600 transition-colors cursor-pointer">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
                
                <p className="text-stone-600 mb-6 leading-relaxed text-sm">
                  利用 AI 技术制作的漫剧短片，结合生成式 AI 与传统动画技巧，创造独特的视觉叙事体验。
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Row 3: Four-column data blocks */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {/* Data Block 1 */}
            <a href="https://fcn65vlvia6y.feishu.cn/wiki/LP6EwwiHZieW45kq9TNcWig5nLe?from=from_copylink" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="border border-stone-200 rounded-2xl bg-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center text-center p-8 cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
              >
                <div className="font-serif italic text-5xl text-stone-800 mb-2">1000+</div>
                <div className="text-stone-600 mb-2">覆盖服务用户</div>
                <div className="text-stone-400 text-sm">AI训练营学习手册</div>
              </motion.div>
            </a>

            {/* Data Block 2 */}
            <a href="https://fcn65vlvia6y.feishu.cn/wiki/V7KewXdEpikpEKkKvoJc1G7Fnze?from=from_copylink" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="border border-stone-200 rounded-2xl bg-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center text-center p-8 cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
              >
                <div className="font-serif italic text-5xl text-stone-800 mb-2">3</div>
                <div className="text-stone-600 mb-2">标准化 SOP</div>
                <div className="text-stone-400 text-sm">智能体开发流程文档</div>
              </motion.div>
            </a>

            {/* Data Block 3 */}
            <a href="/docs/paper.pdf" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="border border-stone-200 rounded-2xl bg-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center text-center p-8 cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
              >
                <div className="font-serif italic text-5xl text-stone-800 mb-2">2</div>
                <div className="text-stone-600 mb-2">核心期刊录用</div>
                <div className="text-stone-400 text-sm">数字经济实证研究论文</div>
              </motion.div>
            </a>

            {/* Data Block 4 */}
            <a href="https://www.coze.cn/store/agent/7576463196995731471?bot_id=true" target="_blank" rel="noopener noreferrer">
              <motion.div
                className="border border-stone-200 rounded-2xl bg-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center text-center p-8 cursor-pointer"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
              >
                <div className="font-serif italic text-5xl text-stone-800 mb-2">6</div>
                <div className="text-stone-600 mb-2">Coze平台</div>
                <div className="text-stone-400 text-sm">垂直需求智能体</div>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          {/* 毛玻璃背景，点击背景关闭 */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setActiveVideo(null)}
          />
          
          {/* 视频播放器容器 */}
          <div className="relative z-10 w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
            {/* 右上角关闭按钮 */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
            >
              <X size={24} />
            </button>
            
            {/* 原生视频播放器 */}
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

    </section>
  )
}