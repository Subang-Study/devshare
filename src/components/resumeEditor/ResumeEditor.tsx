'use client'

import { FormProvider, UseFormReturn } from 'react-hook-form'
import { IResumeData } from '@/types/resumeDataType'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import UserProfileInput from '@/components/resumeEditor/UserProfileInputs'
import CategoryEditor from '@/components/resumeEditor/CategoryEditor'
import Btn from '../ui/Btn'

interface IProps {
  method: UseFormReturn<IResumeData>
  onSubmit: (data: IResumeData) => void
  children: ReactNode
}

const ResumeEditor = ({ onSubmit, method, children }: IProps) => {
  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

const ResumeEditorBtn = ({ id }: { id: string }) => {
  const router = useRouter()
  return (
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
  )
}

ResumeEditor.UserProfile = UserProfileInput
ResumeEditor.Category = CategoryEditor
ResumeEditor.EditorBtn = ResumeEditorBtn

export default ResumeEditor
