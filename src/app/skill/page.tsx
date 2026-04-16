'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Skill() {
  const skills = [
    // AI Product Skills
    {
      id: 1,
      category: 'AI Product Skills',
      title: '系统设计',
      description: '复杂业务需求的系统化设计与架构',
      tags: ['SYSTEM DESIGN', 'ARCHITECTURE', 'PRODUCT'],
      size: 'md:col-span-1',
    },
    {
      id: 2,
      category: 'AI Product Skills',
      title: '模型微调',
      description: 'AI模型的定制化训练与优化',
      tags: ['LLM', 'FINE-TUNING', 'AI'],
      size: 'md:col-span-1',
    },
    {
      id: 3,
      category: 'AI Product Skills',
      title: '文档撰写',
      description: '清晰、专业的产品文档与技术文档',
      tags: ['DOCUMENTATION', 'WRITING', 'COMMUNICATION'],
      size: 'md:col-span-1',
    },
    // AI Video Skills
    {
      id: 4,
      category: 'AI Video Skills',
      title: 'Prompt 工程',
      description: '精准的AI生成提示词设计与优化',
      tags: ['PROMPT', 'AI', 'CREATIVE'],
      size: 'md:col-span-1',
    },
    {
      id: 5,
      category: 'AI Video Skills',
      title: '视觉生成',
      description: '高质量AI视觉内容的生成与编辑',
      tags: ['MIDJOURNEY', 'RUNWAY', 'VISUAL'],
      size: 'md:col-span-1',
    },
    {
      id: 6,
      category: 'AI Video Skills',
      title: '视频工作流',
      description: '高效的AI视频创作全流程管理',
      tags: ['WORKFLOW', 'VIDEO', 'PRODUCTION'],
      size: 'md:col-span-1',
    },
  ]

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

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
            <span className="font-light italic">My</span> <span className="font-bold">Skills</span>
          </h1>
        </motion.div>

        {/* Skills Sections */}
        {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
          <div key={category} className="mb-16">
            <motion.h2 
              className="text-3xl font-semibold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 * index }}
            >
              {category}
            </motion.h2>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
              {categorySkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  className={`${skill.size} overflow-hidden border border-stone-200 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:border-stone-300`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-stone-100"></div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{skill.title}</h3>
                      <a href="#" className="text-stone-400 hover:text-stone-600 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    
                    <p className="text-[#666] mb-6">{skill.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {skill.tags.map((tag, tagIndex) => (
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
        ))}
      </div>
    </section>
  )
}
