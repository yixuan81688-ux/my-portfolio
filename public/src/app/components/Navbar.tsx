'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const getLinkClass = (href: string) => {
    if (pathname === href) {
      return "text-base font-medium bg-[#2C2A29] text-[#F9F8F6] px-4 py-2 rounded-full transition-colors no-underline"
    }
    return "text-base font-medium text-[#111111] hover:text-stone-600 transition-colors no-underline"
  }



  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-[#F7F7F7] border-b border-stone-200 py-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >

      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Left: Name */}
        <Link href="/" className={`text-xl font-serif font-medium tracking-wide ${pathname === '/' ? 'bg-[#2C2A29] text-[#F9F8F6] px-4 py-2 rounded-full' : 'text-[#111111] hover:text-stone-600'} transition-colors no-underline`}>
          Yixuan Li
        </Link>
        
        {/* Right: Navigation Links */}
        <div className="flex gap-6 items-center">
          <Link href="/about" className={getLinkClass('/about')}>
            Me
          </Link>
          <Link href="/project" className={getLinkClass('/project')}>
            Project
          </Link>
          <Link href="/skill" className={getLinkClass('/skill')}>
            Skill
          </Link>
          <Link href="/portfolio" className={getLinkClass('/portfolio')}>
            Portfolio
          </Link>
        </div>

      
      </div>
    </motion.nav>
  )
}