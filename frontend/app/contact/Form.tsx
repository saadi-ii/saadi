"use client"

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'
import { FaArrowRight } from 'react-icons/fa'

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:7000"

type FormStatus = "idle" | "loading" | "success" | "error"

interface FormData {
    name: string
    email: string
    details: string
    budget: string
}

const budgetOptions: string[] = ["1k - 2k", "2k - 5k", "5k - 10k", "10k +"]

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
            const timer = setTimeout(() => setStatus("idle"), 3000)
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
            setStatus("error")
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

    return (
        <div className="p-8 md:p-12 bg-surface-container-lowest border border-outline-variant/10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                <div className="relative">
                    <label htmlFor="name" className="block text-label-caps text-on-surface-variant mb-3">Your Name</label>
                    <input
                        type="text"
                        placeholder="Saad Hameed"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-outline-variant/30 py-3 text-body-lg text-on-surface focus:outline-none focus:border-tertiary transition-colors placeholder:text-on-surface-variant/60"
                    />
                </div>

                <div className="relative">
                    <label htmlFor="email" className="block text-label-caps text-on-surface-variant mb-3">Your Email</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-outline-variant/30 py-3 text-body-lg text-on-surface focus:outline-none focus:border-tertiary transition-colors placeholder:text-on-surface-variant/60"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <span className="text-label-caps text-on-surface-variant">Project Budget (USD)</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {budgetOptions.map((option) => (
                            <label key={option} className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="budget"
                                    value={option}
                                    checked={formData.budget === option}
                                    onChange={() => handleBudget(option)}
                                    className="sr-only peer"
                                />
                                <span className="block w-full text-center py-3 border border-outline-variant/20 text-nav-link text-on-surface-variant peer-checked:border-tertiary peer-checked:text-tertiary hover:border-outline-variant/50 transition-all uppercase">
                                    {option}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <label htmlFor="details" className="block text-label-caps text-on-surface-variant mb-3">Tell me about your project</label>
                    <textarea
                        placeholder="I want a super duper website..."
                        id="details"
                        required
                        rows={4}
                        value={formData.details}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-outline-variant/30 py-3 text-body-lg text-on-surface focus:outline-none focus:border-tertiary transition-colors resize-none placeholder:text-on-surface-variant/60"
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-on-surface text-surface py-5 px-8 flex justify-between items-center hover:bg-tertiary transition-colors disabled:opacity-50"
                >
                    <span className="text-label-caps">{status === "loading" ? "Sending…" : "Send Message"}</span>
                    <FaArrowRight />
                </button>
            </form>

            {status === "success" && (
                <div className="mt-6 px-6 py-4 bg-success-container text-success text-body-md">
                    Message delivered — thank you.
                </div>
            )}
            {status === "error" && (
                <div className="mt-6 px-6 py-4 bg-error-container text-error text-body-md">
                    Please fill in all required fields and try again.
                </div>
            )}
        </div>
    )
}

export default Form
