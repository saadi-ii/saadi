import { useState, useEffect } from "react"
import axios from "axios"

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:7000"

export interface Skill {
  _id: string
  image?: string
  name?: string
  percentage?: string
}

interface UseSkillsDataReturn {
  skills: Skill[]
  loading: boolean
  error: unknown
}

export function useSkillsData(): UseSkillsDataReturn {
  const [skills, setSkills] = useState<Skill[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    axios
      .get<{ data: Skill[] }>(`${API_BASE}/skills`)
      .then((res) => {
        // Backend returns { data: [...] }
        setSkills(res.data.data ?? [])
      })
      .catch((err: unknown) => {
        console.error("Failed to fetch skills:", err)
        setError(err)
      })
      .finally(() => setLoading(false))
  }, [])

  return { skills, loading, error }
}
