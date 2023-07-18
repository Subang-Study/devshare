'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { IResumeData } from '@/types/resumeDataType'
import ResumeCard from './ResumeCard'

const getData = async () => {
  try {
    const result = await axios.get('/api/resumes/resumes')
    return result.data
  } catch (error) {
    console.error(error)
  }
}

export default function ResumeCardList() {
  const [data, setDate] = useState<IResumeData[]>()
  useEffect(() => {
    getData()
      .then((res) => {
        console.log(res)
        setDate(res)
      })
      .catch((err) => console.error(err))
  }, [])

  return data?.map((ele) => {
    return <ResumeCard ResumeData={ele} key={ele.author} />
  })
}
