/* eslint-disable no-underscore-dangle */
import CreateProfile from '@/components/resumeEditor/CreateProfile'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

interface IEditResume {
  searchParams: { id: string }
}

export default async function Page({ searchParams }: IEditResume) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect(`/auth?callbackUrl=/resume/edit?id=${searchParams.id}`)
  }

  if (session?.user.id !== searchParams.id) {
    redirect('/')
  }

  return <CreateProfile id={searchParams.id} />
}
