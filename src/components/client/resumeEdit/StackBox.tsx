'use client'

import { UseFieldArrayRemove, useFormContext } from 'react-hook-form'
import { IResumeData } from '@/types/resumeDataType'
import { RxCrossCircled } from 'react-icons/rx'

interface IStackBoxProps {
  idx: number
  remove: UseFieldArrayRemove
}

export default function StackBoxInput({ idx, remove }: IStackBoxProps) {
  const { register } = useFormContext<IResumeData>()
  return (
    <div className="relative flex flex-col gap-1 p-3 w-36 aspect-square bg-neutral-200 rounded-xl">
      <input
        type="text"
        className="w-4/5 px-1 bg-transparent rounded-lg focus:bg-neutral-200 focus:outline-none"
        {...register(`techStack.${idx}.title`, { required: 'this is required' })}
        placeholder="기술 이름"
      />
      <textarea
        placeholder="기술 설명"
        className="flex-1 w-full p-1 text-sm rounded-lg bg-neutral-200 text-neutral-600 focus:outline-none"
        {...register(`techStack.${idx}.description`)}
      />
      <button
        className="absolute w-6 bg-transparent rounded-full aspect-square top-1 right-1"
        type="button"
        onClick={() => remove(idx)}
      >
        <RxCrossCircled className="w-full h-full text-blue-600 hover:text-blue-500" />
      </button>
    </div>
  )
}
