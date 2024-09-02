import { api } from '@/lib/axios'

export interface GetIssuesQuery {
  filter?: string | null | undefined
}

export interface GetIssuesResponse {
  total_count: number
  items: {
    number: number
    title: string
    body: string
    created_at: string
  }[]
}

export async function getIssues({ filter }: GetIssuesQuery) {
  console.log('🚀 ~ getIssues ~ filter:', filter)
  const repo = 'repo:vinikrdoso/state-management-playground-redux'
  const response = await api.get<GetIssuesResponse>('/search/issues', {
    params: {
      q: `${filter} ${repo}`,
    },
  })

  const selectedData = response.data.items.map((issue) => {
    return {
      number: issue.number,
      title: issue.title,
      body: issue.body,
      created_at: issue.created_at,
    }
  })

  return { ...response.data, items: selectedData }
}
