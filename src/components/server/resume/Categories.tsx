import { IResumeCategory } from '@/types/resumeDataType'
import { Fragment } from 'react'
import CategoryDetails from './CategoryDetails'
import Titlename from './Titlename'

interface IProfileProps {
  categoryList: IResumeCategory[] | undefined
}

export default function Categories({ categoryList }: IProfileProps) {
  return (
    <div className="flex flex-col items-center w-full">
      {categoryList?.map((ele) => {
        return (
          <Fragment key={ele.title}>
            <div className="flex flex-col w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <Titlename>{ele.title}</Titlename>
              </div>
            </div>
            <CategoryDetails detailList={ele.detail} />
          </Fragment>
        )
      })}
    </div>
  )
}
