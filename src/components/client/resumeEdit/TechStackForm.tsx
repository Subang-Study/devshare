'use client'

import { useFieldArray, useFormContext } from 'react-hook-form'
import { k2d } from '@/app/font'
import { IResumeData } from '@/types/resumeDataType'
import StackBoxInput from './StackBox'

export default function TechStackForm() {
  const { control } = useFormContext<IResumeData>()
  const { fields, append, remove } = useFieldArray<IResumeData>({
    control,
    name: 'techStack',
  })

  return (
    <div className="flex flex-row flex-wrap items-center justify-start gap-4 p-4">
      {fields.map((field, idx) => {
        return <StackBoxInput key={field.id} {...{ field, idx, remove }} />
      })}
      <button
        type="button"
        className={`${k2d.className} align-middle w-10 text-4xl leading-9 flex justify-center  text-white rounded-full bg-neutral-300 aspect-square`}
        onClick={() => append({ title: '', description: '' })}
      >
        +
      </button>
    </div>
  )
}
