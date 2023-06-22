// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      login: string | null
    } & DefaultSession['user']
  }
  interface User extends DefaultUser {
    login: string | null
  }
}
