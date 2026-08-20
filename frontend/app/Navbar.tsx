"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/skills' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b border-outline-variant/30 transition-colors duration-300 ${
        scrolled ? 'bg-surface/95 backdrop-blur-md' : 'bg-surface/80 backdrop-blur-sm'
      }`}
    >
      <div className="editorial-container flex items-center justify-between" style={{ height: 'var(--size-nav-h)' }}>
        <Link href="/" className="text-display-md !text-xl md:!text-2xl text-on-surface" style={{ fontStyle: 'normal' }}>
          Saad<span className="text-tertiary">.</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-stack-lg">
          {navLinks.map(({ label, href }) => {
            const active = href === '/' ? pathname === '/' : pathname?.startsWith(href)
            return (
              <Link
                key={label}
                href={href}
                className={`text-nav-link uppercase transition-colors  ${
                  active ? 'text-on-surface font-bold border-b transition-all pb-1' : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4 sm:gap-6">
          <ThemeToggle />
          <Link href="/contact" className="hidden sm:inline-flex text-label-caps text-on-surface editorial-link">
            Let&apos;s Talk
          </Link>
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="lg:hidden text-on-surface"
          >
            {isOpen ? <FaTimes className="size-5" /> : <FaBars className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-surface border-t border-outline-variant/20 overflow-hidden"
          >
            <div className="editorial-container flex flex-col gap-stack-md py-stack-lg">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-headline-lg !text-2xl text-on-surface"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-label-caps text-tertiary mt-4"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
