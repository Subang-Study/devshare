import { IResumeCategoryDetail } from '@/types/resumeDataType'
import CategoryPeriod from './CategoryPeriod'

interface ICategoryDetailsProps {
  detailList: IResumeCategoryDetail[]
}

export default function CategoryDetails({ detailList }: ICategoryDetailsProps) {
  return (
    <div className="flex flex-col items-center w-full gap-3 p-4">
      {detailList.map((el) => {
        return (
          <div className="flex flex-wrap w-full" key={el.title}>
            <div className="relative flex flex-col max-md:w-full w-1/4 gap-1 p-1 text-xl md:border-r-2 border-blue-600 min-w-[200px]">
              <h2 className="font-bold text-lg">{el.title}</h2>
              <CategoryPeriod period={el.period} />
            </div>
            <div className="flex flex-col flex-1 gap-1 md:p-2 md:min-w-[504px]">
              <p className="font-bold text-base">{el.content.title}</p>
              <hr className="w-full h-[1px] bg-neutral-300 border-none rounded-full" />
              <p className="text-xs">{el.content.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
