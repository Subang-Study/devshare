import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/client/Logo'
import kakao from '../../../public/kakao_login.png'

export default function Login() {
  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <div className="flex flex-col gap-12 p-8 border-2 shadow-xl rounded-xl w-fit bg-neutral-100">
        <Logo isLogin={false} />
        <Link href="https://www.kakao.com" className="">
          <Image src={kakao} alt="kakao" />
        </Link>
      </div>
    </div>
  )
}
