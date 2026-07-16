import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'

interface ProjectsProps {
  url: string
  image: string
  name: string
  description: string
}

const Projects: React.FC<ProjectsProps> = (props) => {
  return (
    <Link href={props.url} target='_blank'>
    <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        className="bg-no-repeat bg-center bg-cover w-150 h-100 rounded-2xl relative mb-3"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className='absolute left-5 bottom-5'>
          <div className='text-2xl font-bold'>{props.name}</div>
          <div className='text-xl text-gray-200'>{props.description}</div>
        </div>

      </motion.div >
    </Link>
  )
}

export default Projects
