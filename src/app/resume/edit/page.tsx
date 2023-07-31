import AuthorizedAccess from '@/utils/AuthorizedAccess'
import CreateProfile from '@/components/client/resumeld/CreateProfile'
import { IResumeData } from '@/types/resumeDataType'

const getDefaultValue = async (id: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}api/resume/${id}`, { method: 'GET' })
  if (!res.ok) {
    throw new Error('Not Valid Id')
  }
  const result = res.json()
  return result as IResumeData
}

interface IEditResume {
  param: { [key: string]: string }
  searchParams: { id: string }
}

export default async function EditResume({ searchParams }: IEditResume) {
  const { id } = searchParams
  let defaultValue
  if (id) {
    try {
      defaultValue = await getDefaultValue(id)
    } catch (error) {
      if (error instanceof Error) {
        throw Error(error.message)
      }
    }
  }
  return (
    <AuthorizedAccess callbackPath={`/resume/edit?id=${id}`}>
      <CreateProfile defaultValue={defaultValue ?? undefined} />
    </AuthorizedAccess>
  )
}
