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
        animate={{
          y: 10,
          opacity: 1
        }}
        transition={{
          duration: 0.5,
        }}
        className='w-60 h-100 rounded-full bg-gray-200 opacity-0 flex justify-center items-center relative overflow-hidden'
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
