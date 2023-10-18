'use client'

import Category from '@/components/resume/Category'
import Profile from '@/components/resume/Profile'
import Skill from '@/components/resume/Skill'
import CategoryDetails from '@/components/resume/CategoryDetails'
import { Session } from 'next-auth'
import { useQuery } from '@tanstack/react-query'
import { getResume } from '@/lib/api/apis'
import { IResumeData } from '@/types/resumeDataType'

interface IResumeDetailProps {
  session: Session | null
  id: string
  initialData: IResumeData
}

export default function ResumeDetails({ session, id, initialData }: IResumeDetailProps) {
  const { data, isSuccess } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getResume(id),
    initialData,
    retry: false,
  })

  if (isSuccess) {
    return (
      <>
        <Profile profileData={data.userInfo} />
        {/* 자기소개 */}
        <Category title="Introduce">
          <Category.Direction direction="none" padding="1">
            <pre className="w-full gap-1 dark:text-white min-h-[120px]">{data.userInfo.introduction}</pre>
          </Category.Direction>
        </Category>
        {/* 스킬 셋 */}
        <Category title="Skill Set">
          <Category.Direction direction="horizontal" padding="2/4" gap="gap-4">
            {data.techStack?.map((el) => (
              <Skill key={el.title} title={el.title} description={el.description} />
            ))}
          </Category.Direction>
        </Category>
        {/* 각종 카테고리 */}
        {data.categorys?.map((el) => {
          return (
            <Category title={el.title} key={el.title}>
              <Category.Direction direction="vertical" padding="2/4" gap="gap-4">
                {el.detail.map((detail) => {
                  return <CategoryDetails detailData={detail} key={detail.title} />
                })}
              </Category.Direction>
            </Category>
          )
        })}
      </>
    )
  }
}
