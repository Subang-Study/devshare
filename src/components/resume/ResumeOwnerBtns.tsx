'use client'

import Btn from '@/components/ui/Btn'
import { VscTrash, VscEdit } from 'react-icons/vsc'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteResume } from '@/lib/api/apis'
import { ApiError } from 'next/dist/server/api-utils'
import useToast from '@/lib/hooks/useToast'

interface IResumeOwnerBtnsProps {
  resumeId: string
}

export default function ResumeOwnerBtns({ resumeId }: IResumeOwnerBtnsProps) {
  const router = useRouter()
  const queryClient = useQueryClient()
  const { setToast } = useToast()
  const { mutate } = useMutation({
    mutationFn: deleteResume,
    onSuccess: () => {
      queryClient.clear()
      router.push('/')
    },
    onError: (e) => {
      if (e instanceof ApiError) {
        setToast({ visible: true, detail: e.message })
      }
    },
  })

  return (
    <div className="absolute top-0 flex flex-row gap-1 p-1 bg-white right-px w-fit dark:bg-neutral-700">
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
        onClick={() => mutate(resumeId)}
      >
        <VscTrash />
        삭제하기
      </Btn>
    </div>
  )
}
