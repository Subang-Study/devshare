'use client'

import Category from '@/components/server/resume/Category'
import Profile from '@/components/server/resume/Profile'
import Skill from '@/components/server/resume/Skill'
import CategoryDetails from '@/components/server/resume/CategoryDetails'
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
          <Category.Direction direction="none">
            <p className="w-full gap-1">{data.userInfo.introduction}</p>
          </Category.Direction>
        </Category>
        {/* 스킬 셋 */}
        <Category title="Skill Set">
          <Category.Direction direction="horizon">
            {data.techStack?.map((el) => (
              <Skill key={el.title} title={el.title} description={el.description} />
            ))}
          </Category.Direction>
        </Category>
        {/* 각종 카테고리 */}
        {data.categorys?.map((el) => {
          return (
            <Category title={el.title} key={el.title}>
              <Category.Direction direction="vertical">
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
