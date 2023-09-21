import { k2d } from '@/app/font'
import { InputHTMLAttributes, forwardRef, ForwardedRef } from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  fontSize: keyof typeof FONT_SIZE
  textStyle?: keyof typeof TEXT_STYLE
  color: keyof typeof COLOR_VARIANT
  font?: 'k2d'
}

const FONT_SIZE = {
  title: 'text-3xl',
  'mid-title': 'text-lg',
  basic: 'text-base',
  detail: 'text-sm',
  error: 'text-xs',
}

const TEXT_STYLE = {
  bold: 'font-semibold',
}

const COLOR_VARIANT = {
  blue: 'text-blue-600',
  black: 'text-black',
  grey: 'text-neutral-600',
  red: 'text-red-600',
}

const Input = forwardRef(function Input(
  { className, fontSize, textStyle, color, font, ...props }: IInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <input
      className={`${font && k2d.className} ${FONT_SIZE[fontSize]} ${textStyle && TEXT_STYLE[textStyle]} ${
        COLOR_VARIANT[color]
      } outline-none ${className}`}
      ref={ref}
      {...props}
    />
  )
})

export default Input
