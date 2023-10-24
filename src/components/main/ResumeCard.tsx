/* eslint-disable @next/next/no-img-element */
/* eslint-disable no-underscore-dangle */

import { IResumeData } from '@/types/resumeDataType'
import { FaUser } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import Txt from '../ui/Txt'

interface IResumeCardProps {
  ResumeData: IResumeData
}

export default function ResumeCard({ ResumeData }: IResumeCardProps) {
  return (
    <Link
      href={`/resume/${ResumeData._id}`}
      className="flex flex-col justify-around w-full gap-2 p-4 shadow-xl aspect-video rounded-xl bg-neutral-100 min-w-[300px] border-2 border-blue-600 dark:bg-neutral-600"
      prefetch={false}
    >
      <div className="flex flex-col w-full h-1/4">
        <Txt fontSize="basic" color="black" className="break-words line-clamp-1">
          {ResumeData.userInfo?.name}
        </Txt>
        <Txt fontSize="detail" color="grey" className="line-clamp-1 text-ellipsis">
          {ResumeData.userInfo?.sentense}
        </Txt>
      </div>
      <div className="flex flex-row items-center justify-between w-full p-2 h-3/4">
        <div className="relative flex items-center justify-center w-4/12 overflow-hidden border-2 border-blue-600 rounded-full aspect-square">
          {ResumeData.userInfo.userImage ? (
            <Image
              src={ResumeData.userInfo.userImage as string}
              fill
              sizes="100%"
              priority
              alt="userImage"
              className="object-cover"
            />
          ) : (
            <FaUser className="w-4/5 -mb-[20%] text-blue-600 h-4/5" />
          )}
        </div>
        <div className="flex flex-col items-center justify-center w-7/12 h-full gap-1">
          <div className="w-full truncate line-clamp-1">
            <Txt fontSize="detail" color="grey">
              Email.{' '}
            </Txt>
            <Txt fontSize="detail" color="black">
              {ResumeData.userInfo?.personal.email}
            </Txt>
          </div>
          <div className="w-full truncate line-clamp-1">
            <Txt fontSize="detail" color="grey">
              Phone.{' '}
            </Txt>
            <Txt fontSize="detail" color="black">
              {ResumeData.userInfo?.personal.phone}
            </Txt>
          </div>
          {ResumeData?.userInfo.personal.channel.slice(0, 2).map((el) => {
            return (
              <div key={el.title} className="w-full truncate line-clamp-1">
                <Txt fontSize="detail" color="grey">
                  {el.title}.{' '}
                </Txt>
                <Txt fontSize="detail" color="black">
                  {el.url.replace(/(http(s)?:\/\/)/gi, '')}
                </Txt>
              </div>
            )
          })}
        </div>
      </div>
    </Link>
  )
}
