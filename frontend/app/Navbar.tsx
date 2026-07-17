"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa"
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

export default function Navbar() {

    const [scrolled, setScrolled] = useState<boolean>(false)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = (): void => {
            setScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => setIsOpen(!isOpen)

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
                className='navbar-container flex justify-around items-center text-white p-2' id='navbar'>
                
                {/* Logo */}
                <div className='navbar-logo flex justify-around items-center'>
                    <div className={`text-4xl font-normal ${change.className}`}>Saad<span className='text-gray-500'>i</span></div>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className='navbar-hamburger hidden'>
                    <button onClick={toggleMenu} aria-label="Toggle Menu" className="focus:outline-none text-white">
                        {isOpen ? <FaTimes className='size-6' /> : <FaBars className='size-6' />}
                    </button>
                </div>

                {/* Navigation Links and Social Icons */}
                <div className={`navbar-menu flex items-center gap-4 ${isOpen ? 'open' : ''}`}>
                    <div className={`${playfair.className} navbar-links flex justify-around items-center gap-4 text-2xl`}>
                        <Link href={"/"} onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href={"/about"} onClick={() => setIsOpen(false)}>About</Link>
                        <Link href={"/contact"} onClick={() => setIsOpen(false)}>Contact</Link>
                        <Link href={"/skills"} onClick={() => setIsOpen(false)}>Skills</Link>
                    </div>
                    <div className='navbar-socials flex justify-around items-center gap-5'>
                        <Link href={"https://www.instagram.com/saadi__iiii?igsh=MXBxdzBoajJyYWhieg=="} target='_blank' onClick={() => setIsOpen(false)}><FaInstagram className='social-icon size-8' /></Link>
                        <Link href={"https://github.com/saadi-ii"} target='_blank' onClick={() => setIsOpen(false)}><FaGithub className='social-icon size-8' /></Link>
                        <Link href={"https://www.linkedin.com/in/saad-hameed-developer?utm_source=share_via&utm_content=profile&utm_medium=member_android"} target='_blank' onClick={() => setIsOpen(false)}><BsLinkedin className='social-icon size-8' /></Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
