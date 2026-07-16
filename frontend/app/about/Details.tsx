"use client"

import React from 'react'
import { Teko } from "next/font/google"
import { usePersonalData } from "../hooks/usePersonalData"

const teko = Teko({
    subsets: ["latin"],
    weight: ["700"],
})

const Details: React.FC = () => {
    const { data, loading } = usePersonalData()

    return (
        <div>
            <div className='m-10'>
                <div className={`${teko.className}`}>
                    <div className='text-5xl'>{loading ? "Loading..." : (data?.name ?? "Saad Hameed")}</div>
                </div>
                <div className='text-lg text-gray-700'>Full Stack Web Developer</div>
            </div>
            <div>
                <p>{loading ? "" : (data?.about ?? "")}</p>
            </div>
            <div className='grid grid-cols-3 p-20'>
                <div className='flex gap-5'>
                    <div className={`${teko.className} text-3xl`}>BIRTHDAY</div>
                    <div className='text-xl text-gray-600'>{loading ? "" : (data?.birthday ?? "reloading error...")}</div>
                </div>
                <div className='flex gap-5'>
                    <div className={`${teko.className} text-3xl`}>STUDY</div>
                    <div className='text-xl text-gray-600'>{loading ? "" : (data?.study ?? "reloading error...")}</div>
                </div>
                <div className='flex gap-5'>
                    <div className={`${teko.className} text-3xl`}>EMAIL</div>
                    <div className='text-xl text-gray-600'>{loading ? "" : (data?.email ?? "reloading error...")}</div>
                </div>
                <div className='flex gap-5'>
                    <div className={`${teko.className} text-3xl`}>AGE</div>
                    <div className='text-xl text-gray-600'>{loading ? "" : (data?.age ?? "reloading error...")}</div>
                </div>
                <div className='flex gap-5'>
                    <div className={`${teko.className} text-3xl`}>DEGREE</div>
                    <div className='text-xl text-gray-600'>{loading ? "" : (data?.degree ?? "reloading error...")}</div>
                </div>
                <div className='flex gap-5'>
                    <div className={`${teko.className} text-3xl`}>PHONE</div>
                    <div className='text-xl text-gray-600'>{loading ? "" : (data?.phone ? `0${data.phone}` : "reloading error...")}</div>
                </div>
                <div className='flex gap-5'>
                    <div className={`${teko.className} text-3xl`}>NATIONALITY</div>
                    <div className='text-xl text-gray-600'>{loading ? "" : (data?.nationality ?? "reloading error...")}</div>
                </div>
                <div className='flex gap-5'>
                    <div className={`${teko.className} text-3xl`}>FRELANCE</div>
                    <div className='text-xl text-gray-600'>{loading ? "" : (data?.frelance ?? "reloading error...")}</div>
                </div>
                <div className='flex gap-5'>
                    <div className={`${teko.className} text-3xl`}>ADDRESS</div>
                    <div className='text-xl text-gray-600'>{loading ? "" : (data?.address ?? "reloading error...")}</div>
                </div>
            </div>
        </div>
    )
}

export default Details
