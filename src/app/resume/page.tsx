import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import ResumeDetails from '@/components/resume/ResumeDetail'
import { redirect } from 'next/navigation'
import ResumeOwnerBtns from '@/components/resume/ResumeOwnerBtns'
import { IResumeData } from '@/types/resumeDataType'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

interface IResumeProps {
  params: { resumeId: string }
  searchParams: { id: string }
}

const getResume = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/resume/${id}`, {
    cache: 'no-store',
    next: { revalidate: 0 },
  })
  if (!res.ok) {
    console.log('실패')
    return false
  }
  return (await res.json()) as IResumeData
}

export default async function Resume(props: IResumeProps) {
  const session = await getServerSession(authOptions)
  const resume = await getResume(props.searchParams.id)

  if (!resume) redirect(`/resume/edit?id=${props.searchParams.id}`)

  return (
    <div className="relative flex flex-col gap-3">
      {session?.user.id === props.searchParams.id && <ResumeOwnerBtns resumeId={props.searchParams.id} />}
      <ResumeDetails id={props.searchParams.id} session={session} initialData={resume} />
    </div>
  )
}
