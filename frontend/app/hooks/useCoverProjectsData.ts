import { useState, useEffect } from "react"
import axios from "axios"

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:7000"

export interface Project {
  _id: string
  image?: string
  projectName?: string
  url?: string
  description?: string
  importance?: string
}

interface useCoverProjectsDataReturn {
  projects: Project[]
  loading: boolean
  error: unknown
}

export function useCoverProjectsData(): useCoverProjectsDataReturn {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    axios
      .get<{ data: Project[] }>(`${API_BASE}/coverProject`)
      .then((res) => {
        // Backend returns { data: [...] }
        setProjects(res.data.data ?? [])
      })
      .catch((err: unknown) => {
        console.error("Failed to fetch projects:", err)
        setError(err)
      })
      .finally(() => setLoading(false))
  }, [])

  return { projects, loading, error }
}
