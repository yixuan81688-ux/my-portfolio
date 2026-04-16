'use client'

import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="py-24 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 min-h-[85vh] items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          {/* Micro Slogan */}
          <div className="text-sm font-medium text-stone-600 uppercase tracking-wider mb-6">
            AI PRODUCT & VIDEO CREATOR
          </div>
          
          {/* Main Slogan */}
          <h1 className="text-[56px] font-semibold leading-[1.35] tracking-[-0.5px] mb-4">
            用<span className="inline-block bg-gradient-to-r from-[#111111] to-[#999] bg-clip-text text-transparent transition-all duration-500 hover:bg-gradient-to-r hover:from-[#999] hover:to-[#111111]">严谨逻辑</span>构建产品，
            <br />
            用<span className="inline-block bg-gradient-to-r from-[#111111] to-[#999] bg-clip-text text-transparent transition-all duration-500 hover:bg-gradient-to-r hover:from-[#999] hover:to-[#111111]">前沿技术</span>讲述故事。
          </h1>
          
          {/* Introduction */}
          <p className="text-[18px] text-[#666] max-w-[680px] leading-[1.8] mb-8">
            拥有经济与教育学复合背景的 AI 产品经理与创作者。擅长将复杂的业务需求转化为优雅的产品逻辑，并利用 AI 视觉技术赋能内容创作，让技术真正触达并温暖用户。
          </p>
          
          {/* CTA Button */}
          <div>
            <a 
              href="/李熠璇简历.pdf" 
              download 
              className="inline-block px-7 py-3.5 bg-[#111111] text-white rounded-[999px] font-medium hover:bg-[#333333] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg no-underline"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
        
        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full"
        >
          {/* Placeholder Image */}
          <div className="aspect-[3/4] w-full overflow-hidden rounded-lg shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2400&auto=format&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
