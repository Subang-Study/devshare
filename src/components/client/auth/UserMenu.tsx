'use client'

import useOutSideClick from '@/hooks/useOuterClick'
import { useRef, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

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
        <svg className="w-auto h-full" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_80_2)">
            <path
              className="fill-black"
              d="M25 0C28.3854 0 31.622 0.660342 34.7098 1.98103C37.7976 3.30171 40.4576 5.07812 42.6897 7.31027C44.9219 9.54241 46.6983 12.2024 48.019 15.2902C49.3397 18.378 50 21.6146 50 25C50 28.3668 49.3443 31.5941 48.0329 34.6819C46.7215 37.7697 44.9498 40.4297 42.7176 42.6618C40.4855 44.894 37.8255 46.675 34.7377 48.005C31.6499 49.335 28.404 50 25 50C21.596 50 18.3501 49.3397 15.2623 48.019C12.1745 46.6983 9.51916 44.9172 7.29632 42.6758C5.07347 40.4343 3.30171 37.7744 1.98103 34.6959C0.660342 31.6174 0 28.3854 0 25C0 21.6146 0.660342 18.378 1.98103 15.2902C3.30171 12.2024 5.07812 9.54241 7.31027 7.31027C9.54241 5.07812 12.2024 3.30171 15.2902 1.98103C18.378 0.660342 21.6146 0 25 0ZM42.2712 37.6953C45.0428 33.8821 46.4286 29.6503 46.4286 25C46.4286 22.0982 45.8612 19.3266 44.7266 16.6853C43.5919 14.0439 42.0666 11.7653 40.1507 9.84933C38.2347 7.93341 35.9561 6.40811 33.3147 5.27344C30.6734 4.13876 27.9018 3.57143 25 3.57143C22.0982 3.57143 19.3266 4.13876 16.6853 5.27344C14.0439 6.40811 11.7653 7.93341 9.84933 9.84933C7.93341 11.7653 6.40811 14.0439 5.27344 16.6853C4.13876 19.3266 3.57143 22.0982 3.57143 25C3.57143 29.6503 4.95722 33.8821 7.72879 37.6953C8.95647 31.6127 11.8025 28.5714 16.2667 28.5714C18.7035 30.9524 21.6146 32.1429 25 32.1429C28.3854 32.1429 31.2965 30.9524 33.7333 28.5714C38.1975 28.5714 41.0435 31.6127 42.2712 37.6953ZM35.7143 19.6429C35.7143 16.6853 34.668 14.1602 32.5753 12.0675C30.4827 9.97489 27.9576 8.92857 25 8.92857C22.0424 8.92857 19.5173 9.97489 17.4247 12.0675C15.332 14.1602 14.2857 16.6853 14.2857 19.6429C14.2857 22.6004 15.332 25.1256 17.4247 27.2182C19.5173 29.3108 22.0424 30.3571 25 30.3571C27.9576 30.3571 30.4827 29.3108 32.5753 27.2182C34.668 25.1256 35.7143 22.6004 35.7143 19.6429Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_80_2">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute flex justify-center p-4 border shadow-lg rounded-lg right-0 top-[110%] w-max bg-white">
          {status === 'authenticated' ? (
            <button type="button" onClick={() => signOut({ callbackUrl: '/' })}>
              Logout
            </button>
          ) : (
            <Link href="/auth">Sign Up</Link>
          )}
        </div>
      )}
    </div>
  )
}
