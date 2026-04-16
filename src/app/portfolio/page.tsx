'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Play } from 'lucide-react'

type ProjectType = 'PRODUCT' | 'AI VIDEO'

interface PortfolioItem {
  id: number
  title: string
  type: ProjectType
  description: string
  tags: string[]
  size: string
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<'ALL' | ProjectType>('ALL')

  const portfolioItems: PortfolioItem[] = [
    // Product Projects
    {
      id: 1,
      title: 'AI 智能客服系统',
      type: 'PRODUCT',
      description: '基于大语言模型的智能客服系统',
      tags: ['AI AGENT', 'LLM', 'NLP'],
      size: 'md:col-span-2',
    },
    {
      id: 2,
      title: '产品需求管理平台',
      type: 'PRODUCT',
      description: '一站式产品需求管理平台',
      tags: ['PRODUCT MANAGEMENT', 'UX DESIGN'],
      size: 'md:col-span-1',
    },
    {
      id: 3,
      title: '用户行为分析系统',
      type: 'PRODUCT',
      description: '基于用户行为数据的分析系统',
      tags: ['DATA ANALYTICS', 'USER RESEARCH'],
      size: 'md:col-span-1',
    },
    // AI Video Works
    {
      id: 4,
      title: 'AI 产品概念视频',
      type: 'AI VIDEO',
      description: '展示AI产品功能的概念视频',
      tags: ['RUNWAY', 'MIDJOURNEY', 'VIDEO'],
      size: 'md:col-span-1',
    },
    {
      id: 5,
      title: '品牌宣传短片',
      type: 'AI VIDEO',
      description: '使用AI生成的品牌宣传短片',
      tags: ['RUNWAY', 'AI GENERATION', 'CREATIVE'],
      size: 'md:col-span-2',
    },
    {
      id: 6,
      title: '产品演示视频',
      type: 'AI VIDEO',
      description: '产品功能演示视频',
      tags: ['RUNWAY', 'VIDEO', 'DEMO'],
      size: 'md:col-span-1',
    },
  ]

  // Filter items based on active filter
  const filteredItems = activeFilter === 'ALL' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === activeFilter)

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="text-5xl font-semibold leading-tight">
            <span className="font-light italic">My</span> <span className="font-bold">Portfolio</span>
          </h1>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex gap-4 mb-12"
        >
          {(['ALL', 'PRODUCT', 'AI VIDEO'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm uppercase transition-all duration-300 ${activeFilter === filter 
                ? 'bg-stone-800 text-white' 
                : 'border border-stone-200 text-stone-600 hover:border-stone-300'}`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          layout
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
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className={`${item.size} overflow-hidden border border-stone-200 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:border-stone-300`}
              layout
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              {/* Image Placeholder */}
              <div className="relative h-80 bg-stone-100">
                {item.type === 'AI VIDEO' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <a href="#" className="text-stone-400 hover:text-stone-600 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-[#666] mb-6 text-sm">{item.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs uppercase px-3 py-1 border border-stone-200 rounded-full text-stone-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}