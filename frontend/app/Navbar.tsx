"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { FaInstagram } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { BsLinkedin } from "react-icons/bs"
import { Changa, Playfair } from 'next/font/google'

const change = Changa({
    subsets: ["latin"],
    weight: ["700"],
    display: "swap",
})

const playfair = Playfair({
    subsets: ["latin"],
    weight: ["700"],
    display: "swap",
})

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = (): void => {
            setScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={`bg-gray-800 sticky top-0 z-10 transition-all ease-in-out${scrolled ? ' scrolled' : ''}`}>
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.5,
                }}
                className='flex justify-around items-center text-white p-2' id='navbar'>
                <div className='flex justify-around items-center'>
                    <div className={`text-4xl font-normal ${change.className}`}>Saad<span className='text-gray-500'>i</span></div>
                </div>
                <div className={`${playfair.className} flex justify-around items-center gap-4 text-2xl`}>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/contact"}>Contact</Link>
                    <Link href={"/skills"}>Skills</Link>
                </div>
                <div className='flex justify-around items-center gap-5'>
                    <Link href={"https://www.instagram.com/saadi__iiii?igsh=MXBxdzBoajJyYWhieg=="} target='_blank'><FaInstagram className='size-8' /></Link>
                    <Link href={"https://github.com/saadi-ii"} target='_blank'><FaGithub className='size-8' /></Link>
                    <Link href={"https://www.linkedin.com/in/saad-hameed-developer?utm_source=share_via&utm_content=profile&utm_medium=member_android"} target='_blank'><BsLinkedin className='size-8' /></Link>
                </div>
            </motion.div>
        </div>
    )
}

export default Navbar
``