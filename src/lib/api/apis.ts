import { IResumeData } from '@/types/resumeDataType'
import { ApiError } from './errors'
import { specialCharacterReg } from '../constants/regex'

const rejectIfNeeded = async (res: Response) => {
  if (!res.ok) {
    const data = await res.json()
    throw new ApiError(data.statusCode, data.message)
  }
}

export const getResumeList = async () => {
  const res = await fetch('/api/resumes/resumes')

  rejectIfNeeded(res)

  return (await res.json()) as IResumeData[]
}

export const getResume = async (id: string) => {
  const res = await fetch(`/api/resume/${id}`)

  rejectIfNeeded(res)

  return (await res.json()) as IResumeData
}

export const deleteResume = async (id: string) => {
  const res = await fetch(`/api/resume/${id}`, { method: 'DELETE' })

  rejectIfNeeded(res)

  return (await res.json()) as string
}

export const addResume = async (data: IResumeData) => {
  const res = await fetch(`/api/resume/create`, { method: 'POST', redirect: 'follow', body: JSON.stringify(data) })

  rejectIfNeeded(res)

  if (res.redirected) {
    return res.url
  }
}

export const editResume = async (id: string, data: IResumeData) => {
  const res = await fetch(`/api/resume/${id}`, { method: 'PUT', redirect: 'follow', body: JSON.stringify(data) })

  rejectIfNeeded(res)

  if (res.redirected) {
    return res.url
  }
}

export const getPresignedUrl = async (id: string, form: IResumeData) => {
  const curData = { ...form }
  const curTime = new Date()

  const file = curData.userInfo.userImage
  if (!!file && typeof file !== 'string') {
    const res = await fetch(
      `/api/uploadImage/uploadUserImage?file=${id}${curTime.toJSON().replace(specialCharacterReg, '')}`,
    )
    const data = await res.json()

    const formData = new FormData()
    Object.entries({ ...data.fields, file }).forEach(([key, value]) => {
      formData.append(key, value as Blob)
    })

    const result = await fetch(data.url, { method: 'POST', body: formData })

    if (result.ok) {
      curData.userInfo.userImage = `https://devshareimage.s3.ap-northeast-2.amazonaws.com/userImage/${id}${curTime
        .toJSON()
        .replace(specialCharacterReg, '')}`
    }
  }
  return curData as IResumeData
}
