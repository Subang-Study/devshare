'use client'

import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'
import ResumeEditor from '@/components/Editor/ResumeEditor'
import InputError from '@/components/client/ui/InputError'
import { specialCharacterReg } from '@/lib/constants/regex'
import { IResumeData, initialResumeData } from '@/types/resumeDataType'
import SkillInput from '@/components/Editor/Skill'
import CategoryDetails from '@/components/Editor/CategoryDetails'

interface ICreateProfileProps {
  id: string
}

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
        `/api/uploadImage/uploadUserImage?file=${id}${curTime.toJSON().replace(specialCharacterReg, '')}`,
      )

      const formData = new FormData()
      Object.entries({ ...res.data.fields, file }).forEach(([key, value]) => {
        formData.append(key, value as Blob)
      })

      const result = await axios.post(res.data.url, formData)

      if (result.status === 204) {
        curData.userInfo.userImage = `https://devshareimage.s3.ap-northeast-2.amazonaws.com/userImage/${id}${curTime
          .toJSON()
          .replace(specialCharacterReg, '')}`
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
    <ResumeEditor method={method} onSubmit={onSubmit}>
      <ResumeEditor.Category.Sort direction="vertical" gap="gap-3">
        <ResumeEditor.UserProfile />
        <ResumeEditor.Category defaultTitle="Introduction">
          <ResumeEditor.Category.Sort direction="none">
            <InputError errors={method.formState.errors} name="userInfo.introduction" className="col-span-3" />
            <textarea
              rows={5}
              placeholder=""
              {...method.register('userInfo.introduction', { required: '필수 작성 칸입니다' })}
              className="w-full gap-1 outline-none"
            />
          </ResumeEditor.Category.Sort>
        </ResumeEditor.Category>

        <ResumeEditor.Category defaultTitle="Skill Set">
          <ResumeEditor.Category.CategoryArray direction="horizontal" gap="gap-4" padding="0/4" name="techStack">
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
