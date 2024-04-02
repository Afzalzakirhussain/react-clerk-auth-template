import * as React from 'react'
import { ClerkProvider } from '@clerk/clerk-react'
import { Outlet, useNavigate } from 'react-router-dom'
import App from "../App.jsx"
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

export default function RootLayout() {
    const navigate = useNavigate()

    return (
        <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
            <App />
        </ClerkProvider>
    )
}


