"use client"

import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'
import { usePersonalData } from "../hooks/usePersonalData"

const Pic: React.FC = () => {
  const { data, loading } = usePersonalData()

  return (
    <div>
      <motion.div
        initial={{
          y: -10,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.5,
        }}
        className='w-80 h-80 rounded-full bg-gray-200 relative overflow-hidden'
      >
        {!loading && data?.image && (
          <Image
            alt={data.name || 'Saad'}
            fill
            className='object-cover rounded-full'
            src={data.image}
          />
        )}
      </motion.div>
    </div>
  )
}

export default Pic
