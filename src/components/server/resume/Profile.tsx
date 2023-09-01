import Txt from '@/components/client/ui/Txt'
import Link from 'next/link'
import { IResumeUserInfo } from '@/types/resumeDataType'
import { Fragment } from 'react'
import { FaUser } from 'react-icons/fa'
import Image from 'next/image'

interface IProfileProps {
  profileData: IResumeUserInfo | undefined
}

export default function Profile({ profileData }: IProfileProps) {
  return (
    <div className="flex flex-col w-full gap-3">
      <div>
        <span className="text-3xl font-bold">{profileData?.name}</span>
        <p className="w-full text-gray-600">{profileData?.sentense}</p>
      </div>
      <div className="flex flex-row items-center justify-start w-full gap-4 max-sm:flex-col">
        <div className="w-1/4 min-w-[200px]">
          <div className="relative flex items-center justify-center w-full overflow-hidden border-2 border-blue-500 rounded-full aspect-square">
            {profileData?.userImage && typeof profileData?.userImage === 'string' ? (
              // eslint-disable-next-line @next/next/no-img-element
              <Image
                className="object-cover w-full h-full"
                src={profileData.userImage}
                alt="userImage"
                fill
                priority
                sizes="100%"
              />
            ) : (
              <FaUser className="w-4/5 -mb-[20%] text-blue-600 h-4/5" />
            )}
          </div>
        </div>
        <div className="grid h-full grid-cols-3 text-gray-700">
          <Txt typography="span" color="black">
            Email.
          </Txt>
          <Txt typography="span" color="grey" className="col-span-2">
            {profileData?.personal.email}
          </Txt>

          <Txt typography="span" color="black">
            Phone.
          </Txt>
          <Txt typography="span" color="grey" className="col-span-2">
            {profileData?.personal.phone}
          </Txt>

          {profileData?.personal.channel.map((el) => {
            return (
              <Fragment key={el.title}>
                <Txt typography="span" color="black">
                  {el.title}.
                </Txt>
                <Link href={el.url} className="col-span-2">
                  {el.url.replace(/(http(s)?:\/\/)/gi, '')}
                </Link>
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}
