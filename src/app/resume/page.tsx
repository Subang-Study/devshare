/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import AuthorizedAccess from '@/utils/AuthorizedAccess'
import ResumeDetails from '@/components/client/resume/ResumeDetail'

interface IResumeProps {
  params: { resumeId: string }
  searchParams: { id: string }
}

export default async function Resume(props: IResumeProps) {
  const session = await getServerSession(authOptions)
  console.log(props.searchParams.id)

  return (
    <AuthorizedAccess callbackPath={`/resume?id=${props.searchParams.id}`}>
      <ResumeDetails id={props.searchParams.id} session={session} />
    </AuthorizedAccess>
  )
}
