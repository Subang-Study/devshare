/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth/next'
import GitHubProvider from 'next-auth/providers/github'
import { connectDB } from '@/utils/database'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import { AuthOptions } from 'next-auth'

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  adapter: MongoDBAdapter(connectDB),
}

export default NextAuth(authOptions)
