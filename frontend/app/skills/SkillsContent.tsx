"use client"

import React from 'react'
import { motion } from 'motion/react'
import Projects from '../home/Projects'
import ProjectsGallery from '../home/ProjectsGallery'
import CTA from '../CTA'
import { useProjectsData } from '../hooks/useProjectsData'

const isImportant = (value?: string) => value === 'true'

const SkillsContent: React.FC = () => {
  const { projects, loading: projectsLoading } = useProjectsData()

  const featuredProjects = projects.filter((p) => isImportant(p.importance))
  const otherProjects = projects.filter((p) => !isImportant(p.importance))

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <p
          aria-hidden
          className="pointer-events-none select-none absolute -top-4 md:top-0 right-0 text-display-lg uppercase text-on-surface/5 whitespace-nowrap"
          style={{ fontSize: 'clamp(6rem, 22vw, 16rem)', lineHeight: 0.85 }}
        >
          Work
        </p>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--color-outline-variant) 1px, transparent 1px), linear-gradient(to bottom, var(--color-outline-variant) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="editorial-container relative z-10 pt-section-v-lg pb-section-v-md flex flex-col gap-stack-lg">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-stack-sm md:w-2/3"
          >
            <div className="flex items-center gap-4 mb-2">
              <span className="w-12 h-px bg-outline-variant" />
              <span className="text-label-caps text-on-surface-variant">Portfolio</span>
            </div>
            <h1 className="text-display-lg text-on-surface uppercase">Work</h1>
            <h2 className="text-label-caps text-tertiary mt-4">Selected Projects</h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-body-lg text-on-surface-variant max-w-2xl"
          >
            Every pixel has a purpose. Every animation tells a story. Here&apos;s a look at the projects I&apos;ve shaped from idea to deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full border-t border-outline-variant/20 mt-stack-lg pt-8 flex flex-col sm:flex-row gap-8"
          >
            <div className="flex flex-col gap-2">
              <span className="text-label-caps !text-[10px] text-on-surface-variant">Projects</span>
              <span className="text-label-caps text-on-surface">
                {projectsLoading ? '—' : String(projects.length).padStart(2, '0')}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label-caps !text-[10px] text-on-surface-variant">Focus</span>
              <span className="text-label-caps text-on-surface">Full Stack Development</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label-caps !text-[10px] text-on-surface-variant">Status</span>
              <span className="text-label-caps text-tertiary flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                Available For Select Projects
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="w-full editorial-section-lg border-t border-outline-variant/10">
        <div className="editorial-container">
          <div className="flex flex-col gap-4 mb-section-v-md border-b border-outline-variant/20 pb-8">
            <p className="text-label-caps text-tertiary">Featured Work</p>
            <h2 className="text-display-md text-on-surface uppercase">Highlights.</h2>
          </div>

          {projectsLoading ? (
            <p className="text-body-md text-on-surface-variant">Loading projects…</p>
          ) : featuredProjects.length === 0 ? (
            <p className="text-body-md text-on-surface-variant">Featured projects coming soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {featuredProjects.map((project, i) => (
                <Projects
                  key={project._id}
                  image={project.image ?? ''}
                  name={project.projectName ?? ''}
                  description={project.description ?? ''}
                  url={project.url ?? '#'}
                  index={i + 1}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* OTHER PROJECTS */}
      {!projectsLoading && otherProjects.length > 0 && (
        <section className="w-full editorial-section-lg border-t border-outline-variant/10">
          <div className="editorial-container">
            <div className="flex flex-col gap-4 mb-section-v-md border-b border-outline-variant/20 pb-8">
              <p className="text-label-caps text-tertiary">More Work</p>
              <h2 className="text-display-md text-on-surface uppercase">Archive.</h2>
            </div>
          </div>
          <ProjectsGallery projects={otherProjects} />
        </section>
      )}

      <CTA
        heading="Let's Make Something Great."
        copy="Available for select freelance opportunities. Reach out for collaboration or inquiries."
        buttonLabel="Get In Touch"
      />
    </div>
  )
}

export default SkillsContent
