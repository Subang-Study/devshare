'use client'

import { IResumeData, initialResumeCategoryDetail } from '@/types/resumeDataType'
import { UseFieldArrayAppend, UseFieldArrayRemove, useFormContext, Controller } from 'react-hook-form'
import { RxPlusCircled } from 'react-icons/rx'
import DatePicker, { registerLocale } from 'react-datepicker'
import Input from '../client/ui/Input'
import InputError from '../client/ui/InputError'
import 'react-datepicker/dist/react-datepicker.css'
// eslint-disable-next-line import/no-extraneous-dependencies, import/order
import ko from 'date-fns/locale/ko'

registerLocale('ko', ko)

type DatePickerComponentProps = {
  categoryIdx: number
  detailIdx: number
}

const DatePickerComponent = ({ categoryIdx, detailIdx }: DatePickerComponentProps) => {
  const { control } = useFormContext<IResumeData>()

  return (
    <div className="flex flex-row items-center w-full text-xs ">
      <Controller
        control={control}
        name={`categorys.${categoryIdx}.detail.${detailIdx}.period`}
        render={({ field: { value, onChange, ...fieldProps } }) => (
          <DatePicker
            {...fieldProps}
            placeholderText="기간 선택"
            selectsRange
            startDate={value[0] && new Date(value[0])}
            endDate={value[1] && new Date(value[1])}
            dateFormat="yyyy-MM"
            onChange={onChange}
            locale="ko"
            className="w-full pr-4 bg-transparent border-none"
            showMonthYearPicker
            showFullMonthYearPicker
            showTwoColumnMonthYearPicker
            isClearable
          />
        )}
      />
    </div>
  )
}

interface ICategoryDetailProps {
  append?: UseFieldArrayAppend<IResumeData>
  remove?: UseFieldArrayRemove
  categoryIdx?: number
  idx?: number
}

const CategoryDetails = ({ append, remove, categoryIdx, idx }: ICategoryDetailProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IResumeData>()

  if (categoryIdx && idx) {
    return (
      <>
        <div className="flex flex-row w-full max-md:flex-col">
          <div className="relative flex flex-col max-md:w-full w-1/4 gap-1 text-lg md:border-r-2 border-blue-600 min-w-[200px]">
            <Input
              color="black"
              fontSize="mid-title"
              placeholder="소속/프로젝트 명"
              type="text"
              {...register(`categorys.${categoryIdx}.detail.${idx}.title`, { required: '제목을 입력하세요.' })}
            />
            <InputError errors={errors} name={`categorys.${categoryIdx}.detail.${idx}.title`} />
            <DatePickerComponent categoryIdx={categoryIdx} detailIdx={idx} />
            {remove && (
              <button
                type="button"
                className="absolute text-xs md:bottom-2 md:left-2 w-fit text-neutral-400 hover:text-red-500 max-md:top-2 max-md:right-2"
                onClick={() => remove(idx)}
              >
                이 항목 삭제
              </button>
            )}
          </div>
          <div className="flex flex-col flex-1 gap-0.5 md:p-2 md:min-w-[504px]">
            <Input
              color="black"
              fontSize="basic"
              className="w-full"
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
        {append && (
          <button
            type="button"
            className="flex justify-center w-10 rounded-full aspect-square"
            onClick={() => append(initialResumeCategoryDetail)}
          >
            <RxPlusCircled className="w-full h-full text-blue-600 stroke-0 hover:text-blue-500" />
          </button>
        )}
      </>
    )
  }
}

export default CategoryDetails
