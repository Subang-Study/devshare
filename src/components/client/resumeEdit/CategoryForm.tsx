'use client'

import { IResumeData, initialResumeCategory } from '@/types/resumeDataType'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { k2d } from '@/app/font'
import Btn from '../ui/Btn'
import CategoryDetails from './CategoryDetails'
import InputError from '../ui/InputError'

export default function CategoryForm() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<IResumeData>()
  const { fields, append, remove } = useFieldArray<IResumeData>({
    control,
    name: 'categorys',
  })

  return (
    <div className="flex flex-col items-center w-full">
      {fields.map((field, idx) => {
        return (
          <div key={field.id} className="flex flex-col w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <input
                className={`${k2d.className} max-md:w-1/3 flex-1 text-3xl text-blue-600`}
                placeholder="카테고리 이름"
                type="text"
                {...register(`categorys.${idx}.title`, {
                  required: { value: true, message: '카테고리 이름을 작성해주세요.' },
                })}
              />
              <button
                type="button"
                onClick={() => remove(idx)}
                className="text-xs w-fit text-neutral-400 hover:text-red-500"
              >
                전체 삭제
              </button>
            </div>
            <InputError errors={errors} name={`categorys.${idx}.title`} />
            <hr className="w-full h-0.5 bg-black border-none rounded-full" />
            <CategoryDetails categoryIdx={idx} />
          </div>
        )
      })}
      <hr className="w-full h-0.5 bg-neutral-300 border-none rounded-full" />
      <Btn shape="border" colors="blueEmpty" className="w-3/4 h-10 my-4" onClick={() => append(initialResumeCategory)}>
        카테고리 추가
      </Btn>
    </div>
  )
}
