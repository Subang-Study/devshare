import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import ResumeDetails from '@/components/resume/ResumeDetail'
import ResumeOwnerBtns from '@/components/resume/ResumeOwnerBtns'
import { dehydrate, Hydrate } from '@tanstack/react-query'
import getQueryClient from '@/utils/getQueryClient'
import { redirect } from 'next/navigation'

interface IResumeProps {
  params: { id: string }
}

const getResume = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/resume/${id}`, { cache: 'no-store' })
  if (!res.ok) throw new Error('존재하지 않는 이력서 입니다.')
  return res.json()
}

export default async function Page(props: IResumeProps) {
  const session = await getServerSession(authOptions)
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['post', props.params.id], () => getResume(props.params.id))
  const dehydratedState = dehydrate(queryClient)

  if (queryClient.getQueryState(['post', props.params.id])?.status === 'error')
    redirect(`/resume/edit?id=${props.params.id}`)

  return (
    <Hydrate state={dehydratedState}>
      <div className="relative flex flex-col gap-3">
        {session?.user.id === props.params.id && <ResumeOwnerBtns resumeId={props.params.id} />}
        <ResumeDetails id={props.params.id} />
      </div>
    </Hydrate>
  )
}
