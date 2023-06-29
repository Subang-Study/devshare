'use client'

/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { SetStateAction, useState } from 'react'

export default function Profile() {
  const [name, setName] = useState('이름을 입력해주세요')
  const [bio, setBio] = useState('간단한 자기소개를 작성해주세요')
  const [email, setEmail] = useState('이메일을 입력해주세요')
  const [phoneNumber, setPhoneNumber] = useState('전화번호를 입력해주세요')

  const handleNameChange = (e: { target: { value: SetStateAction<string> } }) => {
    const inputValue = e.target.value
    setName(inputValue === '이름을 입력해주세요' ? '' : inputValue)
  }

  const handleBioChange = (e: { target: { value: SetStateAction<string> } }) => {
    const inputValue = e.target.value
    setBio(inputValue === '간단한 자기소개를 작성해주세요' ? '' : inputValue)
  }

  const handleEmailChange = (e: { target: { value: SetStateAction<string> } }) => {
    const inputValue = e.target.value
    setEmail(inputValue === '이메일을 입력해주세요' ? '' : inputValue)
  }

  const handlePhoneNumberChange = (e: { target: { value: SetStateAction<string> } }) => {
    const inputValue = e.target.value
    setPhoneNumber(inputValue === '전화번호를 입력해주세요' ? '' : inputValue)
  }

  const handleNameFocus = () => {
    if (name === '이름을 입력해주세요') {
      setName('')
    }
  }

  const handleBioFocus = () => {
    if (bio === '간단한 자기소개를 작성해주세요') {
      setBio('')
    }
  }

  const handleEmailFocus = () => {
    if (email === '이메일을 입력해주세요') {
      setEmail('')
    }
  }

  const handlePhoneNumberFocus = () => {
    if (phoneNumber === '전화번호를 입력해주세요') {
      setPhoneNumber('')
    }
  }

  return (
    <div className="flex flex-col w-full">
      <h1
        contentEditable="true"
        className="text-2xl font-bold mt-4"
        onInput={handleNameChange}
        onFocus={handleNameFocus}
      >
        {name}
      </h1>
      <p contentEditable="true" className="text-gray-600 mt-2" onInput={handleBioChange} onFocus={handleBioFocus}>
        {bio}
      </p>
      <div className="flex flex-row justify-between gap-4 items-center mt-4 md:flex-wrap w-full">
        <div className="w-1/4 min-w-[200px]">
          <div className="bg-blue-500 w-full aspect-square flex items-center justify-center">USERIMAGE</div>
        </div>
        <div className="min-w-[400px] h-full text-gray-700 flex flex-col flex-auto">
          <div>
            이메일.{' '}
            <input
              type="text"
              className="border-b border-gray-400 focus:border-blue-500 outline-none"
              value={email}
              onChange={handleEmailChange}
              onFocus={handleEmailFocus}
            />
          </div>
          <div>
            전화번호.{' '}
            <input
              type="text"
              className="border-b border-gray-400 focus:border-blue-500 outline-none"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              onFocus={handlePhoneNumberFocus}
            />
          </div>
          <div>
            블로그. <a href="https://wonny.space/">https://wonny.space/</a>
          </div>
          <div>
            GitHub. <a href="https://github.com/wonny-log">https://github.com/wonny-log</a>
          </div>
          <div>
            포트폴리오. <a href="https://brunch.co.kr/@hee072794">https://brunch.co.kr/@hee072794</a>
          </div>
        </div>
      </div>
    </div>
  )
}
