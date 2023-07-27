import { IResumeUserInfo } from '@/types/resumeDataType'
import Titlename from './Titlename'

interface IProfileProps {
  profileData: IResumeUserInfo | undefined
}

export default function Introduce({ profileData }: IProfileProps) {
  return (
    <div>
      <Titlename>Introduce</Titlename>
      <div className="p-4 mt-4 border border-gray-300 rounded-md">
        <span className="w-full gap-1">{profileData?.introduction}</span>
      </div>
    </div>
  )
}
