'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { IResumeData, initialResumeData } from '@/types/resumeDataType'
import SkillInput from '@/components/resumeEditor/Skill'
import CategoryDetails from '@/components/resumeEditor/CategoryDetails'
import ResumeEditor from '@/components/resumeEditor/ResumeEditor'
import { addResume, editResume, getPresignedUrl } from '@/lib/api/apis'
import useToast from '@/lib/hooks/useToast'
import { ApiError } from 'next/dist/server/api-utils'
import InputError from '../ui/InputError'

interface ICreateProfileProps {
  id: string
}

export default function CreateProfile({ id }: ICreateProfileProps) {
  const router = useRouter()
  const { setToast } = useToast()
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData(['post', id])
  const method = useForm<IResumeData>({ defaultValues: data ?? initialResumeData })
  const { mutate } = useMutation({
    mutationFn: async (form: IResumeData) => {
      const curData = await getPresignedUrl(id, form)

      if (form.author) {
        const result = await editResume(id, curData)
        return result
      }
      const result = await addResume(id, curData)
      return result
    },
    onSuccess: (resData) => {
      if (resData) {
        router.push(resData)
        router.refresh()
      }
    },
    onError: (e) => {
      if (e instanceof ApiError) {
        setToast({
          visible: true,
          detail: e.message,
        })
      }
    },
  })

  return (
    <ResumeEditor method={method} onSubmit={mutate}>
      <ResumeEditor.Category.Sort direction="vertical" gap="gap-3">
        <ResumeEditor.UserProfile />

        <ResumeEditor.Category defaultTitle="Introduction">
          <ResumeEditor.Category.Sort direction="none" padding="1">
            <InputError errors={method.formState.errors} name="userInfo.introduction" className="col-span-3" />
            <textarea
              rows={5}
              placeholder=""
              {...method.register('userInfo.introduction', { required: '필수 작성 칸입니다' })}
              className="w-full gap-1 bg-transparent outline-none dark:text-white"
            />
          </ResumeEditor.Category.Sort>
        </ResumeEditor.Category>

        <ResumeEditor.Category defaultTitle="Skill Set">
          <ResumeEditor.Category.CategoryArray direction="horizontal" gap="gap-4" padding="2/4" name="techStack">
            <SkillInput />
          </ResumeEditor.Category.CategoryArray>
        </ResumeEditor.Category>

        <ResumeEditor.Category.CategoryArray direction="vertical" name="categorys">
          <ResumeEditor.Category>
            <ResumeEditor.Category.CategoryArray direction="vertical" gap="gap-4" padding="2/4">
              <CategoryDetails />
            </ResumeEditor.Category.CategoryArray>
          </ResumeEditor.Category>
        </ResumeEditor.Category.CategoryArray>

        <ResumeEditor.EditorBtn id={id} />
      </ResumeEditor.Category.Sort>
    </ResumeEditor>
  )
}
