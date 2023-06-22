import Logo from '@/components/client/Logo'
import GithubLoginBtn from '@/components/client/auth/GithubLoginBtn'

export default function Login() {
  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <div className="flex flex-col gap-12 p-8 border-2 shadow-xl rounded-xl bg-neutral-100 min-w-max">
        <Logo />
        <GithubLoginBtn />
      </div>
    </div>
  )
}
