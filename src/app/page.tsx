import ResumeCardList from '@/components/main/ResumeCardList'
import getQueryClient from '@/utils/getQueryClient'
import { Hydrate, dehydrate } from '@tanstack/react-query'

const getFirstList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/resumes?offset=0`, { cache: 'no-store' })
  return res.json()
}

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchInfiniteQuery(['resumeList'], getFirstList)
  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ResumeCardList />
    </Hydrate>
  )
}
