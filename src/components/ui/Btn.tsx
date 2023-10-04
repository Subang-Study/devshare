'use client'

import { ButtonHTMLAttributes } from 'react'

const BTN_SHAPE = {
  basic: '',
  border: 'shadow-border-2 text-blue-600 hover:shadow-blue-500 hover:text-blue-500',
  'slim-border': 'shadow-border-1 ',
}

const BTN_COLOR = {
  basic: '',
  blueFill: 'bg-blue-600 text-white hover:bg-blue-500',
  blueEmpty: 'shadow-blue-600 text-blue-600 hover:shadow-blue-500 hover:text-blue-500',
  red: 'shadow-red-600 text-red-600 hover:shadow-red-400 hover:bg-red-400 hover:text-white dark:hover:shadow-red-600',
  grey: 'shadow-neutral-500 text-neutral-500 dark:shadow-neutral-400 dark:text-neutral-400 hover:text-neutral-400 hover:shadow-neutral-400 dark:hover:text-neutral-300 dark:hover:shadow-neutral-300',
}

interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shape: keyof typeof BTN_SHAPE
  colors: keyof typeof BTN_COLOR
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
