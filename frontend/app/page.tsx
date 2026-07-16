"use client"

import Masonry from 'react-masonry-css'
import Intro from "./home/Intro"
import Info from "./home/Info"
import Pic from "./home/Pic"
import Skills from "./home/Skills"
import Projects from "./home/Projects"
import { Teko } from "next/font/google";
import {
  motion,
  useScroll,
  useTransform,
  useSpring
} from "motion/react";
import { useSkillsData } from "./hooks/useSkillsData"
import { useProjectsData } from "./hooks/useProjectsData"

const teko = Teko({
  subsets: ["latin"],
  weight: ["700"],
});

const page = () => {

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [200, -500]);
  const smoothX = useSpring(x, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const { skills, loading: skillsLoading } = useSkillsData()
  const { projects, loading: projectsLoading } = useProjectsData()

  console.log("projects:", projects);
console.log("length:", projects.length);

  return (
    
    <div className='bg-gray-300 box-border overflow-clip scroll-auto'>
      <div className='bg-gray-800 h-115'>
        <div className='flex justify-between px-20 py-40'>
          
          <Intro />
          <Pic />
          <Info projectLength={projects.length}/>
        </div>
      </div>

      <motion.div
        style={{ x: smoothX }}
        className='mt-50 mx-auto p-20 flex gap-20 justify-center w-500'>
        {skillsLoading ? (
          <div className="text-gray-500 text-xl">Loading skills...</div>
        ) : (
          skills.map((skill) => (
            <Skills
              key={skill._id}
              url={skill.image ?? ''}
              name={skill.name ?? ''}
              percentage={skill.percentage ?? '0'}
            />
          ))
        )}
      </motion.div>

      <Masonry
        breakpointCols={2}
        className="flex justify-center items-center bg-gray-800 p-10 text-white"
        columnClassName="space-y-8"
      >
        <motion.div
          className="p-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={`${teko.className} text-5xl`}>
            My Latest Projects
          </div>
          <div className="text-gray-400 text-xl mt-4">
            Projects that speak for themselves.
          </div>
        </motion.div>

        {projectsLoading ? (
          <div className="text-gray-400 text-xl p-10">Loading projects...</div>
        ) : (
          projects.map((project) => (
            <Projects
              key={project._id}
              image={project.image ?? ''}
              name={project.projectName ?? ''}
              description={project.description ?? ''}
              url={project.url ?? '#'}
            />
          ))
        )}
      </Masonry>

      
    </div>
  )
}

export default page
