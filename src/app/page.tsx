"use client"

import {useSession, signIn, signOut, SessionProvider} from "next-auth/react"

export default function Home() {
    const {data: session} = useSession()

    return (
        <main>

        </main>
    )
}