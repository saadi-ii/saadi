"use client"

import React from 'react'
import { FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"
import { usePersonalData } from "../hooks/usePersonalData"

const ContactDetails: React.FC = () => {
    const { data, loading } = usePersonalData()

    const phone = loading ? "..." : (data?.phone ? `0${data.phone}` : "0341-8853396")
    const email = loading ? "..." : (data?.email ?? "saadhameed588@gmail.com")
    const address = loading ? "..." : (data?.address ?? "Islamabad, The Capital City of Pakistan")

    return (
        <div>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-5 items-center'>
                    <div className="bg-gray-800 p-4 rounded-full">
                        <FaPhoneAlt className="text-white text-2xl" />
                    </div>
                    <span className='text-xl text-gray-800'>{phone}</span>
                </div>
                <div className='flex gap-5 items-center'>
                    <div className="bg-gray-800 p-4 rounded-full">
                        <MdEmail className="text-white text-2xl" />
                    </div>
                    <span className='text-xl text-gray-800'>{email}</span>
                </div>
                <div className='flex gap-5 items-center'>
                    <div className="bg-gray-800 p-4 rounded-full">
                        <FaLocationDot className="text-white text-2xl" />
                    </div>
                    <span className='text-xl text-gray-800'>{address}</span>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails
