import AuthorizedAccess from '@/utils/AuthorizedAccess'
import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export default async function layout({ children }: IProps) {
  return <AuthorizedAccess>{children}</AuthorizedAccess>
}
