'use client'

import { IResumeData, initialResumeCategory } from '@/types/resumeDataType'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { k2d } from '@/app/font'
import Btn from '../Btn'
import CategoryDetails from './CategoryDetails'

export default function CategoryForm() {
  const { register, control } = useFormContext<IResumeData>()
  const { fields, append } = useFieldArray<IResumeData>({
    control,
    name: 'categorys',
  })

  return (
    <div className="flex flex-col items-center w-full">
      {fields.map((field, idx) => {
        return (
          <div key={field.id} className="flex flex-col w-full">
            <input
              className={`${k2d.className} w-1/3 text-3xl text-blue-600`}
              placeholder="카테고리 이름"
              type="text"
              {...register(`categorys.${idx}.title`, { required: true })}
            />
            <hr className="w-full h-0.5 bg-black border-none rounded-full" />
            <CategoryDetails categoryIdx={idx} />
          </div>
        )
      })}
      <hr className="w-full h-0.5 bg-neutral-300 border-none rounded-full" />
      <Btn shape="border" className="w-3/4 h-10 my-4" onClick={() => append(initialResumeCategory)}>
        카테고리 추가
      </Btn>
    </div>
  )
}
