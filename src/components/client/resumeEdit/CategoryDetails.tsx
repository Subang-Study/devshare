'use client'

import { IResumeData, initialResumeCategoryDetail } from '@/types/resumeDataType'
import { useFormContext, useFieldArray } from 'react-hook-form'
import { RxPlusCircled } from 'react-icons/rx'
import DatePickerComponent from './DatePickerComponent'
import InputError from '../ui/InputError'

export default function CategoryDetails({ categoryIdx }: { categoryIdx: number }) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<IResumeData>()
  const { fields, append, remove } = useFieldArray<IResumeData>({
    control,
    name: `categorys.${categoryIdx}.detail`,
    rules: {
      validate: {
        length: (value) => value.length > 0,
      },
    },
  })

  return (
    <div className="flex flex-col items-center w-full gap-3 p-2">
      {!fields.length && (
        <InputError
          errors={errors}
          name={`categorys.${categoryIdx}.detail`}
          msg="카테고리 내용은 한가지 이상 추가해주세요."
        />
      )}
      {fields.map((field, idx) => {
        return (
          <div key={field.id} className="flex flex-row w-full max-md:flex-col">
            <div className="relative flex flex-col max-md:w-full w-1/4 gap-1 text-lg md:border-r-2 border-blue-600 min-w-[200px]">
              <input
                className="text-lg outline-none"
                placeholder="소속/프로젝트 명"
                type="text"
                {...register(`categorys.${categoryIdx}.detail.${idx}.title`, { required: '제목을 입력하세요.' })}
              />
              <InputError errors={errors} name={`categorys.${categoryIdx}.detail.${idx}.title`} />
              <DatePickerComponent categoryIdx={categoryIdx} detailIdx={idx} />
              <button
                type="button"
                className="absolute text-xs md:bottom-2 md:left-2 w-fit text-neutral-400 hover:text-red-500 max-md:top-2 max-md:right-2"
                onClick={() => remove(idx)}
              >
                이 항목 삭제
              </button>
            </div>
            <div className="flex flex-col flex-1 gap-0.5 md:p-2 md:min-w-[504px]">
              <input
                className="w-full text-base outline-none"
                placeholder="요약"
                type="text"
                {...register(`categorys.${categoryIdx}.detail.${idx}.content.title`, {
                  required: '부제목을 입력해주세요.',
                })}
              />
              <InputError errors={errors} name={`categorys.${categoryIdx}.detail.${idx}.content.title`} />
              <hr className="w-full h-[1px] bg-neutral-300 border-none rounded-full" />
              <textarea
                className="w-full text-sm outline-none"
                placeholder="세부 설명"
                rows={8}
                {...register(`categorys.${categoryIdx}.detail.${idx}.content.description`, {
                  required: '내용을 입력해주세요.',
                })}
              />
              <InputError errors={errors} name={`categorys.${categoryIdx}.detail.${idx}.content.description`} />
            </div>
          </div>
        )
      })}
      {/* <hr className="w-full h-0.5 bg-neutral-300 border-none rounded-full" /> */}
      <button
        type="button"
        className="flex justify-center w-10 rounded-full aspect-square"
        onClick={() => append(initialResumeCategoryDetail)}
      >
        <RxPlusCircled className="w-full h-full text-blue-600 stroke-0 hover:text-blue-500" />
      </button>
    </div>
  )
}
