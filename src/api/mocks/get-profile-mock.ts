import { http, HttpResponse } from 'msw'

export const getProfileMock = http.get('/me', () => {
  return HttpResponse.json({
    id: 'custom-user-id',
    name: 'Luis Fernando',
    email: 'luis@email.com',
    phone: '99999999999',
    role: 'manager',
    createdAt: new Date(),
    updatedAt: null,
  })
})
