/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import Profile from '@/components/server/resume/Profile'
import Introduce from '@/components/server/resume/Introduce'
import Skillset from '@/components/server/resume/Skillset'
import Categories from '@/components/server/resume/Categories'
import { IResumeData } from '@/types/resumeDataType'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import ResumeOwnerBtns from '@/components/client/resume/ResumeOwnerBtns'
import AuthorizedAccess from '@/utils/AuthorizedAccess'

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/resume/${id}`, { method: 'GET', cache: 'no-store' })
  const data = await res.json()
  return data as IResumeData
}

interface IResumeProps {
  params: { resumeId: string }
  searchParams: { id: string }
}

export default async function Resume(props: IResumeProps) {
  const data = await getData(props.searchParams.id)
  const session = await getServerSession(authOptions)
  console.log(session?.user.id === data.author)

  return (
    <AuthorizedAccess callbackPath={`/resume?id=${props.searchParams.id}`}>
      {session?.user.id === data.author && <ResumeOwnerBtns resumeId={props.searchParams.id} />}
      <Profile profileData={data.userInfo} />
      <Introduce profileData={data.userInfo} />
      <Skillset techData={data.techStack} />
      <Categories categoryList={data.categorys} />
    </AuthorizedAccess>
  )
}
