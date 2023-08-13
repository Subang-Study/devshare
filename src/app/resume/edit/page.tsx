/* eslint-disable no-underscore-dangle */
import AuthorizedAccess from '@/utils/AuthorizedAccess'
import CreateProfile from '@/components/client/resumeld/CreateProfile'
import { IResumeData } from '@/types/resumeDataType'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { redirect } from 'next/navigation'

const getDefaultValue = async (id: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}api/resume/${id}`, { method: 'GET' })
  if (res.status === 404) {
    return
  }
  if (res.status === 401) {
    throw new Error('Not Authorized')
  }
  const result = await res.json()
  delete result._id
  return result as IResumeData
}

interface IEditResume {
  param: { [key: string]: string }
  searchParams: { id: string }
}

export default async function EditResume({ searchParams }: IEditResume) {
  const { id } = searchParams
  const session = await getServerSession(authOptions)
  let defaultValue
  if (id) {
    if (id === session?.user.id) {
      try {
        defaultValue = await getDefaultValue(id)
      } catch (error) {
        if (error instanceof Error) {
          if (error.message === 'Not Authorized') {
            redirect('/auth')
          }
        }
      }
    } else {
      redirect(`/resume?id=${id}`)
    }
  } else {
    redirect(`/`)
  }
  return (
    <AuthorizedAccess callbackPath={`/resume/edit?id=${id}`}>
      <CreateProfile
        defaultValue={defaultValue ?? undefined}
        mode={defaultValue ? 'EDIT' : 'CREATE'}
        id={defaultValue && id}
      />
    </AuthorizedAccess>
  )
}
