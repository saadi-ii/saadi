import { useState, useEffect } from "react"
import axios from "axios"

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:7000"

export interface PersonalData {
  _id: string
  image?: string
  name?: string
  about?: string
  phone?: number
  email?: string
  address?: string
  age?: string
  birthday?: string
  degree?: string
  frelance?: string
  nationality?: string
  study?: string
}

interface UsePersonalDataReturn {
  data: PersonalData | null
  loading: boolean
  error: unknown
}

export function usePersonalData(): UsePersonalDataReturn {
  const [data, setData] = useState<PersonalData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    axios
      .get<{ data: PersonalData[] }>(`${API_BASE}/about`)
      .then((res) => {
        // Backend returns { data: [...] }, grab first document
        const record = res.data.data?.[0] ?? null
        setData(record)
      })
      .catch((err: unknown) => {
        console.error("Failed to fetch personal data:", err)
        setError(err)
      })
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
