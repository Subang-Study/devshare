/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable import/no-cycle */

'use client'

import { FieldArrayWithId, UseFieldArrayRemove, useFormContext } from 'react-hook-form'
import { IResumeData } from '@/types/resumeDataType'

interface IStackBoxProps {
  field: FieldArrayWithId<IResumeData>
  idx: number
  remove: UseFieldArrayRemove
}

export default function StackBoxInput({ field, idx, remove }: IStackBoxProps) {
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
        className="rounded-full w-6 aspect-square bg-transparent shadow-[0_0_0_2px_inset] shadow-blue-600 text-blue-600 absolute top-1 right-1"
        type="button"
        onClick={() => remove(idx)}
      >
        X
      </button>
    </div>
  )
}
