'use client'

/* eslint-disable react/no-array-index-key */

import { useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import UserInfoForm from './UserInfoForm'
import TechStackForm from '../resumeEdit/TechStackForm'
import CategoryForm from '../resumeEdit/CategoryForm'
import { IResumeData, initialResumeData } from '../../../types/resumeDataType'

interface ICreateProfileProps {
  defaultValue?: IResumeData
}

export default function CreateProfile({ defaultValue }: ICreateProfileProps) {
  const method = useForm<IResumeData>({ defaultValues: defaultValue || initialResumeData })
  const onSubmit = async (data: unknown) => {
    const result = await axios.post('/api/resume/create', data)
    console.log(result)
  }

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)} className="flex flex-col w-full">
        <UserInfoForm />
        <TechStackForm />
        <CategoryForm />
        <button type="submit" className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
          저장
        </button>
      </form>
    </FormProvider>
  )
}
