'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { IoMdAddCircleOutline } from 'react-icons/io'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function UserImageUploadButton() {
  const [selectedFile, setSelectedFile] = useState(null)
  const fileInputRef = useRef(null)

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    setSelectedFile(file)
    // 파일 업로드 로직 작성
    // 업로드 성공 시 이미지 URL을 폼 데이터에 설정
    // setValue('userInfo.userImage', imageUrl);
  }

  const handleClickImage = () => {
    fileInputRef.current.click()
  }

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="relative flex items-center justify-center w-full bg-blue-500 rounded-full aspect-square">
      {selectedFile && (
        <Image
          className="w-full h-full rounded-full"
          width={100}
          height={100}
          src={URL.createObjectURL(selectedFile)}
          alt="Uploaded Image"
          onClick={handleClickImage}
        />
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
        className="absolute w-8 rounded-full aspect-square bottom-4 right-4 bg-white"
        type="button"
        onClick={handleClickImage}
      >
        <IoMdAddCircleOutline size={32} color="blue" />
      </button>
    </div>
  )
}
