'use client'

/* eslint-disable react/no-array-index-key */

import { useForm, FormProvider } from 'react-hook-form'
import UserInfoForm from './UserInfoForm'
import TechStackForm from '../resumeEdit/TechStackForm'
import { IResumeData } from '../../../types/resumeDataType'

export default function CreateProfile() {
  const method = useForm<IResumeData>()
  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)} className="flex flex-col w-full">
        <UserInfoForm />
        <TechStackForm />
        <button type="submit" className="bg-blue-500 text-white mt-4 py-2 px-4 rounded">
          저장
        </button>
      </form>
    </FormProvider>
  )
}
