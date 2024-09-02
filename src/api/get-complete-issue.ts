import { api } from '@/lib/axios'

export interface GetIssuesResponse {
  number: number
  title: string
  body: string
  created_at: string
  comments: number
  html_url: string
  user: {
    login: string
  }
}

export async function getCompleteIssue(number: number) {
  const response = await api.get<GetIssuesResponse>(
    `/repos/vinikrdoso/state-management-playground-redux/issues/${number} `,
  )

  const selectedData = {
    number: response.data.number,
    title: response.data.title,
    body: response.data.body,
    created_at: response.data.created_at,
    comments: response.data.comments,
    user: response.data.user.login,
    htmlUrl: response.data.html_url,
  }

  return selectedData
}
