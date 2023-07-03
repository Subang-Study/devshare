'use client'

import { useFormContext, useFieldArray } from 'react-hook-form'
import { IResumeData } from '@/types/resumeDataType'

export default function UserInfoForm() {
  const { register, control } = useFormContext<IResumeData>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'userInfo.personal.channel',
  })

  return (
    <>
      <input
        placeholder="이름"
        type="text"
        {...register('userInfo.name', { required: true })}
        className="text-[2rem] font-bold mt-4  border-gray-400 focus:border-blue-500"
      />
      <input
        placeholder="한줄 자기소개"
        type="text"
        {...register('userInfo.sentense', { required: true })}
        className="w-full text-gray-600  border-gray-400 focus:border-blue-500 outline-none"
      />
      {fields.map((field, idx) => {
        return (
          <div key={field.id}>
            <input placeholder="url.title" type="text" {...register(`userInfo.personal.channel.${idx}.title`)} />
            <input placeholder="url" type="text" {...register(`userInfo.personal.channel.${idx}.url`)} />
            <button onClick={() => remove(idx)} type="button">
              -
            </button>
          </div>
        )
      })}
      <button type="button" onClick={() => append({ title: '', url: '' })}>
        +
      </button>
    </>
  )
}
