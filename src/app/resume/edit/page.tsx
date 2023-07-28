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
  searchParams: { id: string }
}

export default async function EditResume({ searchParams }: IEditResume) {
  const { id } = searchParams
  if (id) {
    try {
      const defaultValue = await getDefaultValue(id)
      if (defaultValue) {
        return <CreateProfile defaultValue={defaultValue} />
      }
    } catch (error) {
      if (error instanceof Error) {
        throw Error(error.message)
      }
    }
  }
  return <CreateProfile />
}
