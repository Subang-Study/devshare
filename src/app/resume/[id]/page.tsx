import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import ResumeDetails from '@/components/resume/ResumeDetail'
import ResumeOwnerBtns from '@/components/resume/ResumeOwnerBtns'

interface IResumeProps {
  params: { id: string }
}

export default async function Page(props: IResumeProps) {
  const session = await getServerSession(authOptions)

  return (
    <div className="relative flex flex-col gap-3">
      {session?.user.id === props.params.id && <ResumeOwnerBtns resumeId={props.params.id} />}
      <ResumeDetails id={props.params.id} />
    </div>
  )
}
