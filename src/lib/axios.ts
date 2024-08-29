import axios from 'axios'

// import { env } from '@/env'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // withCredentials: true,
})
console.log('🚀 ~ import.meta.env.GITHUB_API_URL:', import.meta.env)

if (import.meta.env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 3000)),
    )

    return config
  })
}
