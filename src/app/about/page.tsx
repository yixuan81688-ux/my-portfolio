'use client'

import { motion } from 'framer-motion'
import { List } from 'lucide-react'

export default function About() {
  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Module A: Basic Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <h1 className="text-5xl font-semibold leading-tight mb-8">
            <span className="font-light italic">About</span> <span className="font-bold">Me</span>
          </h1>
          
          <div className="max-w-3xl">
            <p className="text-[18px] text-[#666] leading-[1.8] mb-6">
              我是一名拥有经济与教育学复合背景的 AI 产品经理与创作者。我的职业生涯始终围绕着如何将复杂的业务需求转化为优雅的产品逻辑，并利用 AI 视觉技术赋能内容创作。
            </p>
            <p className="text-[18px] text-[#666] leading-[1.8] mb-6">
              在 AI 领域，我相信技术的真正价值在于如何温暖用户，如何让复杂的技术变得简单易用。我追求的不仅仅是功能的实现，更是用户体验的极致。
            </p>
            <p className="text-[18px] text-[#666] leading-[1.8]">
              我的成长理念是：<span className="font-semibold">持续学习，跨界融合，用技术创造价值</span>。我始终保持对前沿 AI 技术的敏感度，同时注重产品思维的培养，努力成为一名既懂技术又懂用户的复合型人才。
            </p>
          </div>
        </motion.div>
        
        {/* Module B: Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl font-semibold leading-tight mb-12">
            <span className="font-light italic">My</span> <span className="font-bold">Experience</span>
          </h2>
          
          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div className="relative pl-8 border-l-2 border-stone-200">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#111111]"></div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">AI 产品经理</h3>
                <p className="text-[#666] mb-4">科技公司 | 2023 - 至今</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <List className="w-5 h-5 text-[#666] mt-1 flex-shrink-0" />
                    <span className="text-[16px] text-[#666]">负责 AI 产品的需求分析、功能设计和用户体验优化</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <List className="w-5 h-5 text-[#666] mt-1 flex-shrink-0" />
                    <span className="text-[16px] text-[#666]">主导 AI 模型的微调与应用，提升产品智能化水平</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <List className="w-5 h-5 text-[#666] mt-1 flex-shrink-0" />
                    <span className="text-[16px] text-[#666]">与技术团队紧密合作，确保产品功能的顺利实现</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Experience Item 2 */}
            <div className="relative pl-8 border-l-2 border-stone-200">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#111111]"></div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">内容创作者</h3>
                <p className="text-[#666] mb-4">自由职业 | 2022 - 2023</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <List className="w-5 h-5 text-[#666] mt-1 flex-shrink-0" />
                    <span className="text-[16px] text-[#666]">利用 AI 视觉技术创作短视频内容，积累了大量粉丝</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <List className="w-5 h-5 text-[#666] mt-1 flex-shrink-0" />
                    <span className="text-[16px] text-[#666]">探索 Prompt 工程，优化 AI 生成内容的质量</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <List className="w-5 h-5 text-[#666] mt-1 flex-shrink-0" />
                    <span className="text-[16px] text-[#666]">建立了完整的 AI 内容创作工作流，提高创作效率</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Experience Item 3 */}
            <div className="relative pl-8 border-l-2 border-stone-200">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#111111]"></div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">产品助理</h3>
                <p className="text-[#666] mb-4">互联网公司 | 2020 - 2022</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <List className="w-5 h-5 text-[#666] mt-1 flex-shrink-0" />
                    <span className="text-[16px] text-[#666]">协助产品经理进行市场调研和用户需求分析</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <List className="w-5 h-5 text-[#666] mt-1 flex-shrink-0" />
                    <span className="text-[16px] text-[#666]">参与产品原型设计和用户测试</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <List className="w-5 h-5 text-[#666] mt-1 flex-shrink-0" />
                    <span className="text-[16px] text-[#666]">负责产品文档的编写和维护</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}