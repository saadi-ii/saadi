"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { FaArrowRight, FaInstagram, FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { MdArrowRightAlt } from 'react-icons/md'
import ProjectsGallery from './ProjectsGallery'
import SkillsShowcase from './SkillsShowcase'
import CTA from '../CTA'
import { usePersonalData } from '../hooks/usePersonalData'
import { useCoverProjectsData } from '../hooks/useCoverProjectsData'

const socialLinks = [
  { icon: FaInstagram, href: 'https://www.instagram.com/saadi__iiii', label: 'Instagram' },
  { icon: FaGithub, href: 'https://github.com/saadi-ii', label: 'GitHub' },
  { icon: BsLinkedin, href: 'https://www.linkedin.com/in/saad-hameed-developer', label: 'LinkedIn' },
]

const techStack = [
  {
    title: 'Frontend',
    items: ['React.js / Next.js', 'TypeScript / JavaScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['Node.js / Express', 'RESTful APIs', 'Authentication (JWT)', 'Server Architecture'],
  },
  {
    title: 'Database',
    items: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Prisma ORM'],
  },
  {
    title: 'Tools & DevOps',
    items: ['Git / GitHub', 'Vercel', 'Docker', 'Figma'],
  },
]

const HomeContent: React.FC = () => {
  const { data, loading } = usePersonalData()
  const { projects, loading: projectsLoading } = useCoverProjectsData()

  const name = loading ? 'Saad Hameed' : (data?.name ?? 'Saad Hameed')

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      <section className="w-full editorial-container flex flex-col justify-center  py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 flex flex-col gap-stack-lg">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-stack-sm">
              <p className="text-label-caps text-tertiary">Full Stack Web Developer</p>
              <h1 className="text-display-md text-on-surface uppercase max-w-[800px]">
                Building digital experiences that make an impact.
              </h1>
            </motion.div>
            <div className='max-w-[500px] border-l border-outline-variant/30 pl-6 py-2 overflow-hidden'>
              <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-body-lg text-on-surface-variant"
            >
              Crafting modern, high-performance web experiences with a passion for clean code and beautiful design. Let&apos;s build something great together.
            </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
            >
              <Link href="/skills" className="editorial-btn-primary">
                View My Work <FaArrowRight className="text-xs" />
              </Link>
              <Link href="/contact" className="editorial-btn-secondary">
                Let&apos;s Talk
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 pt-2"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-11 h-11 rounded-full border border-outline-variant/30 text-on-surface-variant hover:text-tertiary hover:border-tertiary/60 transition-colors duration-300"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-6 relative mt-16 lg:mt-0 h-[50vh] lg:h-[70vh] w-full group overflow-hidden bg-surface-container-highest">
              <Image
                alt={name}
                src={"/coverpage.png"}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover opacity-90 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="flex flex-col gap-2">
                <p className="text-label-caps !text-[10px] text-tertiary">[ Ident ]</p>
                <p className="text-label-caps text-on-surface">{name}</p>
              </div>
              <div className="text-right flex flex-col gap-2">
                <p className="text-label-caps !text-[10px] text-tertiary">[ Est ]</p>
                <p className="text-label-caps text-on-surface">2022</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-outline-variant/20 mt-section-v-md pt-8 flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-label-caps !text-[10px] text-on-surface-variant">Based In</span>
            <span className="text-label-caps text-on-surface">Pakistan</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-label-caps !text-[10px] text-on-surface-variant">Specialized In</span>
            <span className="text-label-caps text-on-surface">Full Stack Development</span>
          </div>
          <div className="flex flex-col gap-2 md:text-right">
            <span className="text-label-caps !text-[10px] text-on-surface-variant">Status</span>
            <span className="text-label-caps text-tertiary flex items-center md:justify-end gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
              Available For Select Projects
            </span>
          </div>
        </div>
      </section>

      <SkillsShowcase />

      {/* ABOUT TEASER */}
      <section className="w-full editorial-section border-t border-outline-variant/10">
        <div className="editorial-container grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
          <div className="md:col-span-4">
            <p className="text-label-caps text-tertiary">About My Work</p>
          </div>
          <div className="md:col-span-8 flex flex-col gap-stack-lg">
            <h2 className="text-headline-lg text-on-surface">I build digital products from idea to deployment.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-lg border-t border-outline-variant/20 pt-12">
              <p className="text-body-lg text-on-surface-variant">
                As a Full Stack Web Developer, I work across frontend, backend, databases and application architecture to build modern, scalable and maintainable web applications.
              </p>
              <div className="flex items-start sm:justify-end">
                <Link href="/about" className="group inline-flex items-center gap-4 text-nav-link text-on-surface uppercase editorial-link">
                  More About Me <MdArrowRightAlt className="text-xl transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SELECTED WORK */}
      <section className="w-full editorial-section-lg border-t border-outline-variant/10">
        <div className="editorial-container">
          <div className="flex justify-between items-end mb-section-v-md border-b border-outline-variant/20 pb-8">
            <div className="flex flex-col gap-4">
              <p className="text-label-caps text-tertiary">Selected Work</p>
              <h2 className="text-display-md text-on-surface uppercase">Archive.</h2>
            </div>
            <Link href="/skills" className="hidden md:inline-flex items-center gap-4 text-nav-link text-on-surface uppercase hover:text-tertiary transition-colors">
              View All Projects <MdArrowRightAlt className="text-xl" />
            </Link>
          </div>

          {projectsLoading ? (
            <p className="text-body-md text-on-surface-variant">Loading projects…</p>
          ) : projects.length === 0 ? (
            <p className="text-body-md text-on-surface-variant">Projects coming soon.</p>
          ) : (
            <ProjectsGallery projects={projects} />
          )}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="w-full editorial-section border-t border-outline-variant/10">
        <div className="editorial-container grid grid-cols-2 md:grid-cols-4 gap-gutter border-t border-outline-variant/20 pt-16">
          {techStack.map((group) => (
            <div key={group.title}>
              <h3 className="text-label-caps text-tertiary mb-8">{group.title}</h3>
              <ul className="flex flex-col gap-4 text-body-md text-on-surface-variant">
                {group.items.map((item) => (
                  <li key={item} className="hover:text-on-surface hover:pl-2 transition-all duration-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CTA heading="Let's Make Something Great." copy="Let's turn your idea into a modern digital experience. Available for new opportunities." buttonLabel="Let's Talk" />
    </div>
  )
}

export default HomeContent
