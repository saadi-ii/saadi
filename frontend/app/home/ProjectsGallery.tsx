"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface GalleryProject {
  _id: string
  image?: string
  projectName?: string
  url?: string
}

interface ProjectsGalleryProps {
  projects: GalleryProject[]
  columns?: number
}

const ASPECTS = ['3/4', '4/3', '1/1', '4/5'] as const

const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ projects, columns = 4 }) => {
  if (projects.length === 0) return null

  const groups: GalleryProject[][] = Array.from({ length: columns }, () => [])
  projects.forEach((project, i) => groups[i % columns].push(project))

  const autoScroll = projects.length > 6

  const track = (
    <div className="flex gap-6">
      {groups.map((column, ci) => (
        <div
          key={ci}
          className="flex flex-col gap-6 w-48 sm:w-56 md:w-64 shrink-0"
          style={{ marginTop: ci % 2 === 1 ? '2.5rem' : 0 }}
        >
          {column.map((project, pi) => (
            <Link
              key={project._id}
              href={project.url ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden bg-surface-container-highest"
              style={{ aspectRatio: ASPECTS[pi % ASPECTS.length] }}
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.projectName ?? 'Project'}
                  fill
                  sizes="(min-width: 768px) 256px, 45vw"
                  className="object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-label-caps text-on-surface">{project.projectName}</p>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  )

  if (!autoScroll) {
    return (
      <div className="w-full overflow-x-auto">
        <div className="flex justify-center min-w-max mx-auto px-4">{track}</div>
      </div>
    )
  }

  return (
    <div className="marquee-row relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-24 z-10 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max marquee-track gap-6">
        {track}
        {track}
      </div>
    </div>
  )
}

export default ProjectsGallery
