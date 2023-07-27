import { IResumeCategory } from '@/types/resumeDataType'
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
          <>
            <div className="flex flex-col w-full">
              <div className="flex w-full flex-row justify-between items-center">
                <Titlename>{ele.title}</Titlename>
              </div>
            </div>
            <CategoryDetails detailList={ele.detail} />
          </>
        )
      })}
    </div>
  )
}
