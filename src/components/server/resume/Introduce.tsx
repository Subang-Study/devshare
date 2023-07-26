import { IResumeUserInfo } from '@/types/resumeDataType'
import Titlename from './Titlename'

interface IProfileProps {
  profileData: IResumeUserInfo | undefined
}

export default function Introduce({ profileData }: IProfileProps) {
  return (
    <div>
      <Titlename title="Introduce" />
      <div className="border border-gray-300 rounded-md p-4">
        <span>{profileData?.introduction}</span>
      </div>
    </div>
  )
}
