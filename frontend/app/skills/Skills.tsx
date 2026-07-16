"use client"

import React from 'react'
import { Teko } from "next/font/google"
import { motion } from "motion/react"

const teko = Teko({
    subsets: ["latin"],
    weight: ["700"],
})

const Skills: React.FC = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`text-8xl text-white ${teko.className}`}
            >
                My Skills
            </motion.div>
            <svg width="120" height="30" viewBox="0 0 120 30">
                <path
                    d="M5 15 Q20 0 35 15 T65 15 T95 15 T115 15"
                    stroke="#8c8a85"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    )
}

export default Skills
