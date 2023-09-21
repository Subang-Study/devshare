import { IResumeCategoryDetail } from '@/types/resumeDataType'
import Txt from '@/components/ui/Txt'

const dateFormatter = (period: (Date | null)[]) => {
  const periodArray: string[] = period.map((ele) => {
    if (ele) {
      const curDate = new Date(ele)
      const year = curDate.getFullYear()
      const month = curDate.getMonth()
      return `${year}. ${month}.`
    }
    return ''
  })
  return periodArray
}

interface ICategoryDetailsProps {
  detailData: IResumeCategoryDetail
}

export default function CategoryDetails({ detailData }: ICategoryDetailsProps) {
  return (
    <div className="flex flex-wrap w-full">
      <div className="relative flex flex-col max-md:w-full w-1/4 gap-1 text-xl md:border-r-2 border-blue-600 min-w-[200px]">
        <Txt color="black" fontSize="mid-title">
          {detailData.title}
        </Txt>
        <Txt color="grey" fontSize="detail">
          {dateFormatter(detailData.period).join(' ~ ')}
        </Txt>
      </div>
      <div className="flex flex-col flex-1 gap-1 md:p-2 md:min-w-[504px]">
        <Txt color="black" fontSize="basic">
          {detailData.content.title}
        </Txt>
        <hr className="w-full h-[1px] bg-neutral-300 border-none rounded-full" />
        <p className="text-sm">{detailData.content.description}</p>
      </div>
    </div>
  )
}
