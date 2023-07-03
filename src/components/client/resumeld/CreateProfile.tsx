'use client'

/* eslint-disable react/no-array-index-key */
import Titlename from '@/components/server/Titlename'
import { ChangeEvent, useState, FormEvent } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import UserInfoForm from './UserInfoForm'
import TechStackForm from '../resumeEdit/TechStackForm'
import { IResumeData } from '../../../types/resumeDataType'

interface BlogInput {
  blog: string
  url: string
}

export default function CreateProfile() {
  const method = useForm<IResumeData>()
  const [blogInputs, setBlogInputs] = useState<BlogInput[]>([{ blog: '', url: '' }])
  const [introduce, setIntroduce] = useState<string>('')

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

  const handleIntroduceChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduce(e.target.value)
  }

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <FormProvider {...method}>
      <form onSubmit={method.handleSubmit(onSubmit)} className="flex flex-col w-full">
        <UserInfoForm />
        <TechStackForm />

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
                className=" border-gray-400 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              Phone.{' '}
              <input
                type="text"
                value=""
                placeholder="010-0000-0000"
                className=" border-gray-400 focus:border-blue-500 outline-none"
              />
            </div>
            {blogInputs.map((input, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={input.blog}
                  onChange={(e) => handleBlogInputChange(e, index, 'blog')}
                  placeholder="ex)깃허브."
                  className=" border-gray-400 focus:border-blue-500 outline-none"
                />
                <input
                  type="text"
                  value={input.url}
                  onChange={(e) => handleBlogInputChange(e, index, 'url')}
                  placeholder="URL 주소"
                  className=" border-gray-400 focus:border-blue-500 outline-none"
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
          <textarea rows={5} value={introduce} onChange={handleIntroduceChange} className="outline-none w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white mt-4 py-2 px-4 rounded">
          저장
        </button>
      </form>
    </FormProvider>
  )
}
