import { ReactNode } from 'react'

interface TitlenameProps {
  children: ReactNode
}

export default function Titlename({ children }: TitlenameProps) {
  return (
    <div className="border-b-2 border-black mb-4">
      <h1 className="text-2xl font-semibold text-blue-600">{children}</h1>
    </div>
  )
}
