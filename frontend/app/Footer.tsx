import React from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/skills' },
  { label: 'Contact', href: '/contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saad-hameed-developer' },
  { label: 'GitHub', href: 'https://github.com/saadi-ii' },
  { label: 'Instagram', href: 'https://www.instagram.com/saadi__iiii' },
]

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/20 pt-section-v-md pb-stack-lg">
      <div className="editorial-container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-stack-lg mb-section-v-md">
          <div className="text-display-md !text-3xl md:!text-5xl text-on-surface max-w-md">Saad Hameed</div>

          <div className="grid grid-cols-2 gap-stack-lg">
            <div className="flex flex-col gap-4">
              <p className="text-label-caps text-on-surface-variant">Navigation</p>
              <nav className="flex flex-col gap-2">
                {navLinks.map(({ label, href }) => (
                  <Link key={label} href={href} className="text-nav-link text-on-surface hover:text-tertiary transition-colors">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-label-caps text-on-surface-variant">Social</p>
              <nav className="flex flex-col gap-2">
                {socialLinks.map(({ label, href }) => (
                  <Link key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-nav-link text-on-surface hover:text-tertiary transition-colors">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-outline-variant/10">
          <p className="text-label-caps text-on-surface-variant">© {year} Saad Hameed. All rights reserved.</p>
          <p className="text-label-caps text-on-surface-variant">Stay Creative.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
