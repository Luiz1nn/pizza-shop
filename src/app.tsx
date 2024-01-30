import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import { AuthLayout } from './pages/_layouts/auth'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />

      <AuthLayout />
    </HelmetProvider>
  )
}
