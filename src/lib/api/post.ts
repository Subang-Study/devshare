import { IResumeData } from '@/types/resumeDataType'

export const getPost = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/resume/${id}`)
  if (res.ok) {
    const result = (await res.json()) as IResumeData
    return result
  }
  return Promise.reject(new Error(''))
}

export const request = async <T>(url: string, config?: RequestInit): Promise<T> => {
  const response = await fetch(url, config)
  const result = await response.json()
  return result
}
