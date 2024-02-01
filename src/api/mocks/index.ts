import { setupWorker } from 'msw/browser'

import { env } from '~/env'

import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getProfileMock } from './get-profile-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signOutMock } from './sign-out-mock'
import { signInMock } from './sing-in-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getManagedRestaurantMock,
  getProfileMock,
  signOutMock,
  updateProfileMock,
  getMonthRevenueMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') return

  await worker.start()
}
