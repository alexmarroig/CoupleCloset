'use client'

import { useEffect, useState } from "react"
import { fetchApi } from "@/lib/api"
import { useLanguage } from "@/lib/i18n"

export function useProfile() {
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await fetchApi("/profile/me")
        setProfile(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadProfile()
  }, [])

  return { profile, loading, error }
}

export function useDiscover(params: any) {
    const [ideas, setIdeas] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    async function getRecommendations() {
        setLoading(true)
        try {
            const query = new URLSearchParams(params).toString()
            const data = await fetchApi(`/date-ideas/recommendations?${query}`)
            setIdeas(data)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return { ideas, loading, getRecommendations }
}
