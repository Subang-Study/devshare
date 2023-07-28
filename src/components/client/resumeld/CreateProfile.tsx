'use client'

/* eslint-disable react/no-array-index-key */

import { useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import UserInfoForm from './UserInfoForm'
import TechStackForm from '../resumeEdit/TechStackForm'
import CategoryForm from '../resumeEdit/CategoryForm'
import { IResumeData, initialResumeData } from '../../../types/resumeDataType'
import Btn from '../ui/Btn'

interface ICreateProfileProps {
  defaultValue?: IResumeData
}

export default function CreateProfile({ defaultValue = initialResumeData }: ICreateProfileProps) {
  const method = useForm<IResumeData>({ defaultValues: defaultValue })
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
        <Btn type="submit" shape="basic" colors="blueFill" className="w-1/4 p-2">
          저장
        </Btn>
      </form>
    </FormProvider>
  )
}
