import AuthorizedAccess from '@/utils/AuthorizedAccess'
import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

export default function layout({ children }: IProps) {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <AuthorizedAccess>{children}</AuthorizedAccess>
    </>
  )
}
