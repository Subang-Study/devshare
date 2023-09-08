import { ReactNode } from 'react'
import Txt from '@/components/client/ui/Txt'

interface TitlenameProps {
  children: ReactNode
}

export default function Titlename({ children }: TitlenameProps) {
  return (
    <div className="w-full border-b-2 border-black">
      <Txt color="blue" fontSize="title" font="k2d">
        {children}
      </Txt>
    </div>
  )
}
