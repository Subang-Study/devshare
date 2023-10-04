/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import getQueryClient from '@/utils/getQueryClient'
import AuthorizedAccess from '@/utils/AuthorizedAccess'
import ResumeDetails from '@/components/resume/ResumeDetail'
import { Hydrate, dehydrate } from '@tanstack/react-query'
import { getPost } from '@/lib/api/post'
import { redirect } from 'next/navigation'

interface IResumeProps {
  params: { resumeId: string }
  searchParams: { id: string }
}

export default async function Resume(props: IResumeProps) {
  const session = await getServerSession(authOptions)
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['post', props.searchParams.id], () => getPost(props.searchParams.id))
  const dehydratedState = dehydrate(queryClient)

  if (queryClient.getQueryState(['post', props.searchParams.id])?.status === 'error')
    redirect(`/resume/edit?id=${props.searchParams.id}`)

  return (
    <AuthorizedAccess callbackPath={`/resume?id=${props.searchParams.id}`}>
      <Hydrate state={dehydratedState}>
        <ResumeDetails id={props.searchParams.id} session={session} />
      </Hydrate>
    </AuthorizedAccess>
  )
}
