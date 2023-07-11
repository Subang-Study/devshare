'use client'

interface IBtnProps {
  className: string
  shape: 'basic' | 'border' | 'negative'
  onClick: () => void
  children: React.ReactNode
}

const btnShape = {
  basic: 'border-blue-600 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500',
  border: ' border-blue-600 text-blue-600 hover:border-blue-500 hover:text-blue-500',
  negative: 'border-neutral-400 text-neutral-400',
}

export default function Btn({ className, shape, onClick, children }: IBtnProps) {
  return (
    <button className={`${className} p-2 rounded-md border-2 ${btnShape[shape]}`} onClick={onClick} type="button">
      {children}
    </button>
  )
}
