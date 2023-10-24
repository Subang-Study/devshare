'use client'

import DefaultLogo from '@/components/ui/DefaultLogo'
import GithubLoginBtn from '@/components/auth/GithubLoginBtn'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  return (
    <div
      onClick={() => router.back()}
      role="none"
      className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="flex flex-col gap-12 p-8 border-2 shadow-xl dark:border-neutral-400 rounded-xl bg-neutral-100 min-w-max dark:bg-neutral-600">
        <DefaultLogo />
        <GithubLoginBtn />
      </div>
    </div>
  )
}
