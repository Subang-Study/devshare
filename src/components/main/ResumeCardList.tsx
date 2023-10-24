/* eslint-disable no-underscore-dangle */

'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { getResumeList } from '@/lib/api/apis'
import useToast from '@/lib/hooks/useToast'
import useInfinityScroll from '@/lib/hooks/useInfinityScroll'
import { ApiError } from 'next/dist/server/api-utils'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import ResumeCard from './ResumeCard'

export default function ResumeCardList() {
  const { setToast } = useToast()

  const { data, hasNextPage, fetchNextPage, isSuccess, isLoading } = useInfiniteQuery({
    queryKey: ['resumeList'],
    queryFn: ({ pageParam = 0 }) => getResumeList(pageParam),
    getNextPageParam: (lastPage) => {
      const { next } = lastPage

      if (!next) return undefined

      return next
    },
    onError: (e) => {
      if (e instanceof ApiError) {
        setToast({
          visible: true,
          detail: e.message,
        })
      }
    },
  })

  const target = useInfinityScroll({
    callbackFn: fetchNextPage,
    hasNextPage,
  })

  return (
    <section className="grid w-full grid-cols-2 gap-6 max-sm:grid-cols-1">
      {isSuccess &&
        data?.pages.map((page) => {
          return page.data.map((ele) => <ResumeCard ResumeData={ele} key={ele._id} />)
        })}
      {isLoading && (
        <div className="flex items-center justify-center w-full h-20 col-span-2 max-sm:col-span-1 rounded-2xl">
          <AiOutlineLoading3Quarters className="w-10 h-10 text-blue-600 animate-spin" />
        </div>
      )}

      {hasNextPage && !isLoading && <div ref={target} />}
    </section>
  )
}
