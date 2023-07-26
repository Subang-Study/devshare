'use client'

import { ButtonHTMLAttributes } from 'react'

const BTN_SHAPE = {
  basic: '',
  border: 'shadow-[0_0_0_2px_inset]  text-blue-600 hover:shadow-blue-500 hover:text-blue-500',
}

const BTN_COLOR = {
  blueFill: 'bg-blue-600 text-white hover:bg-blue-500',
  blueEmpty: 'shadow-blue-600 text-blue-600 hover:shadow-blue-500 hover:text-blue-500',
  red: 'shadow-red-600 text-red-600 hover:shadow-red-400 hover:bg-red-400 hover:text-white',
  grey: 'shadow-neutral-500 text-neutral-500 hover:text-neutral-400 hover:shadow-neutral-400',
}

interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shape: 'basic' | 'border'
  colors: 'blueFill' | 'blueEmpty' | 'red' | 'grey'
}

export default function Btn({ shape, colors, className, children, ...props }: IBtnProps) {
  return (
    <button
      className={`${className} duration-300 font-semibold rounded-md ${BTN_SHAPE[shape]} ${BTN_COLOR[colors]}`}
      {...props}
    >
      {children}
    </button>
  )
}
