import Txt from '@/components/client/ui/Txt'
import { IResumeUserInfo } from '@/types/resumeDataType'

interface IProfileProps {
  profileData: IResumeUserInfo | undefined
}

export default function Profile({ profileData }: IProfileProps) {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-[2rem] font-bold outline-none">{profileData?.name}</h1>
      <p className="w-full text-gray-600 outline-none0">{profileData?.sentense}</p>
      <div className="flex flex-row items-center justify-between w-full gap-4 mt-4 max-sm:flex-col">
        <div className="w-1/4 min-w-[200px]">
          <div className="relative flex items-center justify-center w-full overflow-hidden border-2 border-blue-500 rounded-full aspect-square">
            {typeof profileData?.userImage === 'string' ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="w-full h-full" src={profileData.userImage} alt="userImage" width={100} height={100} />
            ) : (
              'USER IMAGE'
            )}
          </div>
        </div>
        <div className="sm:min-w-[400px] h-full text-gray-700 flex flex-col flex-auto">
          <Txt typography="span" color="grey">
            Email. {profileData?.personal.email}
          </Txt>
          <Txt typography="span" color="grey">
            Phone. {profileData?.personal.phone}
          </Txt>
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
