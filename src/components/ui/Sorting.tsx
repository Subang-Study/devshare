import { HtmlHTMLAttributes, ReactNode } from 'react'

export interface ISortingProps extends HtmlHTMLAttributes<HTMLDivElement> {
  direction: keyof typeof DIRECTIONS
  gap?: keyof typeof GAP
  padding?: keyof typeof PADDING
  children: ReactNode
}

const DIRECTIONS = {
  vertical: 'flex flex-col items-center w-full',
  horizontal: 'flex flex-row items-center snap-x snap-mandatory overflow-x-overlay custom-scroll',
  none: 'border border-gray-300 rounded-md',
}

const GAP = {
  'gap-4': 'gap-4',
  'gap-3': 'gap-3',
}

const PADDING = {
  '2/4': 'px-2 py-4',
  '0/4': 'py-4',
  '1': 'p-1',
}

export default function Sorting({ className, direction, gap, padding, children }: ISortingProps) {
  return (
    <div className={`${className} ${DIRECTIONS[direction]} ${gap && GAP[gap]} ${padding && PADDING[padding]}`}>
      {children}
    </div>
  )
}
