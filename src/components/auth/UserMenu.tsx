'use client'

import useOutSideClick from '@/lib/hooks/useOuterClick'
import { useRef, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { PiUserCircle } from 'react-icons/pi'
import Txt from '@/components/ui/Txt'
import DarkModeToggle from '@/components/ui/DarkModeToggle'

export default function UserMenu() {
  const menuRef = useRef(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data, status } = useSession()
  const setIsOpenStateReverse = () => setIsOpen((prev) => !prev)

  useOutSideClick(menuRef, () => {
    setIsOpen(false)
  })

  return (
    <div className="relative flex items-center h-full md:mr-5" ref={menuRef}>
      <button className="flex items-center gap-2 h-4/5" type="button" onClick={setIsOpenStateReverse}>
        {status === 'authenticated' && (
          <Txt fontSize="mid-title" color="black" className="hidden font-semibold md:block">
            {data.user.login}
          </Txt>
        )}
        <PiUserCircle className="w-8 h-8 fill-black dark:fill-white" />
      </button>
      {isOpen && (
        <div className="absolute flex flex-col items-center justify-center p-4 border-1 border-neutral-300 dark:border-neutral-700 shadow-xl rounded-lg right-0 top-[110%] w-max bg-white dark:bg-neutral-600">
          <div className="flex gap-2">
            <Txt fontSize="basic" color="black">
              다크 모드
            </Txt>
            <DarkModeToggle />
          </div>
          <div />
          {status === 'authenticated' ? (
            <div className="flex flex-col-reverse">
              <button type="button" onClick={() => signOut({ callbackUrl: '/' })}>
                <Txt fontSize="basic" color="black">
                  Log out
                </Txt>
              </button>
              <Link href={`/resume?id=${data.user.id}`}>
                <Txt fontSize="basic" color="black">
                  My resume
                </Txt>
              </Link>
            </div>
          ) : (
            <Link href="/auth">
              <Txt fontSize="basic" color="black">
                Sign in
              </Txt>
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
