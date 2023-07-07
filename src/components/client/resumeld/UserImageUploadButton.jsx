'use client'

import React, { useState } from 'react'

export default function UserImageUploadButton({ onImageUpload }) {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleImageUpload = async (e) => {
    const file = e.target.files[0]
    setSelectedFile(file)
    // 파일 업로드 로직 작성
    // 업로드 성공 시 이미지 URL을 폼 데이터에 설정
    // setValue('userInfo.userImage', imageUrl);
  }

  return (
    <>
      {!selectedFile ? (
        <label
          htmlFor="imageUpload"
          className="bg-blue-500 w-full aspect-square flex items-center justify-center cursor-pointer"
        >
          파일 업로드
          <input id="imageUpload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        </label>
      ) : (
        <img src={URL.createObjectURL(selectedFile)} alt="Uploaded Image" />
      )}
    </>
  )
}
