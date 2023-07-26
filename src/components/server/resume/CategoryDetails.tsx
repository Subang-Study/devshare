import { IResumeCategoryDetail } from '@/types/resumeDataType'
import CategoryPeriod from './CategoryPeriod'

interface ICategoryDetailsProps {
  detailList: IResumeCategoryDetail[]
}

export default function CategoryDetails({ detailList }: ICategoryDetailsProps) {
  return (
    <>
      {detailList.map((el) => {
        return (
          <div className="flex flex-row" key={el.title}>
            <div className="flex flex-col">
              <div className="min-w-[150px]">
                <h2 className="font-bold text-xl">{el.title}</h2>
              </div>
              <CategoryPeriod period={el.period} />
            </div>
            <div className="flex flex-col">
              <div className="min-w-[150px]">
                <p>{el.content.title}</p>
              </div>
              <div>
                <p>{el.content.description}</p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
