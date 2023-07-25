import { k2d } from '@/app/font'
import { HTMLAttributes } from 'react'

interface ITxtProps extends HTMLAttributes<HTMLSpanElement> {
  typography: 'title' | 'span' | 'p'
  color: 'blue' | 'black' | 'grey'
  font?: 'k2d'
}

const TYPOGRAPHY_VARIANT = {
  title: 'text-3xl',
  span: 'text-base',
  p: 'text-sm',
}

const COLOR_VARIANT = {
  blue: 'text-blue-600',
  black: 'text-black',
  grey: 'text-neutral-600',
}

export default function Txt({ typography, color, font = undefined, ...props }: ITxtProps) {
  return (
    <span className={`${font && k2d.className} ${TYPOGRAPHY_VARIANT[typography]} ${COLOR_VARIANT[color]}`} {...props} />
  )
}
