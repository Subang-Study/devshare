import { ReactNode } from 'react'
import Txt from '@/components/ui/Txt'
import Sorting from '../ui/Sorting'

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

Category.Direction = Sorting

export default Category
