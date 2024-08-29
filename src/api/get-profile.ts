import { api } from '@/lib/axios'

export interface GetIssuesQuery {
  filter?: string | null
}

export interface GetProfileResponse {
  avatar_url: string
  name: string
  bio: string
  followers: number
  company: string | null
  login: string
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/users/vinikrdoso')

  const selectedData = {
    avatarUrl: response.data.avatar_url,
    name: response.data.name,
    bio: response.data.bio,
    followers: response.data.followers,
    company: response.data.company,
    user: response.data.login,
  }

  return selectedData
}
