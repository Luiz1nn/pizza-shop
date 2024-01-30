import { api } from '~/lib/axios'

type SignInRequest = {
  email: string
}

export async function signIn({ email }: SignInRequest) {
  await api.post('/authenticate', { email })
}
