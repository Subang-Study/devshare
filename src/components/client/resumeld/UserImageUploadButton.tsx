'use client'

import React, { useState, useRef, ChangeEvent } from 'react'
import Image from 'next/image'
import { IoCamera } from 'react-icons/io5'
import { PiUserCircleThin } from 'react-icons/pi'
import { Controller, useFormContext } from 'react-hook-form'
import { IResumeData } from '@/types/resumeDataType'
import { useSession } from 'next-auth/react'
import axios from 'axios'

export default function UserImageUploadButton() {
  const session = useSession()
  const { control, getValues } = useFormContext<IResumeData>()
  const [render, setRender] = useState<string | undefined>(getValues('userInfo.userImage'))
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>, onChange: any) => {
    const file = e.target.files?.[0]

    // 파일 업로드 로직 작성
    // 업로드 성공 시 이미지 URL을 폼 데이터에 설정 하면됨
    // setValue('userInfo.userImage', imageUrl);
    const res = await axios.get<any, { data: { fields: { [key: string]: string }; url: string } }>(
      `/api/uploadImage/uploadUserImage?file=${session.data?.user.id}`,
    )
    console.log(res)

    const formData = new FormData()
    Object.entries({ ...res.data.fields, file }).forEach(([key, value]) => {
      formData.append(key, value as Blob)
    })

    const result = await axios.post(res.data.url, formData)

    if (result.status === 204) {
      const url = `https://devshareimage.s3.ap-northeast-2.amazonaws.com/userImage/${session.data?.user.id}`
      setRender(url)
      onChange(url)
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
          {render ? (
            <Image
              className="w-full h-full rounded-full"
              width={100}
              height={100}
              src={render}
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
            className="shadow-border shadow-blue-500 border-2 border-white absolute w-8 rounded-full aspect-square bottom-4 right-4 bg-white flex justify-center items-center"
            type="button"
            onClick={handleClickImage}
          >
            <IoCamera className="w-4/5 h-4/5 text-blue-600 hover:text-blue-500" />
          </button>
        </div>
      )}
    />
  )
}
