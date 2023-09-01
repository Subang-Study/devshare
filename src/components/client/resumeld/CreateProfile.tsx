'use client'

/* eslint-disable react/no-array-index-key */

import { useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'
import UserInfoForm from './UserInfoForm'
import TechStackForm from '../resumeEdit/TechStackForm'
import CategoryForm from '../resumeEdit/CategoryForm'
import { IResumeData, initialResumeData } from '../../../types/resumeDataType'
import Btn from '../ui/Btn'

interface ICreateProfileProps {
  id: string
}

// eslint-disable-next-line no-useless-escape
const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi

export default function CreateProfile({ id }: ICreateProfileProps) {
  const router = useRouter()
  const queryClient = useQueryClient()
  const defaultValue = queryClient.getQueryData(['post', id])
  const method = useForm<IResumeData>({ defaultValues: defaultValue ?? initialResumeData })

  const onSubmit = async (form: IResumeData) => {
    const curData = { ...form }
    const curTime = new Date()

    const file = curData.userInfo.userImage
    if (!!file && typeof file !== 'string') {
      const res = await axios.get<never, { data: { fields: { [key: string]: string }; url: string } }>(
        `/api/uploadImage/uploadUserImage?file=${id}${curTime.toJSON().replace(reg, '')}`,
      )

      const formData = new FormData()
      Object.entries({ ...res.data.fields, file }).forEach(([key, value]) => {
        formData.append(key, value as Blob)
      })

      const result = await axios.post(res.data.url, formData)

      if (result.status === 204) {
        const url = `https://devshareimage.s3.ap-northeast-2.amazonaws.com/userImage/${id}${curTime
          .toJSON()
          .replace(reg, '')}`
        curData.userInfo.userImage = url
      }
    }
    if (defaultValue) {
      const result = await axios.put(`/api/resume/${id}`, curData)
      if (result.status === 200) {
        router.push(`/resume?id=${result.data.id}`)
      }
    } else {
      const result = await axios.post('/api/resume/create', curData)
      if (result.status === 200) {
        router.push(`/resume?id=${result.data.id}`)
      }
    }
  }

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)} className="flex flex-col w-full  gap-3">
        <UserInfoForm />
        <TechStackForm />
        <CategoryForm />
        <div className="flex flex-row justify-end w-full gap-4">
          <Btn
            type="button"
            shape="border"
            colors="blueEmpty"
            className="w-1/4 p-2"
            onClick={() => router.replace(`/resume?id=${id}`)}
          >
            취소
          </Btn>
          <Btn type="submit" shape="basic" colors="blueFill" className="w-1/4 p-2">
            저장
          </Btn>
        </div>
      </form>
    </FormProvider>
  )
}
