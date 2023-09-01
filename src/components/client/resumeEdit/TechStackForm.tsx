'use client'

import { useFieldArray, useFormContext } from 'react-hook-form'
import { IResumeData, initialResumeTechStack } from '@/types/resumeDataType'
import { RxPlusCircled } from 'react-icons/rx'
import Txt from '../ui/Txt'
import StackBoxInput from './StackBox'
import InputError from '../ui/InputError'

export default function TechStackForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext<IResumeData>()
  const { fields, append, remove } = useFieldArray<IResumeData>({
    control,
    name: 'techStack',
    rules: {
      validate: {
        length: (value) => value.length > 0,
      },
    },
  })

  return (
    <div>
      <Txt color="blue" typography="title" font="k2d">
        Tech Stack
      </Txt>
      <hr className="w-full h-0.5 bg-black border-none rounded-full" />
      {!fields.length && <InputError errors={errors} name="techStack" msg="기술 스택은 한가지 이상 작성해주세요." />}
      <div className="flex flex-row items-center gap-4 py-4 overflow-scroll snap-x snap-mandatory scrollbar-hide">
        {fields.map((field, idx) => {
          return <StackBoxInput key={field.id} {...{ idx, remove }} />
        })}
        <div className="snap-both">
          <button
            type="button"
            className="flex justify-center w-10 rounded-full aspect-square"
            onClick={() => append(initialResumeTechStack)}
          >
            <RxPlusCircled className="w-full h-full text-blue-600 stroke-0 hover:text-blue-500" />
          </button>
        </div>
      </div>
    </div>
  )
}
