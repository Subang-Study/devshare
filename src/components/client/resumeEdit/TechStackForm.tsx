'use client'

import { useFieldArray, useFormContext } from 'react-hook-form'
import { k2d } from '@/app/font'
import { IResumeData } from '@/types/resumeDataType'
import { TbPlus } from 'react-icons/tb'
import StackBoxInput from './StackBox'

export default function TechStackForm() {
  const { control } = useFormContext<IResumeData>()
  const { fields, append, remove } = useFieldArray<IResumeData>({
    control,
    name: 'techStack',
  })

  return (
    <>
      <h3 className={`${k2d.className} text-blue-600 text-3xl`}>Tech Stack</h3>
      <hr className="w-full h-0.5 bg-black border-none rounded-full" />
      <div className="flex flex-row flex-wrap items-center justify-start gap-4 p-4">
        {fields.map((field, idx) => {
          return <StackBoxInput key={field.id} {...{ idx, remove }} />
        })}
        <button
          type="button"
          className="flex justify-center w-10 text-4xl leading-9 text-white align-middle rounded-full bg-neutral-300 aspect-square"
          onClick={() => append({ title: '', description: '' })}
        >
          <TbPlus className="w-full h-full" />
        </button>
      </div>
    </>
  )
}
