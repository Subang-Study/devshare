'use client'

'use client'

/* eslint-disable react/no-array-index-key */
import Titlename from '@/components/server/Titlename'
import { ChangeEvent, useState, FormEvent } from 'react'

interface BlogInput {
  blog: string
  url: string
}

export default function CreateProfile() {
  const [name, setName] = useState<string>('')
  const [bio, setBio] = useState<string>('')
  const [blogInputs, setBlogInputs] = useState<BlogInput[]>([{ blog: '', url: '' }])
  const [introduce, setIntroduce] = useState<string>('')

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleBioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value)
  }

  const handleBlogInputChange = (e: ChangeEvent<HTMLInputElement>, index: number, field: keyof BlogInput) => {
    const updatedInputs = [...blogInputs]
    updatedInputs[index] = { ...updatedInputs[index], [field]: e.target.value }
    setBlogInputs(updatedInputs)
  }

  const addUrlInput = () => {
    setBlogInputs([...blogInputs, { blog: '', url: '' }])
  }

  const deleteBlogInput = (index: number) => {
    const updatedInputs = [...blogInputs]
    updatedInputs.splice(index, 1)
    setBlogInputs(updatedInputs)
  }

  const handleIntroduceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIntroduce(e.target.value)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission, e.g., make API calls or update state
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <div>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={handleNameChange}
          className="text-[2rem] font-bold mt-4 border-b border-gray-400 focus:border-blue-500"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="간단 자기소개"
          value={bio}
          onChange={handleBioChange}
          className="text-gray-600 border-b border-gray-400 focus:border-blue-500 outline-none"
        />
      </div>
      <div className="flex flex-row justify-between gap-4 items-center mt-4 md:flex-wrap w-full">
        <div className="w-1/4 min-w-[200px]">
          <div className="bg-blue-500 w-full aspect-square flex items-center justify-center">USERIMAGE</div>
        </div>
        <div className="min-w-[400px] h-full text-gray-700 flex flex-col flex-auto">
          <div>
            Email.{' '}
            <input
              type="text"
              value=""
              placeholder="wonny727@gmail.com"
              className="border-b border-gray-400 focus:border-blue-500 outline-none"
            />
          </div>
          <div>
            Phone.{' '}
            <input
              type="text"
              value=""
              placeholder="010-0000-0000"
              className="border-b border-gray-400 focus:border-blue-500 outline-none"
            />
          </div>
          {blogInputs.map((input, index) => (
            <div key={index}>
              <input
                type="text"
                value={input.blog}
                onChange={(e) => handleBlogInputChange(e, index, 'blog')}
                placeholder="ex)깃허브."
                className="border-b border-gray-400 focus:border-blue-500 outline-none"
              />
              <input
                type="text"
                value={input.url}
                onChange={(e) => handleBlogInputChange(e, index, 'url')}
                placeholder="URL 주소"
                className="border-b border-gray-400 focus:border-blue-500 outline-none"
              />
              <button type="button" className="text-black py-1 px-2 rounded" onClick={() => deleteBlogInput(index)}>
                X
              </button>
            </div>
          ))}
          <button type="button" onClick={addUrlInput} className="bg-blue-500 text-white mt-4 py-2 px-4 rounded">
            주소 추가
          </button>
        </div>
      </div>
      <Titlename title="Introduce" />
      <div className="border border-gray-300 rounded-md p-4">
        <input type="text" value={introduce} onChange={handleIntroduceChange} className="outline-none" />
      </div>
      <button type="submit" className="bg-blue-500 text-white mt-4 py-2 px-4 rounded">
        저장
      </button>
    </form>
  )
}
