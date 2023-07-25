import AuthorizedAccess from '@/utils/AuthorizedAccess'
import { ReactNode } from 'react'

interface IProps {
  params: { resumeId: string }
  children: ReactNode
}

export default async function layout({ params, children }: IProps) {
  return <AuthorizedAccess callbackPath={`/resume/${params.resumeId}`}>{children}</AuthorizedAccess>
}
