/* eslint-disable import/no-extraneous-dependencies */
import Logo from '@/components/ui/Logo'
import GithubLoginBtn from '@/components/auth/GithubLoginBtn'

export default function Login() {
  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <div className="flex flex-col gap-12 p-8 border-2 shadow-xl dark:border-neutral-400 rounded-xl bg-neutral-100 min-w-max dark:bg-neutral-600">
        <Logo />
        <GithubLoginBtn />
      </div>
    </div>
  )
}
