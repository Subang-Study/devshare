'use client'

import { ButtonHTMLAttributes } from 'react'

interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shape: 'basic' | 'border' | 'negative'
}

const btnShape = {
  basic: 'border-blue-600 bg-blue-600 text-white hover:bg-blue-500 hover:border-blue-500',
  border: 'shadow-[0_0_0_2px_inset] shadow-blue-600 text-blue-600 hover:shadow-blue-500 hover:text-blue-500',
  negative:
    'shadow-[0_0_0_2px_inset] shadow-neutral-500 text-neutral-500 hover:shadow-neutral-400 hover:text-neutral-400',
}

export default function Btn({ shape, className, children, ...props }: IBtnProps) {
  return (
    <button className={`${className} font-semibold p-2 rounded-md ${btnShape[shape]}`} {...props}>
      {children}
    </button>
  )
}
