'use client'

import { UseFieldArrayAppend, UseFieldArrayRemove, useFormContext } from 'react-hook-form'
import { initialResumeTechStack, IResumeData } from '@/types/resumeDataType'
import { RxCrossCircled, RxPlusCircled } from 'react-icons/rx'
import Input from '../ui/Input'
import InputError from '../ui/InputError'

interface IStackBoxProps {
  append?: UseFieldArrayAppend<IResumeData>
  remove?: UseFieldArrayRemove
  idx?: number
}

export default function SkillInput({ idx, remove, append }: IStackBoxProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<IResumeData>()

  if (typeof idx === 'number') {
    return (
      <>
        <div className="relative flex flex-col flex-none w-32 p-2 snap-start aspect-square bg-neutral-200 rounded-xl dark:bg-neutral-600">
          <Input
            color="black"
            fontSize="mid-title"
            type="text"
            className="w-4/5 px-1 bg-transparent rounded-lg "
            {...register(`techStack.${idx}.title`, { required: true })}
            placeholder="기술 이름"
          />
          <textarea
            placeholder="기술 설명"
            className="flex-1 w-full p-1 text-sm bg-transparent rounded-lg text-neutral-600 dark:text-neutral-300 focus:outline-none"
            {...register(`techStack.${idx}.description`)}
          />
          <InputError errors={errors} name={`techStack.${idx}`} msg="칸을 전부 작성해주세요." />
          {remove && (
            <button
              className="absolute w-6 bg-transparent rounded-full aspect-square top-1 right-1"
              type="button"
              onClick={() => remove(idx)}
            >
              <RxCrossCircled className="w-full h-full text-blue-600 hover:text-blue-500" />
            </button>
          )}
        </div>
        {append && (
          <button
            type="button"
            className="flex justify-center items-center w-32 flex-none snap-start aspect-square bg-neutral-200 rounded-xl dark:bg-neutral-600"
            onClick={() => append(initialResumeTechStack)}
          >
            <RxPlusCircled className="w-2/5 h-2/5 text-blue-600 stroke-0 hover:text-blue-500" />
          </button>
        )}
      </>
    )
  }
}
