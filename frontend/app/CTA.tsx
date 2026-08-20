"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { FaArrowRight } from 'react-icons/fa'

interface CTAProps {
  eyebrow?: string
  heading: string
  copy?: string
  buttonLabel?: string
  buttonHref?: string
}

const CTA: React.FC<CTAProps> = ({
  eyebrow = "Have a project in mind?",
  heading,
  copy,
  buttonLabel = "Let's Talk",
  buttonHref = '/contact',
}) => {
  return (
    <section className="w-full editorial-section-lg border-t border-outline-variant/10 bg-surface-container-lowest">
      <div className="editorial-container flex flex-col items-center text-center gap-stack-lg">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-label-caps text-tertiary"
        >
          {eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-display-lg text-on-surface max-w-4xl uppercase"
        >
          {heading}
        </motion.h2>
        {copy && <p className="text-body-lg text-on-surface-variant max-w-md">{copy}</p>}
        <Link href={buttonHref} className="editorial-btn-primary mt-4">
          {buttonLabel} <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </section>
  )
}

export default CTA
