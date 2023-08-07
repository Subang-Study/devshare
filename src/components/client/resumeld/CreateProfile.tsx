'use client'

/* eslint-disable react/no-array-index-key */

import { useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
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

export default function CreateProfile({ defaultValue = initialResumeData, mode, id }: ICreateProfileProps) {
  const router = useRouter()
  const method = useForm<IResumeData>({ defaultValues: defaultValue })
  const onSubmit = async (data: unknown) => {
    if (mode === 'EDIT') {
      const result = await axios.put(`/api/resume/${id}`, data)
      console.log(result)
    } else {
      const result = await axios.post('/api/resume/create', data)
      console.log(result)
    }
    router.push(`/resume?id=${id}`)
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
