'use client'

import Btn from '@/components/client/ui/Btn'
import { VscTrash, VscEdit } from 'react-icons/vsc'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useQueryClient } from '@tanstack/react-query'

interface IResumeOwnerBtnsProps {
  resumeId: string
}

export default function ResumeOwnerBtns({ resumeId }: IResumeOwnerBtnsProps) {
  const router = useRouter()
  const queryClient = useQueryClient()
  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/resume/${resumeId}`, { method: 'DELETE' })
      const result = await res.json()
      if (result) {
        queryClient.removeQueries({ queryKey: ['post', resumeId] })
        router.push('/')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="absolute top-0 flex flex-row gap-1 p-1 bg-white right-px w-fit">
      <Link href={`/resume/edit?id=${resumeId}`}>
        <Btn shape="slim-border" colors="grey" className="flex flex-row items-center px-1 py-0.5 text-sm">
          <VscEdit />
          수정하기
        </Btn>
      </Link>
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
