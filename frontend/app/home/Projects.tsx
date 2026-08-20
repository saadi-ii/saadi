import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { FaArrowRight } from 'react-icons/fa'

interface ProjectsProps {
  url: string
  image: string
  name: string
  description: string
  index: number
}

const Projects: React.FC<ProjectsProps> = ({ url, image, name, description, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="flex flex-col group"
    >
      <Link href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative w-full aspect-[4/3] overflow-hidden mb-6 bg-surface-container-highest">
          {image && (
            <Image
              src={image}
              alt={name}
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 ease-out"
            />
          )}
          <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors duration-700" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-label-caps text-tertiary">{String(index).padStart(2, '0')} — Project</span>
          <h3 className="text-headline-lg !text-2xl text-on-surface group-hover:text-tertiary transition-colors">{name}</h3>
          <p className="text-body-md text-on-surface-variant">{description}</p>
          <span className="inline-flex items-center gap-4 text-nav-link text-on-surface uppercase editorial-link shrink-0 w-fit mt-2">
            View Project <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}

export default Projects
