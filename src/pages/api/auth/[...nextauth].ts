/* eslint-disable no-param-reassign */
import NextAuth from 'next-auth/next'
import GitHubProvider, { GithubProfile } from 'next-auth/providers/github'
import { connectDB } from '@/utils/database'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import { AuthOptions } from 'next-auth'

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      profile(profile: GithubProfile) {
        return {
          id: profile.id.toString(),
          name: profile.name,
          login: profile.login,
          email: profile.email,
          image: profile.avatar_url,
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.login = user.login
      session.user.id = user.id
      return session
    },
    async jwt({ token, user }) {
      token.user = user.id
      return token
    },
  },
  jwt: {},
  session: {
    strategy: 'database',
    maxAge: 60 * 60 * 24 * 7,
  },
  pages: {
    signIn: '/auth',
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(connectDB),
}

export default NextAuth(authOptions)
