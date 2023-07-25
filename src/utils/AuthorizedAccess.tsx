import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

interface IAuthorizedAccessProps {
  callbackPath?: string
  children: ReactNode
}

export default async function AuthorizedAccess({ callbackPath, children }: IAuthorizedAccessProps) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect(`/auth?callbackUrl=${callbackPath}`)
  }

  return [children]
}
