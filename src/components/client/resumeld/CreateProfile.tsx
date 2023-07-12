'use client'

/* eslint-disable react/no-array-index-key */

import { useForm, FormProvider } from 'react-hook-form'
import UserInfoForm from './UserInfoForm'
import TechStackForm from '../resumeEdit/TechStackForm'
import CategoryForm from '../resumeEdit/CategoryForm'
import { IResumeData, initialResumeData } from '../../../types/resumeDataType'

export default function CreateProfile() {
  const method = useForm<IResumeData>({ defaultValues: initialResumeData })
  const onSubmit = (data: unknown) => {
    console.log(data)
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
