import { ReactNode } from 'react'
import Txt from '@/components/client/ui/Txt'

interface ICategoryProps {
  title: string
  children: ReactNode
}

const Category = ({ title, children }: ICategoryProps) => {
  return (
    <div>
      <div className="w-full border-b-2 border-black">
        <Txt color="blue" fontSize="title" font="k2d">
          {title}
        </Txt>
      </div>
      {children}
    </div>
  )
}

interface IDirectionProps {
  direction: keyof typeof directionStyle
  children: ReactNode
}

const directionStyle = {
  horizon: 'flex flex-row items-center gap-4 pt-4 overflow-scroll snap-x snap-mandatory scrollbar-hide',
  vertical: 'flex flex-col items-center w-full gap-4 pt-4',
  none: 'p-1 border border-gray-300 rounded-md',
}

export const Direction = ({ direction, children }: IDirectionProps) => {
  return <div className={`${directionStyle[direction]}`}>{children}</div>
}

Category.Direction = Direction

export default Category
