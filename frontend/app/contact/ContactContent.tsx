"use client"

import React from 'react'
import Link from 'next/link'
import Form from './Form'
import { usePersonalData } from '../hooks/usePersonalData'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saad-hameed-developer' },
  { label: 'GitHub', href: 'https://github.com/saadi-ii' },
  { label: 'Instagram', href: 'https://www.instagram.com/saadi__iiii' },
]

const ContactContent: React.FC = () => {
  const { data, loading } = usePersonalData()

  const email = loading ? '...' : (data?.email ?? 'saadhameed588@gmail.com')
  const phone = loading ? '...' : (data?.phone ? `0${data.phone}` : '0341-8853396')
  const address = loading ? '...' : (data?.address ?? 'Islamabad, Pakistan')

  return (
    <div className="editorial-container pt-section-v-md pb-section-v-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-5 flex flex-col gap-section-v-md lg:sticky lg:top-32">
          <div className="flex flex-col gap-stack-lg">
            <div className="flex flex-col gap-4">
              <h1 className="text-display-lg text-on-surface uppercase">Let&apos;s Talk</h1>
              <p className="text-body-lg text-on-surface-variant max-w-sm">
                Have a project in mind? Tell me about it. I&apos;m currently accepting new freelance commissions.
              </p>
            </div>
            <div className="flex flex-col gap-stack-md pt-stack-lg border-t border-outline-variant/20">
              <div className="flex flex-col gap-2">
                <span className="text-label-caps text-on-surface-variant">Email</span>
                <a href={`mailto:${email}`} className="text-body-lg text-on-surface hover:text-tertiary transition-colors">{email}</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-label-caps text-on-surface-variant">Phone</span>
                <span className="text-body-lg text-on-surface">{phone}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-label-caps text-on-surface-variant">Location</span>
                <span className="text-body-lg text-on-surface">{address}</span>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <span className="text-label-caps text-on-surface-variant">Social</span>
                <div className="flex gap-4">
                  {socialLinks.map(({ label, href }) => (
                    <Link key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-nav-link text-on-surface uppercase editorial-link">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 mt-section-v-md lg:mt-0">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default ContactContent
