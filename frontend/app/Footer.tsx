"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import type { Easing } from 'motion/react'
import { Changa, Teko } from 'next/font/google'
import { FaInstagram, FaPhoneAlt, FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import { usePersonalData } from './hooks/usePersonalData'
import type { IconType } from 'react-icons'

const changa = Changa({
  subsets: ['latin'],
  weight: ['700'],
  display: 'swap',
})

const teko = Teko({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

interface NavLink {
  label: string
  href: string
}

interface SocialLink {
  icon: IconType
  href: string
  label: string
  color: string
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks: SocialLink[] = [
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/saadi__iiii?igsh=MXBxdzBoajJyYWhieg==',
    label: 'Instagram',
    color: '#E1306C',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/',
    label: 'GitHub',
    color: '#ffffff',
  },
  {
    icon: BsLinkedin,
    href: 'https://www.linkedin.com/in/saad-hameed-developer?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    label: 'LinkedIn',
    color: '#0A66C2',
  },
]

const EASE: Easing = 'easeOut'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay },
  }),
}

const Footer: React.FC = () => {
  const { data, loading } = usePersonalData()

  const email   = loading ? '...' : (data?.email   ?? 'saadhameed588@gmail.com')
  const phone   = loading ? '...' : (data?.phone   ? `0${data.phone}` : '0341-8853396')
  const address = loading ? '...' : (data?.address ?? 'Islamabad, Pakistan')

  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #1f2937 0%, #111827 60%, #0d1117 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Decorative top strip */}
      <div
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #86efac, #34d399, #6ee7b7, transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* Brand column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-5"
          >
            <div>
              <span className={`${changa.className} text-5xl text-white leading-none`}>
                Saad
              </span>
              <span className={`${changa.className} text-5xl text-gray-500 leading-none`}>
                i
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Crafting modern, high-performance web experiences with a passion
              for clean code and beautiful design. Let&#39;s build something great
              together.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-2">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-gray-800 border border-gray-700 transition-all duration-300 hover:scale-110 hover:border-gray-400"
                  style={{ '--hoverColor': color } as React.CSSProperties}
                >
                  <Icon
                    className="size-5 text-gray-400 transition-colors duration-300 group-hover:text-gray-300"
                  />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Navigation column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.15}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6"
          >
            <h3
              className={`${teko.className} text-2xl text-white tracking-widest uppercase`}
              style={{ letterSpacing: '0.18em' }}
            >
              Quick Links
            </h3>
            <div
              style={{
                width: '40px',
                height: '2px',
                background: 'linear-gradient(90deg, #34d399, transparent)',
              }}
            />
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors duration-300 text-sm"
                  >
                    <span
                      className="inline-block w-0 group-hover:w-4 h-px bg-gray-400 transition-all duration-300"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.3}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6"
          >
            <h3
              className={`${teko.className} text-2xl text-white tracking-widest uppercase`}
              style={{ letterSpacing: '0.18em' }}
            >
              Get In Touch
            </h3>
            <div
              style={{
                width: '40px',
                height: '2px',
                background: 'linear-gradient(90deg, #34d399, transparent)',
              }}
            />
            <ul className="flex flex-col gap-4">
              {/* Phone */}
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-9 h-9 rounded-full bg-gray-900/30 border border-gray-700/40 flex items-center justify-center">
                  <FaPhoneAlt className="text-gray-400 text-xs" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs uppercase tracking-wider">Phone</span>
                  <span className="text-gray-300 text-sm mt-0.5">
                    {loading ? (
                      <span className="inline-block w-24 h-4 rounded bg-gray-700 animate-pulse" />
                    ) : phone}
                  </span>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-9 h-9 rounded-full bg-gray-900/30 border border-gray-700/40 flex items-center justify-center">
                  <MdEmail className="text-gray-400 text-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs uppercase tracking-wider">Email</span>
                  <a
                    href={`mailto:${email}`}
                    className="text-gray-300 text-sm mt-0.5 hover:text-gray-300 transition-colors duration-200"
                  >
                    {loading ? (
                      <span className="inline-block w-36 h-4 rounded bg-gray-700 animate-pulse" />
                    ) : email}
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <div className="shrink-0 w-9 h-9 rounded-full bg-gray-900/30 border border-gray-700/40 flex items-center justify-center">
                  <FaLocationDot className="text-gray-400 text-sm" />
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs uppercase tracking-wider">Location</span>
                  <span className="text-gray-300 text-sm mt-0.5">
                    {loading ? (
                      <span className="inline-block w-32 h-4 rounded bg-gray-700 animate-pulse" />
                    ) : address}
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div
          className="mt-14 mb-6"
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(52,211,153,0.25), rgba(255,255,255,0.1), rgba(52,211,153,0.25), transparent)',
          }}
        />

        {/* ── Bottom bar ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.45}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-3"
        >
          <p className="text-gray-500 text-xs text-center sm:text-left">
            © {year}{' '}
            <span className="text-gray-400 font-semibold">{loading ? '...' : data?.name}</span>
            . All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with{' '}
            <span className="text-gray-400">♥</span>
            {' '}using MERN
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
