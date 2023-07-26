import CreateProfile from '@/components/client/resumeld/CreateProfile'

const getDefaultValue = async (id: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}api/resume/${id}`, { method: 'GET' })
  const result = res.json()
  return result
}

interface IEditResume {
  params: { resumeId: string }
}

export default async function EditResume({ params }: IEditResume) {
  const { resumeId } = params
  const defaultValue = await getDefaultValue(resumeId)
  return <CreateProfile defaultValue={defaultValue} />
}
