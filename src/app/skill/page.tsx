'use client'

import { motion } from 'framer-motion'
import { Bot, LineChart, HeartHandshake, CheckCircle } from 'lucide-react'

export default function Skill() {
  const skills = [
    {
      icon: Bot,
      title: 'AI 产品与技术落地',
      description: '不盲从技术名词，专注于 AI 的业务落地。熟练掌握主流大模型能力边界，能够基于 Coze 搭建智能体并制定 SOP。具备极强的 AI 视觉（视频/图像）生成与项目把控能力。',
      tags: ['Coze', 'Prompt Engineering', 'LLM 测评', 'Midjourney / Runway'],
    },
    {
      icon: LineChart,
      title: '数据分析与底层逻辑',
      description: '拥有扎实的经济学与统计学底座。习惯用数据说话，熟练运用计量模型处理复杂面板数据。擅长从杂乱的海量信息中剥离核心变量，构建严谨的产品逻辑闭环。',
      tags: ['STATA', 'SPSS', 'SQL', 'Econometrics (计量经济学)'],
    },
    {
      icon: HeartHandshake,
      title: '项目操盘与同理心',
      description: '作为 INFJ，拥有极强的同理心与执行力。主导过千人 AI 技能社群运营与大型会议策划。擅长撰写高质量的沉淀文档，在跨部门沟通中寻找最优解，让技术有温度地服务于人。',
      tags: ['项目 SOP 制定', '社群运营', '活动策划', '跨部门协同'],
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
        >
          <h1 className="text-5xl font-serif font-medium leading-tight tracking-wide">
            What can I do
          </h1>
        </motion.div>

        {/* Skills Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16"
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
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/40 border border-stone-200 rounded-3xl p-10 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-stone-200/50 group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              {/* Watermark Icon */}
              <div className="absolute -right-6 -top-6 text-stone-100 size-32 transition-transform duration-500 group-hover:scale-110">
                <skill.icon className="w-full h-full" strokeWidth={1} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-stone-800">
                  {skill.title}
                </h3>

                <p className="text-sm leading-relaxed text-stone-500 mb-8 min-h-[100px]">
                  {skill.description}
                </p>

                {/* Tag Cloud */}
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-2 rounded-full border border-stone-200 text-xs font-medium bg-stone-50 text-stone-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Credentials */}
        <motion.div
          className="mt-16 border-t border-stone-200 pt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* Left Title */}
            <div className="min-w-max w-[350px] flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-stone-800 mb-2">
                Certifications & Credentials
              </h2>
              <p className="text-xs text-stone-500 font-serif italic">
                Language Proficiency & Professional Licenses
              </p>
            </div>

            {/* Right Cards */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                  name: "IELTS 7.5"
                },
                {
                  name: "国际关系学院优秀毕业生"
                },
                {
                  name: "CET-6 607"
                },
                {
                  name: "高级中学英语教师资格证"
                },
                {
                  name: "TEM-8 优秀"
                },
                {
                  name: "校级奖项若干"
                }
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-stone-200 bg-white hover:shadow-sm transition-all w-full min-h-[60px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 * index }}
                  >
                    <CheckCircle className="w-4 h-4 text-stone-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="font-semibold text-stone-800">{cert.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
