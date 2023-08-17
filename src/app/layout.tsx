"use client"

import './globals.css'
import '@radix-ui/themes/styles.css';
import "@radix-ui/colors/indigo.css"
import type {Metadata} from 'next'
import {ThemeProvider} from "next-themes"
import {Inter} from 'next/font/google'

import {Container, Flex, Theme} from "@radix-ui/themes"
import {SessionProvider} from "next-auth/react";
import AppBar from "@/components/navigation/appbar";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout(
    {children, session}: { children: React.ReactNode }
) {

    return (
        <html lang="ru">
        <body className={inter.className} style={{userSelect: "none"}}>
        <SessionProvider session={session}>
            <Theme appearance={"light"} accentColor="indigo" grayColor="sand" radius="95%" scaling="95%">
                <AppBar/>
                <Flex direction="column" align="center">
                    <Container>
                        {children}
                    </Container>
                </Flex>
            </Theme>
        </SessionProvider>
        </body>
        </html>
    )
}