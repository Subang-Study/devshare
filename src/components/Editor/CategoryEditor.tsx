'use client'

import Txt from '@/components/client/ui/Txt'
import Input from '@/components/client/ui/Input'
import Sorting, { ISortingProps } from '@/components/client/ui/Sorting'
import { Children, ReactElement, cloneElement } from 'react'
import InputError from '@/components/client/ui/InputError'
import { FieldArrayPath, useFieldArray, UseFieldArrayAppend, useFormContext } from 'react-hook-form'
import { initialResumeCategory, IResumeData } from '@/types/resumeDataType'
import Btn from '../client/ui/Btn'

interface ICategoryTitleProps {
  defaultTitle?: string
  append?: UseFieldArrayAppend<IResumeData>
  remove?: (idx: number) => void
  idx?: number
  children: ReactElement
}

const CategoryEditor = ({ defaultTitle, append, remove, idx = 0, children }: ICategoryTitleProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IResumeData>()

  const child = Children.only(children)

  return (
    <div className="w-full">
      {defaultTitle ? (
        <div className="w-full border-b-2 border-black">
          <Txt color="blue" fontSize="title" font="k2d">
            {defaultTitle}
          </Txt>
        </div>
      ) : (
        <div className="w-full border-b-2 border-black">
          <div className="flex flex-row items-center justify-between w-full">
            <Input
              fontSize="title"
              color="blue"
              font="k2d"
              className="flex-1 max-md:w-1/3"
              placeholder="카테고리 이름"
              type="text"
              {...register(`categorys.${idx}.title`, {
                required: { value: true, message: '카테고리 이름을 작성해주세요.' },
              })}
            />
            {remove && (
              <button
                type="button"
                onClick={() => remove(idx)}
                className="text-xs w-fit text-neutral-400 hover:text-red-500"
              >
                전체 삭제
              </button>
            )}
          </div>
          <InputError errors={errors} name={`categorys.${idx}.title`} />
        </div>
      )}
      {child ? cloneElement(child, { ...{ ...child.props, categoryIdx: idx } }) : children}
      {append && (
        <>
          <hr className="w-full h-0.5 bg-black border-none rounded-full" />
          <div className="flex justify-center py-2">
            <Btn colors="blueEmpty" shape="border" className="w-4/5 p-2" onClick={() => append(initialResumeCategory)}>
              카테고리 추가
            </Btn>
          </div>
        </>
      )}
    </div>
  )
}

interface ICategoryArrayProps extends Pick<ISortingProps, 'gap' | 'padding' | 'direction'> {
  name?: FieldArrayPath<IResumeData>
  categoryIdx?: number
  children: ReactElement
}

const CategoryArray = ({ name, categoryIdx = 0, gap, direction, padding, children }: ICategoryArrayProps) => {
  const { control } = useFormContext<IResumeData>()
  const { fields, append, remove } = useFieldArray<IResumeData>({
    control,
    name: name || `categorys.${categoryIdx}.detail`,
  })

  const child = Children.only(children)

  return (
    <Sorting direction={direction} gap={gap} padding={padding}>
      {fields.map((field, idx) => {
        if (fields.length === 1) {
          return cloneElement(child, {
            ...{ key: field.id, categoryIdx, append, idx, ...child.props },
          })
        }
        if (idx === fields.length - 1) {
          return cloneElement(child, {
            ...{ key: field.id, categoryIdx, append, remove, idx, ...child.props },
          })
        }

        return cloneElement(child, {
          ...{ key: field.id, categoryIdx, remove, idx, ...child.props },
        })
      })}
    </Sorting>
  )
}

CategoryEditor.Sort = Sorting
CategoryEditor.CategoryArray = CategoryArray

export { CategoryEditor }
