//@ts-nocheck
import { env } from '@/lib/env'
import { prisma } from '@/lib/prisma'
import NextAuth, { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import Email from 'next-auth/providers/email'
import { PrismaAdapter } from '@auth/prisma-adapter'

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    theme: {
        logo: '/images/logo_billingTimeLog_white.png',
    },
    providers: [
        GithubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
        }),
        Email({
            server: {
                host: process.env.SMTP_HOST,
                port: Number(process.env.SMTP_PORT),
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
    ],
    callbacks: {
        session({ session, user }) {
            session.user.id = user.id
            session.user.image = user.image
            return session
        },
    },
}

export default NextAuth(authOptions)
