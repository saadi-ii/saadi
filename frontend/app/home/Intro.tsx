"use client"

import React from 'react'
import { Teko } from "next/font/google"
import { motion } from 'motion/react'
import type { Variants } from 'motion/react'
import { usePersonalData } from "../hooks/usePersonalData"

const teko = Teko({
    subsets: ["latin"],
    weight: ["700"],
})

const Intro: React.FC = () => {
    const { data, loading } = usePersonalData()

    const nameParts = (loading ? "Saad Hameed" : (data?.name ?? "Saad Hameed")).split(" ")
    const firstName = nameParts[0] ?? "Saad"
    const lastName = nameParts.slice(1).join(" ") || "Hameed"

    const text = "Hey I'm"
    const text2 = "Full Stack Web Developer"
    const letters = text.split("")
    const letters2 = text2.split("")

    // Variants for the container that manages the stagger
    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
        }),
    }

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
    }

    return (
        <motion.div
            animate={{
                x: 10,
                opacity: 1
            }}
            transition={{
                duration: 0.5,
            }}
            className='opacity-0'>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className='text-xl text-white font-bold inline-block'
            >
                {letters.map((letter, index) => (
                    <motion.span
                        variants={child}
                        key={index}
                        className="text-xl text-white font-bold inline-block"
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.div>
            <div className={`${teko.className} text-white `}>
                <motion.div className='text-8xl opacity-0' animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    {firstName}
                </motion.div>
                <motion.div animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className='text-6xl opacity-0'>
                    {lastName}
                </motion.div>
            </div>
            <div className="mt-4">
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
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className='text-xl text-white font-bold inline-block'
            >
                {letters2.map((letter, index) => (
                    <motion.span
                        variants={child}
                        key={index}
                        className="text-lg text-gray-400 inline-block"
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Intro
