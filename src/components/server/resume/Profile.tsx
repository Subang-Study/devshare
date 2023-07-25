import { IResumeUserInfo } from '@/types/resumeDataType'

interface IProfileProps {
  profileData: IResumeUserInfo | undefined
}

export default function Profile({ profileData }: IProfileProps) {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-[2rem] font-bold mt-4">{profileData?.name}</h1>
      <p className="text-gray-600">{profileData?.sentense}</p>
      <div className="flex flex-row items-center justify-between w-full gap-4 mt-4 md:flex-wrap">
        <div className="w-1/4 min-w-[200px]">
          <div className="flex items-center justify-center w-full bg-blue-500 aspect-square">USERIMAGE</div>
        </div>
        <div className="min-w-[400px] h-full text-gray-700 flex flex-col flex-auto">
          <div>
            Email. <a href={profileData?.personal.email}>{profileData?.personal.email}</a>
          </div>
          <div>Phone. {profileData?.personal.phone}</div>
          {profileData?.personal.channel.map((el) => {
            return (
              <div key={el.title}>
                {el.title}. <a href={el.url}>{el.url}</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
