'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Project() {
  const projects = [
    {
      id: 1,
      title: 'AI Agent 智能体开发与测评系统',
      description: '基于 Coze 平台主导多款智能体产品开发与迭代，制定标准化操作流程（SOP）。系统性测评各类大模型能力并建立 Prompt 调优场景库，赋能实际业务落地。',
      tags: ['AI Agent', 'Coze', 'Prompt Engineering', 'SOP'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2400',
      link: 'https://www.coze.cn/store/agent/7622866879723700287?bot_id=true'
    },
    {
      id: 2,
      title: 'AI 技能训练营与社群运营',
      description: '主导「AI 生图」与「AI 漫剧」两期线上训练营。负责从 0 到 1 撰写学习手册、社群促活答疑及结营复盘，累计服务 1000+ 用户，有效提升社群活跃度与知识付费转化率。',
      tags: ['Community Ops', 'User Growth', 'AI Education'],
      image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=2400',
      link: 'https://fcn65vlvia6y.feishu.cn/wiki/MhHVwA88ziWpWekcaxpc3J7Bnbb?from=from_copylink'
    },
    {
      id: 3,
      title: '数字经济对教育错配的实证研究',
      description: '基于 CFPS 微观数据集，运用 STATA 进行计量经济学实证分析，构建模型探究数字经济对缓解过度教育的核心机制。（录用于 CSSCI 扩展版期刊）',
      tags: ['Data Analysis', 'Stata', 'Economics', 'CSSCI'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2400',
      link: 'https://kns.cnki.net/kcms2/article/abstract?v=kMXxFLy7TFWSq0MQJqeWhWJ4V8iNualV-GoEE1U9qc0mVcYbUcydM2PMYA8NArTMywFxrVE-Xt2S2JcEN9HnmvYrBhA9mN33gP5dVpFFUNBxaFkbSqklFkb7gM4Sh12CaLUS0gPHHMx0Ziq-tKqnKqhQaSofjbCLc5g5oB9tbm2CPJtNz2PDDw==&uniplatform=NZKPT&language=CHS'
    },
    {
      id: 4,
      title: '数字普惠金融与代际流动分析模型',
      description: '结合北京大学数字普惠金融指数与 CHIPs 城市面板数据，搭建数据分析模型，量化评估金融科技发展对代际收入向上流动的促进作用。',
      tags: ['Data Modeling', 'Panel Data', 'Stata', 'Financial Tech'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400',
      link: 'https://kns.cnki.net/kcms2/article/abstract?v=kMXxFLy7TFWSq0MQJqeWhWJ4V8iNualV-GoEE1U9qc0ibGFdFhV7zOJKVnV-rRqomGRzDabiuVCxyD4BeKmT_SyOgIMnak1KeUU83NaE_bAI8xTsIWD4qTwH45CoeiWLPgi8MP5oyCh3NdiYIqVRSnLt6ShHnG7Kf7qzbfvFc8Xecle1Tb14BA==&uniplatform=NZKPT&language=CHS'

    },
  ]

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
            Product Projects
          </h1>
          <p className="text-base text-stone-600 leading-relaxed">
            连接技术底层与用户需求。从数据模型的严谨论证，到 AI 产品的落地与社群运营，我致力于让技术真正创造价值并温暖用户。
          </p>
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
              className="overflow-hidden border border-stone-200 rounded-2xl bg-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              {/* Image */}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-video contrast-[0.95] sepia-[.1] hue-rotate-[-15deg] group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </a>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-[#2C2A29] hover:underline">
                    {project.title}
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-600 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-stone-600 mb-6 leading-relaxed text-sm">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-3 py-1 border border-stone-300 rounded-full text-stone-600">
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