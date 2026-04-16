'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-[#F7F7F7] border-b border-stone-200 py-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Left: Name */}
        <Link href="/" className="text-xl font-bold text-[#111111] hover:text-stone-600 transition-colors no-underline">
          Yixuan Li
        </Link>
        
        {/* Right: Navigation Links */}
        <div className="flex gap-8 items-center">
          <Link href="/about" className="text-sm text-[#111111] hover:text-stone-600 transition-colors no-underline">
            About
          </Link>
          <Link href="/skill" className="text-sm text-[#111111] hover:text-stone-600 transition-colors no-underline">
            Skill
          </Link>
          <Link href="/project" className="text-sm text-[#111111] hover:text-stone-600 transition-colors no-underline">
            Project
          </Link>
          <Link href="/portfolio" className="text-sm text-[#111111] hover:text-stone-600 transition-colors no-underline">
            Portfolio
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}