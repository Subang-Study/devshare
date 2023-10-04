/* eslint-disable no-underscore-dangle */
import AuthorizedAccess from '@/utils/AuthorizedAccess'
import CreateProfile from '@/components/Editor/CreateProfile'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { redirect } from 'next/navigation'

interface IEditResume {
  searchParams: { id: string }
}

export default async function EditResume({ searchParams }: IEditResume) {
  const session = await getServerSession(authOptions)

  if (session?.user.id !== searchParams.id) {
    redirect('/')
  }

  return (
    <AuthorizedAccess callbackPath={`/resume/edit?id=${searchParams.id}`}>
      <CreateProfile id={searchParams.id} />
    </AuthorizedAccess>
  )
}
