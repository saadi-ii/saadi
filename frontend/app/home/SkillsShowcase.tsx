"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import { useSkillsData } from '../hooks/useSkillsData'

const SkillsShowcase: React.FC = () => {
  const { skills, loading } = useSkillsData()

  if (!loading && skills.length === 0) return null

  const looped = loading ? [] : [...skills, ...skills]

  return (
    <section className="w-full editorial-section border-t border-outline-variant/10 overflow-hidden">
      <div className="editorial-container flex flex-col gap-stack-lg mb-stack-lg">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <p className="text-label-caps text-tertiary">Tech Stack</p>
          <h2 className="text-display-md text-on-surface uppercase">Tools I Work With.</h2>
        </motion.div>
      </div>

      <div className="marquee-row relative w-full">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        {loading ? (
          <div className="flex w-full overflow-hidden">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-4 shrink-0 w-36 md:w-44 py-8 mx-3">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-surface-container-low animate-pulse" />
                <div className="h-3 w-16 rounded bg-surface-container-low animate-pulse" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex w-max marquee-track">
            {looped.map((skill, i) => (
              <div
                key={`${skill._id}-${i}`}
                className="group flex flex-col items-center justify-center gap-4 shrink-0 w-36 md:w-44 py-8 mx-3"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border border-outline-variant/20 bg-surface-container-low group-hover:border-tertiary/60 group-hover:bg-surface-container transition-all duration-500 group-hover:-translate-y-1">
                  {skill.image && (
                    <Image
                      alt={skill.name ?? ''}
                      src={skill.image}
                      width={36}
                      height={36}
                      className="object-contain opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                </div>
                {skill.name && (
                  <span className="text-label-caps text-on-surface-variant group-hover:text-on-surface transition-colors text-center">
                    {skill.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default SkillsShowcase
