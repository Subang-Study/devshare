import { IResumeData } from '@/types/resumeDataType'
import { useRouter } from 'next/navigation'
import Txt from '../ui/Txt'
import Btn from '../ui/Btn'

interface IResumeCardProps {
  ResumeData: IResumeData
}

export default function ResumeCard({ ResumeData }: IResumeCardProps) {
  const route = useRouter()
  return (
    <div className="flex flex-col justify-around w-full gap-2 p-4 shadow-xl aspect-video rounded-xl bg-neutral-100 min-w-[300px] border-2 border-blue-600">
      <div className="flex flex-col w-full gap-2 h-1/4">
        <Txt typography="span" color="black">
          {ResumeData.userInfo?.name}
        </Txt>
        <Txt typography="p" color="grey">
          {ResumeData.userInfo?.sentense}
        </Txt>
      </div>
      <div className="flex flex-row items-center justify-between w-full gap-4 p-2 h-3/4">
        <div className="bg-white rounded-full h-4/5 aspect-square" />
        <div className="flex flex-col items-center justify-center flex-auto h-full gap-1">
          <div className="w-full">
            <Txt typography="p" color="grey">
              Email.{' '}
            </Txt>
            <Txt typography="p" color="black">
              {ResumeData.userInfo?.personal.email}
            </Txt>
          </div>
          <div className="w-full">
            <Txt typography="p" color="grey">
              Phone.{' '}
            </Txt>
            <Txt typography="p" color="black">
              {ResumeData.userInfo?.personal.phone}
            </Txt>
          </div>
          <Btn shape="border" className="w-full" onClick={() => route.push('/example')}>
            더보기
          </Btn>
        </div>
      </div>
    </div>
  )
}