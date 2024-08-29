import { api } from '@/lib/axios'

export interface GetIssuesQuery {
  filter?: string | null
}

export interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getIssues({ filter }: GetIssuesQuery) {
  console.log('🚀 ~ getIssues ~ filter:', filter)
  const response = await api.get<GetOrdersResponse>('/search/issues', {
    params: {
      q: `${filter}`,
      repo: 'vinikrdoso/state-management-playground-redux',
    },
  })
  console.log('🚀 ~ getIssues ~ response:', response)

  return response.data
}
