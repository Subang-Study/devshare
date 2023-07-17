import { useState } from 'react'
import { useFormContext, FormContextValues } from 'react-hook-form'
// eslint-disable-next-line import/no-extraneous-dependencies
import DatePicker from 'react-datepicker'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-datepicker/dist/react-datepicker.css'

type DatePickerComponentProps = {
  startDateName: string
  endDateName: string
}

export default function DatePickerComponent({ startDateName, endDateName }: DatePickerComponentProps) {
  const { setValue } = useFormContext() as FormContextValues<unknown>
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
        <DatePicker
          selected={startDate}
          onChange={(date) => handleDateChange(date, startDateName)}
          dateFormat="yyyy-MM-dd"
          locale="ko"
          placeholderText="시작일 선택"
          className="border-none bg-transparent w-20 "
        />
      </div>
      <div className="ml-4 flex items-center">
        <span className="mr-1">~</span>
        <DatePicker
          selected={endDate}
          onChange={(date) => handleDateChange(date, endDateName)}
          dateFormat="yyyy-MM-dd"
          locale="ko"
          placeholderText="마지막일 선택"
          className="border-none bg-transparent w-20"
        />
      </div>
    </div>
  )
}
