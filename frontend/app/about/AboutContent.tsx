"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import CTA from '../CTA'
import { usePersonalData } from '../hooks/usePersonalData'

const AboutContent: React.FC = () => {
  const { data, loading } = usePersonalData()

  const name = loading ? 'Saad Hameed' : (data?.name ?? 'Saad Hameed')
  const about = loading ? '' : (data?.about ?? '')

  const details = [
    { label: 'Birthday', value: data?.birthday },
    { label: 'Study', value: data?.study },
    { label: 'Degree', value: data?.degree },
    { label: 'Nationality', value: data?.nationality },
    { label: 'Freelance', value: data?.frelance },
    { label: 'Location', value: data?.address },
    { label: 'Age', value: data?.age },
    { label: 'Email', value: data?.email },
    { label: 'Phone', value: data?.phone ? `0${data.phone}` : undefined },
  ].filter((d) => !loading && d.value)

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="w-full editorial-container pt-section-v-md pb-section-v-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
          <div className="lg:col-span-8 flex flex-col justify-end">
            <div className="flex items-center gap-4 mb-stack-lg">
              <span className="w-12 h-px bg-outline-variant" />
              <span className="text-label-caps text-on-surface-variant">About Me</span>
            </div>
            <h1 className="text-display-lg text-on-surface uppercase mb-6">{name}</h1>
            <p className="text-label-caps text-tertiary mb-stack-lg">Full Stack Web Developer</p>
            <h2 className="text-headline-lg text-on-surface max-w-3xl">
              A passion for building clean, efficient, and impactful digital solutions.
            </h2>
          </div>
          <div className="lg:col-span-4 mt-stack-lg lg:mt-0 relative group">
            <div className="absolute inset-0 bg-surface-container-highest translate-x-4 -translate-y-4 z-0 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full aspect-[3/4] relative z-10 bg-surface-container-highest overflow-hidden"
            >
                <Image
                  alt={name}
                  src={"/about.png"}
                  fill
                  sizes="(min-width: 1024px) 25vw, 60vw"
                  className="object-cover grayscale contrast-125"
                />
            </motion.div>
          </div>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section className="w-full bg-surface-container-lowest editorial-section border-t border-outline-variant/20">
        <div className="editorial-container grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-7 lg:col-start-2 flex flex-col gap-stack-lg">
            <p className="text-body-lg text-on-surface-variant">
              {about ||
                'Since beginning my professional journey as a developer in 2022, I have immersed myself in the architecture of the web — balancing the structural integrity of backend systems with the polish of high-end user interfaces.'}
            </p>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 mt-stack-lg lg:mt-0 flex flex-col gap-8">
            {details.length > 0 ? (
              details.map((d) => (
                <div key={d.label} className="flex flex-col gap-2 pb-6 border-b border-outline-variant/30">
                  <span className="text-label-caps text-on-surface-variant">{d.label}</span>
                  <span className="text-body-md text-on-surface">{d.value}</span>
                </div>
              ))
            ) : (
              <div className="flex flex-col gap-2 pb-6 border-b border-outline-variant/30">
                <span className="text-label-caps text-on-surface-variant">Availability</span>
                <span className="text-body-md text-tertiary">Open for opportunities</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Next Steps"
        heading="Let's build something extraordinary together."
        buttonLabel="Start A Conversation"
      />
    </div>
  )
}

export default AboutContent
