import { IResumeData } from '@/types/resumeDataType'

export const getPost = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/resume/${id}`, { cache: 'no-store' })
  if (res.ok) {
    const result = (await res.json()) as IResumeData
    return result
  }
  return Promise.reject(new Error(''))
}
