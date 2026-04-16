'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Project() {
  const projects = [
    {
      id: 1,
      title: 'AI 智能客服系统',
      description: '基于大语言模型的智能客服系统，实现了自然语言理解和多轮对话能力',
      tags: ['AI AGENT', 'LLM', 'NLP'],
    },
    {
      id: 2,
      title: '产品需求管理平台',
      description: '一站式产品需求管理平台，支持需求收集、分析、优先级排序和跟踪',
      tags: ['PRODUCT MANAGEMENT', 'UX DESIGN', 'WORKFLOW'],
    },
    {
      id: 3,
      title: 'AI 内容生成工具',
      description: '利用 AI 技术自动生成营销文案、社交媒体内容和产品描述',
      tags: ['CONTENT GENERATION', 'PROMPT ENGINEERING', 'AI'],
    },
    {
      id: 4,
      title: '用户行为分析系统',
      description: '基于用户行为数据的分析系统，为产品决策提供数据支持',
      tags: ['DATA ANALYTICS', 'USER RESEARCH', 'DASHBOARD'],
    },
  ]

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-5xl font-semibold leading-tight">
            <span className="font-light italic">Product</span> <span className="font-bold">Projects</span>
          </h1>
        </motion.div>

        {/* Projects Grid */}
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
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="overflow-hidden border border-stone-200 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:border-stone-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-stone-100"></div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <a href="#" className="text-stone-400 hover:text-stone-600 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-[#666] mb-6 leading-relaxed">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
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