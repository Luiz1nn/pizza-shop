import { api } from '~/lib/axios'

export type RegisterRestaurantRequest = {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant(data: RegisterRestaurantRequest) {
  await api.post('/restaurants', data)
}
