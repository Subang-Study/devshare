import { ReactNode } from 'react'

interface TitlenameProps {
  children: ReactNode
}

export default function Titlename({ children }: TitlenameProps) {
  return (
    <div className="w-full border-b-2 border-black mb-4">
      <h1 className="max-md:w-1/3 flex-1 text-3xl text-blue-600">{children}</h1>
    </div>
  )
}
