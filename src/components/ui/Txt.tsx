import { k2d } from '@/app/font'
import { HTMLAttributes } from 'react'

interface ITxtProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string
  fontSize: keyof typeof FONTSIZE_VARIANT
  textStyle?: keyof typeof TEXT_STYLE
  color: keyof typeof COLOR_VARIANT
  font?: 'k2d'
}

const FONTSIZE_VARIANT = {
  title: 'text-3xl',
  'mid-title': 'text-lg',
  basic: 'text-base',
  detail: 'text-sm',
  error: 'text-xs',
}

const TEXT_STYLE = {
  semiBold: 'font-semibold',
  bold: 'font-bold',
}

const COLOR_VARIANT = {
  blue: 'text-blue-600',
  black: 'text-black',
  grey: 'text-neutral-600',
  red: 'text-red-600',
}

export default function Txt({ className, fontSize, color, font = undefined, textStyle, ...props }: ITxtProps) {
  return (
    <span
      className={`${className} ${font && k2d.className} ${FONTSIZE_VARIANT[fontSize]} ${COLOR_VARIANT[color]} ${
        textStyle && TEXT_STYLE[textStyle]
      }`}
      {...props}
    />
  )
}
