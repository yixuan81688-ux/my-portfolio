'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle } from 'lucide-react'

export default function About() {
  const [showWechat, setShowWechat] = useState(false);
  return (
    <section className="pt-32 pb-24 bg-[#F9F8F6]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Bento Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column: Emotional & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-serif font-medium leading-tight mb-8 tracking-wide">
              Say Hello ✦
            </h1>
            
            <div className="text-lg text-stone-600 leading-relaxed mt-8 mb-8">
              <p>如果你正在构建 AI 产品，</p>
              <p>或者探索技术如何真正触达并帮助人。</p>
              <br/>
              <p>无论是产品、创意，还是关于 AI 的一次交流——</p>
              <p>我都很期待与你对话。</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:lyx002816789@163.com" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-stone-800 text-[#2C2A29] rounded-full text-sm font-medium transition-all duration-300 hover:bg-black/5 hover:-translate-y-1 hover:shadow-lg no-underline"
              >
                <Mail className="w-4 h-4" />
                <span>lyx002816789@163.com</span>
              </a>
              <a 
                href="tel:13934166946" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-stone-800 text-[#2C2A29] rounded-full text-sm font-medium transition-all duration-300 hover:bg-black/5 hover:-translate-y-1 hover:shadow-lg no-underline"
              >
                <Phone className="w-4 h-4" />
                <span>13934166946</span>
              </a>
              <div className="relative">
                <button 
                  className="inline-flex items-center gap-2 px-6 py-3 border border-stone-800 text-[#2C2A29] rounded-full text-sm font-medium transition-all duration-300 hover:bg-black/5 hover:-translate-y-1 hover:shadow-lg"
                  onMouseEnter={() => setShowWechat(true)}
                  onMouseLeave={() => setShowWechat(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WeChat</span>
                </button>
                {showWechat && (
                  <div className="absolute top-full left-0 mt-4 p-3 bg-white rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100 z-50 w-48 animate-in fade-in slide-in-from-top-2">
                    <div className="aspect-square bg-stone-100 rounded-xl overflow-hidden relative">
                      <img 
                        src="/images/wechat.jpg" 
                        alt="WeChat QR Code" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden absolute inset-0 flex items-center justify-center text-xs text-stone-400">QR Code</div>
                    </div>
                    <p className="text-center text-xs text-stone-500 mt-2 font-medium">Scan to connect</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column: Hard Metrics */}
          <div className="flex flex-col gap-6">
            {/* Basic Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-white/40 border border-stone-200 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/50"
            >
              <h2 className="text-sm uppercase text-stone-500 mb-4">✦ Basic Info</h2>
              <div className="grid grid-cols-2 gap-y-8 gap-x-4 mt-8">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-1.5">Birthday</span>
                  <span className="text-base font-medium text-stone-800">2002.08.16</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-1.5">Location</span>
                  <span className="text-base font-medium text-stone-800">北京</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-1.5">Status</span>
                  <span className="text-base font-medium text-stone-800">中共党员</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-stone-400 mb-1.5">MBTI</span>
                  <span className="text-base font-medium font-serif italic text-stone-800">INFJ</span>
                </div>
              </div>
            </motion.div>
            
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="bg-white/40 border border-stone-200 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/50"
            >
              <h2 className="text-sm uppercase text-stone-500 mb-4">✦ Education</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-[#2C2A29]">北京师范大学</p>
                  <p className="text-stone-600">教育经济与管理 (硕士) / 2024.09 - 2027.06</p>
                </div>
                <div>
                  <p className="font-bold text-[#2C2A29]">国际关系学院</p>
                  <p className="text-stone-600">国际经济与贸易 (本科) / 2020.09 - 2024.06</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-8 bg-white/40 border border-stone-200 rounded-3xl p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-200/50"
        >
          <h2 className="text-sm uppercase text-stone-500 mb-12">✦ Experience</h2>
          
          <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-6 mt-12">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-[7px] left-0 w-full h-[2px] bg-stone-200"></div>
            <div className="lg:hidden absolute top-0 left-[7px] w-[2px] h-full bg-stone-200"></div>
            
            {/* Experience Item 1 */}
            <div className="relative flex-1">
              <div className="absolute lg:top-0 lg:left-0 top-0 left-0 w-4 h-4 rounded-full bg-stone-800 ring-4 ring-[#F9F8F6] z-10"></div>
              <div className="lg:pt-8 lg:pl-0 pl-8 pt-0">
                <p className="text-sm text-stone-500 mb-2">2022.01 - 2022.04</p>
                <h3 className="font-bold text-[#2C2A29] mb-2">北京 2022 冬奥会</h3>
                <p className="text-stone-600 mb-2">国家高山滑雪中心语言服务助理</p>
                <p className="text-sm text-stone-600">协助外事接待，负责语言交流保障工作。</p>

              </div>
            </div>
            
            {/* Experience Item 2 */}

            <div className="relative flex-1">
              <div className="absolute lg:top-0 lg:left-0 top-0 left-0 w-4 h-4 rounded-full bg-stone-800 ring-4 ring-[#F9F8F6] z-10"></div>
              <div className="lg:pt-8 lg:pl-0 pl-8 pt-0">
                <p className="text-sm text-stone-500 mb-2">2025.06 - 2025.08</p>
                <h3 className="font-bold text-[#2C2A29] mb-2">毕马威华振会计师事务所</h3>
                <p className="text-stone-600 mb-2">课程培训运营</p>
                <p className="text-sm text-stone-600">协助举办大型活动，完善 SOP；对接 30 余场培训需求与学时统计。</p>

              </div>
            </div>
            
            {/* Experience Item 3 */}

            <div className="relative flex-1">
              <div className="absolute lg:top-0 lg:left-0 top-0 left-0 w-4 h-4 rounded-full bg-stone-800 ring-4 ring-[#F9F8F6] z-10"></div>
              <div className="lg:pt-8 lg:pl-0 pl-8 pt-0">
                <p className="text-sm text-stone-500 mb-2">2025.06 - 2026.06</p>
                <h3 className="font-bold text-[#2C2A29] mb-2">北京师范大学教育学部</h3>
                <p className="text-stone-600 mb-2">研究生会办公室主任</p>
                <p className="text-sm text-stone-600">主导两次 200+ 人大型会议策划、物料准备与后期复盘。</p>
              </div>
            </div>
            
            {/* Experience Item 4 */}
            <div className="relative flex-1">
              <div className="absolute lg:top-0 lg:left-0 top-0 left-0 w-4 h-4 rounded-full bg-stone-800 ring-4 ring-[#F9F8F6] z-10"></div>
              <div className="lg:pt-8 lg:pl-0 pl-8 pt-0">
                <p className="text-sm text-stone-500 mb-2">2025.11 - 至今</p>
                <h3 className="font-bold text-[#2C2A29] mb-2">环球兴学科技发展有限公司</h3>
                <p className="text-stone-600 mb-2">AI 产品实习生</p>
                <p className="text-sm text-stone-600">负责 Coze 平台智能体产品开发与 SOP 撰写；跟进大模型测评与 Prompt 调优。</p>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}