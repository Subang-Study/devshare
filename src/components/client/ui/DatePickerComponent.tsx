'use client'

import { useFormContext, Controller } from 'react-hook-form'
import { IResumeData } from '@/types/resumeDataType'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import ko from 'date-fns/locale/ko'

registerLocale('ko', ko)

type DatePickerComponentProps = {
  categoryIdx: number
  detailIdx: number
}

export default function DatePickerComponent({ categoryIdx, detailIdx }: DatePickerComponentProps) {
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
            startDate={value[0]}
            endDate={value[1]}
            dateFormat="yyyy-MM"
            onChange={onChange}
            locale="ko"
            className="border-none bg-transparent w-full pr-4"
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
