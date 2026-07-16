import React from 'react'
import { Teko } from "next/font/google"

const teko = Teko({
    subsets: ["latin"],
    weight: ["700"],
})

const FreeLance: React.FC = () => {
    return (
        <div>
            <div className={`text-4xl text-gray-800 ${teko.className}`}>
                Lets Talk About Your Project
            </div>
            <div>Have an idea worth building? Let&apos;s turn your vision into a powerful, user-focused solution through thoughtful design, clean code, and seamless user experiences.</div>
        </div>
    )
}

export default FreeLance
