import { setupWorker } from 'msw/browser'

import { env } from '~/env'

import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sing-in-mock'

export const worker = setupWorker(signInMock, registerRestaurantMock)

export async function enableMSW() {
  if (env.MODE !== 'test') return

  await worker.start()
}
