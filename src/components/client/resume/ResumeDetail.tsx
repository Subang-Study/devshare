'use client'

import Categories from '@/components/server/resume/Categories'
import Introduce from '@/components/server/resume/Introduce'
import Profile from '@/components/server/resume/Profile'
import Skillset from '@/components/server/resume/Skillset'
import { Session } from 'next-auth'
import { useQuery } from '@tanstack/react-query'
import { getPost } from '@/lib/api/post'
import ResumeOwnerBtns from './ResumeOwnerBtns'

interface IResumeDetailProps {
  session: Session | null
  id: string
}

export default function ResumeDetails({ session, id }: IResumeDetailProps) {
  const { data, isSuccess } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPost(id),
  })

  if (isSuccess) {
    return (
      <div className="relative flex flex-col gap-3">
        {session?.user.id === data.author && <ResumeOwnerBtns resumeId={id} />}
        <Profile profileData={data.userInfo} />
        <Introduce profileData={data.userInfo} />
        <Skillset techData={data.techStack} />
        <Categories categoryList={data.categorys} />
      </div>
    )
  }
}
