import { IResumeCategory } from '@/types/resumeDataType'
import CategoryDetails from './CategoryDetails'
import Titlename from './Titlename'

interface IProfileProps {
  categoryList: IResumeCategory[] | undefined
}

export default function Categories({ categoryList }: IProfileProps) {
  return (
    <div>
      {categoryList?.map((ele) => {
        return (
          <>
            <Titlename>{ele.title}</Titlename>
            <CategoryDetails detailList={ele.detail} />
          </>
        )
      })}
    </div>
  )
}
