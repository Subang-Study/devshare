import AuthorizedAccess from '@/utils/AuthorizedAccess'
import { ReactNode } from 'react'

interface IProps {
  params: { resumeId: string }
  children: ReactNode
}

export default function layout({ params, children }: IProps) {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <AuthorizedAccess callbackPath={`/resume/${params.resumeId}`}>{children}</AuthorizedAccess>
    </>
  )
}
