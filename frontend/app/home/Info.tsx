import React from 'react'
import { motion } from 'motion/react'

interface InfoProps {
  projectLength: number
  
}
const Info: React.FC<InfoProps> = ({projectLength}) => {
  return (
    <motion.div
            animate={{
                x: -10,
                opacity: 1
            }}
            transition={{
                duration: 0.5,
            }}
            className='opacity-0'>
       <div className='flex flex-col gap-2.5 justify-end items-end'>
            <div className='text-lg text-gray-400'>Started At</div>
            <motion.div animate={{opacity:1}} transition={{duration:1, delay:0.2}} className='text-4xl text-white font-bold opacity-0' >2022</motion.div>
            <div className='text-lg text-gray-400'>No of Projects</div>
            <motion.div animate={{opacity:1}} transition={{duration:1, delay:0.2}} className='text-4xl text-white font-bold opacity-0' >{projectLength}</motion.div>
        </div>

        <div>
            
        </div>
    </motion.div>
  )
}

export default Info
