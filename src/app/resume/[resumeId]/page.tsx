/* eslint-disable import/no-extraneous-dependencies */
import Profile from '@/components/server/Profile'
import Introduce from '@/components/server/Introduce'
import Skillset from '@/components/server/Skillset'
import Experience from '@/components/server/Experience'
import Study from '@/components/server/Study'
import { IResumeData } from '@/types/resumeDataType'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/resume/${id}`, { method: 'GET', cache: 'no-store' })
  const data = await res.json()
  return data as IResumeData
}

interface IResumeProps {
  params: { resumeId: string }
}

export default async function Resume(props: IResumeProps) {
  const data = await getData(props.params.resumeId)
  const session = await getServerSession(authOptions)

  return (
    <>
      <Profile profileData={data.userInfo} />
      <Introduce />
      <Skillset />
      <Experience />
      <Study />
    </>
  )
}
