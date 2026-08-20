"use client"

import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
  const toggle = () => {
    const html = document.documentElement
    const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
    if (next === 'light') {
      html.setAttribute('data-theme', 'light')
    } else {
      html.removeAttribute('data-theme')
    }
    window.localStorage.setItem('theme', next)
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light and dark mode"
      className="flex items-center justify-center w-9 h-9 rounded-full border border-outline-variant/30 text-on-surface-variant hover:text-tertiary hover:border-tertiary/60 transition-colors duration-300"
    >
      <FaSun className="theme-icon-sun size-3.5" />
      <FaMoon className="theme-icon-moon size-3.5" />
    </button>
  )
}
