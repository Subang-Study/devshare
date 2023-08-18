'use client'

/* eslint-disable react/no-array-index-key */

import { useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import UserInfoForm from './UserInfoForm'
import TechStackForm from '../resumeEdit/TechStackForm'
import CategoryForm from '../resumeEdit/CategoryForm'
import { IResumeData, initialResumeData } from '../../../types/resumeDataType'
import Btn from '../ui/Btn'

interface ICreateProfileProps {
  defaultValue?: IResumeData
  mode: 'EDIT' | 'CREATE'
  id?: string
}

const getData = async (id: string) => {
  try {
    const res = await axios.get<IResumeData>(`/api/resume/${id}`)
    const result = res.data
    return result
  } catch (error) {
    return initialResumeData
  }
}

const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi

export default function CreateProfile({ mode, id }: ICreateProfileProps) {
  const router = useRouter()
  const session = useSession()
  const method = useForm<IResumeData>({
    defaultValues: id
      ? async () => {
          const value = await getData(id)
          return value
        }
      : initialResumeData,
  })

  const onSubmit = async (data: IResumeData) => {
    const curData = { ...data }
    const curTime = new Date()
    const file = curData.userInfo.userImage
    if (!!file && typeof file !== 'string') {
      const res = await axios.get<never, { data: { fields: { [key: string]: string }; url: string } }>(
        `/api/uploadImage/uploadUserImage?file=${session.data?.user.id}${curTime.toJSON().replace(reg, '')}`,
      )

      const formData = new FormData()
      Object.entries({ ...res.data.fields, file }).forEach(([key, value]) => {
        formData.append(key, value as Blob)
      })

      const result = await axios.post(res.data.url, formData)

      if (result.status === 204) {
        console.log(result)
        const url = `https://devshareimage.s3.ap-northeast-2.amazonaws.com/userImage/${session.data?.user.id}${curTime
          .toJSON()
          .replace(reg, '')}`
        curData.userInfo.userImage = url
      }
    }
    if (mode === 'EDIT') {
      const result = await axios.put(`/api/resume/${id}`, curData)
      if (result.status === 200) {
        router.push(`/resume?id=${result.data.id}`)
      }
    } else {
      const result = await axios.post('/api/resume/create', curData)
      console.log(result)
      router.push(`/resume?id=${result.data.id}`)
    }
  }

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)} className="flex flex-col w-full">
        <UserInfoForm />
        <TechStackForm />
        <CategoryForm />
        <Btn type="submit" shape="basic" colors="blueFill" className="w-1/4 p-2">
          저장
        </Btn>
      </form>
    </FormProvider>
  )
}
