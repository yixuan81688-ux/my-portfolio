'use client'

import { motion } from 'framer-motion'

import Link from 'next/link'


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

          {/* Greeting Component */}
          <div className="flex items-center gap-2 mb-4">
            <div className="text-stone-700">↳</div>
            <div className="text-xs font-medium text-stone-500 uppercase tracking-widest">
              HI, I'M YIXUAN
            </div>
          </div>
          
          {/* Micro Slogan */}
          <div className="text-sm font-serif font-medium text-stone-600 uppercase tracking-wider mb-6">

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
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-center mt-4">
            <a 
              href="/李熠璇简历.pdf" 
              download 
              className="inline-block px-8 py-3 bg-[#2C2A29] text-[#F9F8F6] rounded-full text-sm font-medium transition-all duration-300 hover:bg-black/80 hover:-translate-y-1 hover:shadow-lg no-underline"
            >
              Download Resume
            </a>
            <Link 
              href="/portfolio" 
              className="inline-block px-8 py-3 bg-transparent border border-[#2C2A29] text-[#2C2A29] rounded-full text-sm font-medium transition-all duration-300 hover:bg-black/5 hover:-translate-y-1 hover:shadow-lg no-underline"
            >
              View Portfolio
            </Link>
            <Link 
              href="/about" 
              className="inline-block px-8 py-3 bg-[#2C2A29] text-[#F9F8F6] rounded-full text-sm font-medium transition-all duration-300 hover:bg-black/80 hover:-translate-y-1 hover:shadow-lg no-underline"
            >
              Contact Me
            </Link>

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
          <div className="aspect-[3/4] w-full overflow-hidden rounded-[2rem] shadow-lg border-4 border-white max-h-[80vh]">
            <img 
              src="/images/banner.jpg" 

              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
