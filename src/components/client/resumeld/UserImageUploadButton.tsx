'use client'

import React, { useState, useRef, ChangeEvent } from 'react'
import Image from 'next/image'
import { IoCamera } from 'react-icons/io5'
import { PiUserCircleThin } from 'react-icons/pi'

export default function UserImageUploadButton() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
    }
    // 파일 업로드 로직 작성
    // 업로드 성공 시 이미지 URL을 폼 데이터에 설정 하면됨
    // setValue('userInfo.userImage', imageUrl);
  }

  const handleClickImage = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="relative flex items-center justify-center w-full border-2 border-blue-500 rounded-full aspect-square">
      {selectedFile ? (
        <Image
          className="w-full h-full rounded-full"
          width={100}
          height={100}
          src={URL.createObjectURL(selectedFile)}
          alt="Uploaded Image"
          onClick={handleClickImage}
        />
      ) : (
        <PiUserCircleThin className="w-full h-full text-blue-500" />
      )}
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
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
  )
}
