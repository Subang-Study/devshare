import { IResumeCategoryDetail } from '@/types/resumeDataType'
import Txt from '@/components/client/ui/Txt'

const dateFormatter = (period: (Date | null)[]) => {
  const result = period.map((ele) => {
    if (ele) {
      const date = new Date(ele).toLocaleDateString().slice(0, -3)
      return date
    }
    return ''
  })
  return result
}

export default function CategoryPeriod({ period }: Pick<IResumeCategoryDetail, 'period'>) {
  return (
    <Txt color="grey" typography="p">
      {dateFormatter(period).join('~')}
    </Txt>
  )
}
