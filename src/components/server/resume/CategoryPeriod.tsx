import { IResumeCategoryDetail } from '@/types/resumeDataType'
import Txt from '@/components/client/ui/Txt'

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

export default function CategoryPeriod({ period }: Pick<IResumeCategoryDetail, 'period'>) {
  return (
    <Txt color="grey" typography="detail">
      {dateFormatter(period).join(' ~ ')}
    </Txt>
  )
}
