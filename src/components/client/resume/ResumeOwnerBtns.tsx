'use client'

import Link from 'next/link'
import Btn from '@/components/client/ui/Btn'
import { VscTrash, VscEdit } from 'react-icons/vsc'
import { useRouter } from 'next/navigation'

interface IResumeOwnerBtnsProps {
  resumeId: string
}

export default function ResumeOwnerBtns({ resumeId }: IResumeOwnerBtnsProps) {
  const router = useRouter()
  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/resume/${resumeId}`, { method: 'DELETE' })
      const result = await res.json()
      if (result) {
        router.push('/')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="flex flex-row justify-end gap-1">
      <Btn
        shape="slim-border"
        colors="grey"
        className="flex flex-row items-center px-1 py-0.5 text-sm"
        onClick={() => router.push(`/resume/edit?id=${resumeId}`)}
      >
        <VscEdit />
        수정하기
      </Btn>
      <Btn
        shape="slim-border"
        colors="red"
        className="flex flex-row items-center px-1 py-0.5 text-sm"
        onClick={handleDelete}
      >
        <VscTrash />
        삭제하기
      </Btn>
    </div>
  )
}
