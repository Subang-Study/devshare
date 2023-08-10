'use client'

import React, { useState, useRef, ChangeEvent } from 'react'
import { IoCamera } from 'react-icons/io5'
import { PiUserCircleThin } from 'react-icons/pi'
import { Controller, useFormContext } from 'react-hook-form'
import { IResumeData } from '@/types/resumeDataType'

export default function UserImageUploadButton() {
  const { control } = useFormContext<IResumeData>()
  const [file, setFile] = useState<File | undefined>()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>, onChange: (url: File) => void) => {
    const curFile = e.target.files?.[0]
    if (curFile) {
      setFile(curFile)
      onChange(curFile)
    }
  }

  const handleClickImage = () => {
    fileInputRef.current?.click()
  }

  return (
    <Controller
      control={control}
      name="userInfo.userImage"
      render={({ field: { value, onChange } }) => (
        <div className="relative flex items-center justify-center w-full border-2 border-blue-500 rounded-full aspect-square">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
              className="w-full h-full rounded-full"
              src={typeof value === 'string' ? value : URL.createObjectURL(file as File)}
              alt="userImage"
              onClick={handleClickImage}
            />
          ) : (
            <PiUserCircleThin className="w-full h-full text-blue-500" />
          )}
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, onChange)}
            className="hidden"
            ref={fileInputRef}
          />
          <button
            className="absolute flex items-center justify-center w-8 bg-white border-2 border-white rounded-full shadow-border shadow-blue-500 aspect-square bottom-4 right-4"
            type="button"
            onClick={handleClickImage}
          >
            <IoCamera className="w-4/5 text-blue-600 h-4/5 hover:text-blue-500" />
          </button>
        </div>
      )}
    />
  )
}
