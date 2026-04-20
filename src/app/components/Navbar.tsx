'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const getLinkClass = (href: string) => {
    if (pathname === href) {
      return "text-base font-medium bg-[#2C2A29] text-[#F9F8F6] px-3 py-1.5 rounded-full transition-colors no-underline whitespace-nowrap"
    }
    return "text-base font-medium text-[#111111] hover:text-stone-600 transition-colors no-underline whitespace-nowrap"
  }

  const navLinks = [
    { href: '/about', label: 'Me' },
    { href: '/project', label: 'Project' },
    { href: '/skill', label: 'Skill' },
    { href: '/portfolio', label: 'Portfolio' },
  ]

  return (
    <>
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-[#F7F7F7] border-b border-stone-200 py-4 md:py-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Left: Name */}
          <Link href="/" className={`text-lg md:text-xl font-serif font-medium tracking-wide ${pathname === '/' ? 'bg-[#2C2A29] text-[#F9F8F6] px-3 md:px-4 py-1.5 md:py-2 rounded-full' : 'text-[#111111] hover:text-stone-600'} transition-colors no-underline`}>
            Yixuan Li
          </Link>
          
          {/* Center: Navigation Links */}
          <div className="hidden md:flex gap-4 md:gap-6 items-center flex-1 justify-center mx-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={getLinkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile: Hamburger Button */}
          <button 
            className="md:hidden p-2 text-[#111111] hover:text-stone-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed top-[52px] right-4 w-40 bg-[#F7F7F7] border border-stone-200 rounded-2xl shadow-lg z-50 md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col p-2 gap-1">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className={`px-4 py-3 rounded-lg transition-colors no-underline text-center ${pathname === link.href ? 'bg-[#2C2A29] text-[#F9F8F6]' : 'text-[#111111] hover:bg-stone-100'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}