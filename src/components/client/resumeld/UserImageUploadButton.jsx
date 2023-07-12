'use client'

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function UserImageUploadButton({ onImageUpload }) {
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

  const handleReloadImage = () => {
    setSelectedFile(null)
  }

  return (
    <>
      {!selectedFile ? (
        <label
          htmlFor="imageUpload"
          className="flex items-center justify-center w-full bg-blue-500 cursor-pointer aspect-square"
        >
          파일 업로드
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            ref={fileInputRef}
          />
        </label>
      ) : (
        <>
          <img src={URL.createObjectURL(selectedFile)} alt="Uploaded Image" onClick={handleClickImage} />
          <button onClick={handleReloadImage}>재업로드</button>
        </>
      )}
    </>
  )
}

/* <div className="relative flex items-center justify-center w-full bg-blue-500 rounded-full cursor-pointer aspect-square">
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
    className="absolute w-8 rounded-full aspect-square bottom-4 right-4 bg-neutral-300"
    type="button"
    onClick={handleClickImage}
  >
    +
  </button>
</div> */
