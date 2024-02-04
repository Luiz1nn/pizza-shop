import { api } from '~/lib/axios'

export type GetOrdersParams = {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export type GetOrdersResponse = {
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

export async function getOrders(params: GetOrdersParams) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params,
  })

  return response.data
}
