"use client"

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { Teko } from "next/font/google"
import axios from "axios"

const teko = Teko({
    subsets: ["latin"],
    weight: ["700"],
})

const API_BASE = "http://localhost:7000"

type FormStatus = "idle" | "loading" | "success" | "error" | ""

interface FormData {
    name: string
    email: string
    details: string
    budget: string
}

const Form: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        details: "",
        budget: "",
    })
    const [status, setStatus] = useState<FormStatus>("idle")

    useEffect(() => {
        if (status === "success" || status === "error") {
            const timer = setTimeout(() => {
                setStatus("")
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [status])

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleBudget = (value: string): void => {
        setFormData((prev) => ({ ...prev, budget: value }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.details || !formData.budget) {
            alert("Please fill in all required fields.")
            return
        }
        setStatus("loading")
        try {
            await axios.post(`${API_BASE}/contact`, formData)
            setStatus("success")
            setFormData({ name: "", email: "", details: "", budget: "" })
        } catch (err) {
            console.error("Form submit error:", err)
            setStatus("error")
        }
    }

    const budgetOptions: string[] = ["1-2k", "2-5k", "5-10k", "10k+"]

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2 text-gray-800'>
                <label htmlFor="name" className='text-gray-600 text-xl'>Your Name <span className='text-orange-700 text-2xl'>*</span></label>
                <input
                    type="text"
                    placeholder='Saad Hameed'
                    id='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='text-gray-600 text-xl w-1/2 rounded-xl border-b-2 border-x border-gray-600 py-1 px-5 mb-10'
                />

                <label htmlFor="email" className='text-gray-600 text-xl'>Your Email <span className='text-orange-700 text-2xl'>*</span></label>
                <input
                    type="email"
                    placeholder='Saad@gmail.com'
                    id='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='text-gray-600 text-xl w-1/2 rounded-xl border-b-2 border-x border-gray-600 py-1 px-5 mb-10'
                />

                <label htmlFor="details" className='text-gray-600 text-xl'>Tell Me About Your Project <span className='text-orange-700 text-2xl'>*</span></label>
                <textarea
                    placeholder='I want a super duper website...'
                    id='details'
                    value={formData.details}
                    onChange={handleChange}
                    className='text-gray-600 text-xl w-1/2 rounded-xl border-b-2 border-x border-gray-600 py-1 px-5 mb-10 h-40'
                ></textarea>

                <label htmlFor="budget" className='text-gray-600 text-xl'>
                    Project Budget (USD)
                    <span className='text-gray-800 text-2xl'>*</span>
                </label>

                <div className="flex flex-wrap gap-4 mb-10">
                    {budgetOptions.map((option) => (
                        <label key={option} className="cursor-pointer" onClick={() => handleBudget(option)}>
                            <input
                                type="radio"
                                name="budget"
                                value={option}
                                checked={formData.budget === option}
                                onChange={() => handleBudget(option)}
                                className="hidden peer"
                            />
                            <span className="px-8 py-3 rounded-full bg-gray-200 text-gray-700 peer-checked:bg-gray-800 peer-checked:text-white transition">
                                {option}
                            </span>
                        </label>
                    ))}
                </div>

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className='bg-gray-800 text-white text-2xl px-4 py-1 w-fit rounded-xl disabled:opacity-50 cursor-pointer'
                >
                    {status === "loading" ? "Sending..." : "Submit"}
                </button>
            </form>
            {status === "success" && (
                <div className="mb-6 px-6 py-4 bg-green-100 text-green-800 rounded-xl text-lg w-fit">
                     Message Delivered
                </div>
            )}

            {status === "error" && (
                <div className="mb-6 px-6 py-4 bg-red-100 text-red-800 rounded-xl text-lg w-fit">
                    Submission Failed
                </div>
            )}
        </div>
    )
}

export default Form
