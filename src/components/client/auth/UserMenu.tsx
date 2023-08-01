'use client'

import useOutSideClick from '@/hooks/useOuterClick'
import { useRef, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { PiUserCircle } from 'react-icons/pi'

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
        {status === 'authenticated' && <span className="hidden font-semibold md:block">{data.user.login}</span>}
        <PiUserCircle className="w-8 h-8" />
      </button>
      {isOpen && (
        <div className="absolute flex justify-center p-4 border shadow-lg rounded-lg right-0 top-[110%] w-max bg-white">
          {status === 'authenticated' ? (
            <div className="flex flex-col-reverse">
              <button type="button" onClick={() => signOut({ callbackUrl: '/' })}>
                Logout
              </button>
              <Link href={`/resume/edit?id=${data.user.id}`}>My resume</Link>
            </div>
          ) : (
            <Link href="/auth">Sign Up</Link>
          )}
        </div>
      )}
    </div>
  )
}
