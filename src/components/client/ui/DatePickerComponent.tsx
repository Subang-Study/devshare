'use client'

import { useState } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
// eslint-disable-next-line import/no-extraneous-dependencies
import DatePicker, { registerLocale } from 'react-datepicker'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-datepicker/dist/react-datepicker.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import ko from 'date-fns/locale/ko'

registerLocale('ko', ko)

type DatePickerComponentProps = {
  startDateName: string
  endDateName: string
}

export default function DatePickerComponent({ startDateName, endDateName }: DatePickerComponentProps) {
  const { control, setValue } = useFormContext()
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  const handleDateChange = (date: Date | null, name: string) => {
    setValue(name, date)
    if (name === startDateName) {
      setStartDate(date)
    } else {
      setEndDate(date)
    }
  }

  return (
    <div className="flex items-center w-full text-xs">
      <div>
        <Controller
          control={control}
          name={startDateName}
          render={({ field }) => (
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                field.onChange(date)
                handleDateChange(date, startDateName)
              }}
              dateFormat="yyyy-MM-dd"
              locale="ko"
              placeholderText="시작일 선택"
              className="border-none bg-transparent w-20"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          )}
        />
      </div>
      <div className="ml-4 flex items-center">
        <span className="mr-1">~</span>
        <Controller
          control={control}
          name={endDateName}
          render={({ field }) => (
            <DatePicker
              selected={endDate}
              onChange={(date) => {
                field.onChange(date)
                handleDateChange(date, endDateName)
              }}
              dateFormat="yyyy-MM-dd"
              locale="ko"
              placeholderText="마지막일 선택"
              className="border-none bg-transparent w-20"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          )}
        />
      </div>
    </div>
  )
}
