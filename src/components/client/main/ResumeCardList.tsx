/* eslint-disable no-underscore-dangle */

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

  return (
    <section className="grid w-full grid-cols-2 gap-6 max-sm:grid-cols-1">
      {data && data.map((ele) => <ResumeCard ResumeData={ele} key={ele._id} />)}
    </section>
  )
}
