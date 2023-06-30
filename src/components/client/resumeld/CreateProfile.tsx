'use client'

import Titlename from '@/components/server/Titlename'
import { SetStateAction, ChangeEvent, useState, FormEvent } from 'react'

interface BlogInput {
  blog: string
  url: string
}

export default function CreateProfile() {
  const [name, setName] = useState<string>('')
  const [bio, setBio] = useState<string>('')
  const [blogInputs, setBlogInputs] = useState<BlogInput[]>([{ blog: '', url: '' }])

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
        <span contentEditable>
          {' '}
          {/* Made the span contentEditable */}
          8년 차 개발자로 스타트업에서 웹과 앱 서비스를 개발/배포/운영하였습니다. 주로 웹 개발을 담당했으며 필요에 따라
          PO(Product Owner) 역할을 겸하였습니다. 작은 규모의 팀에 첫 번째 개발자로 입사하여 50억 투자를 유치하고 40명
          규모의 팀으로 성장할 때까지 필요한 기술 역량을 책임졌던 경험이 있습니다. 비즈니스 성장에 기여하는 일을
          최우선으로 합니다. 이를 위해 빠르게 개발하고 배포하여 딜리버리하는 역량과 데이터를 활용하여 유저를 이해하는
          역량을 쌓고자 노력해왔습니다. 또한, 큰 임팩트는 혼자가 아닌 함께 만들 수 있다고 생각하기에 다양한 직무의
          구성원들과 적극적으로 커뮤니케이션하며 협업해왔습니다. 반복되는 일을 자동화하고 비효율적인 프로세스를 개선하는
          일을 좋아합니다. 운영팀의 단순/루틴 업무 시간을 줄이기 위해 지속적으로 백오피스를 개발하여 운영팀 업무 시간을
          주당 70시간 이상 줄였던 경험이 있습니다.
        </span>
      </div>
      <button type="submit" className="bg-blue-500 text-white mt-4 py-2 px-4 rounded">
        저장
      </button>
    </form>
  )
}
