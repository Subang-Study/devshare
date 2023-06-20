'use client'

interface IBtnProps {
  className: string
  shape: 'basic' | 'border' | 'negative'
  onClick: () => void
  children: React.ReactNode
}

const btnShape = {
  basic: 'border-blue-600 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500',
  border: 'shadow-[0_0_0_2px_inset] shadow-blue-600 text-blue-600 hover:shadow-blue-500 hover:text-blue-500',
  negative: 'shadow-[0_0_0_2px_inset] shadow-neutral-500 text-neutral-500 hover:shadow-neutral-400 hover:text-neutral-400',
}

export default function Btn({ className, shape, onClick, children }: IBtnProps) {
  return (
    <button className={`${className} font-semibold p-2 rounded-md ${btnShape[shape]}`} onClick={onClick} type="button">
      {children}
    </button>
  )
}
