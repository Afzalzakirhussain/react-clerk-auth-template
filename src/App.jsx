import * as React from 'react'
import { useAuth } from '@clerk/clerk-react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Loader } from './components'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export default function RootLayout() {
  const { userId, isLoaded } = useAuth()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!userId && isLoaded) {
      console.log('redirecting')
      navigate('/sign-in')
    }
  }, [userId, isLoaded, navigate])

  if (!isLoaded) return <Loader />

  return (
    <main>
      <Outlet />
    </main>
  )
}
