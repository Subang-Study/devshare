'use client'

import Category from '@/components/resume/Category'
import Profile from '@/components/resume/Profile'
import Skill from '@/components/resume/Skill'
import CategoryDetails from '@/components/resume/CategoryDetails'
import { Session } from 'next-auth'
import { useQuery } from '@tanstack/react-query'
import { getPost } from '@/lib/api/post'
import ResumeOwnerBtns from './ResumeOwnerBtns'

interface IResumeDetailProps {
  session: Session | null
  id: string
}

export default function ResumeDetails({ session, id }: IResumeDetailProps) {
  const { data, isSuccess } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPost(id),
  })

  if (isSuccess) {
    return (
      <div className="relative flex flex-col gap-3">
        {session?.user.id === data.author && <ResumeOwnerBtns resumeId={id} />}
        <Profile profileData={data.userInfo} />
        {/* 자기소개 */}
        <Category title="Introduce">
          <Category.Direction direction="none" padding="1">
            <p className="w-full gap-1">{data.userInfo.introduction}</p>
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
      </div>
    )
  }
}
