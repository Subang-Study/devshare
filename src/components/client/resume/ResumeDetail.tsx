'use client'

import Categories from '@/components/server/resume/Categories'
import Introduce from '@/components/server/resume/Introduce'
import Profile from '@/components/server/resume/Profile'
import Skillset from '@/components/server/resume/Skillset'
import { IResumeData } from '@/types/resumeDataType'
import axios from 'axios'
import { Session } from 'next-auth'
import { useEffect, useState } from 'react'
import ResumeOwnerBtns from './ResumeOwnerBtns'

interface IResumeDetailProps {
  session: Session | null
  id: string
}

const getData = async (id: string) => {
  const res = await axios.get<IResumeData>(`/api/resume/${id}`)
  const result = res.data
  return result
}

export default function ResumeDetails({ session, id }: IResumeDetailProps) {
  const [data, setData] = useState<IResumeData>()

  useEffect(() => {
    getData(id).then((res) => {
      setData(res)
    })
  })

  if (data) {
    return (
      <>
        {session?.user.id === data.author && <ResumeOwnerBtns resumeId={id} />}
        <Profile profileData={data.userInfo} />
        <Introduce profileData={data.userInfo} />
        <Skillset techData={data.techStack} />
        <Categories categoryList={data.categorys} />
      </>
    )
  }
}
