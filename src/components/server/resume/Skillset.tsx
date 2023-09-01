import { IResumeTechStack } from '@/types/resumeDataType'
import Skill from './Skill'
import Titlename from './Titlename'

interface IProfileProps {
  techData: IResumeTechStack[] | undefined
}

export default function Skillset({ techData }: IProfileProps) {
  return (
    <div>
      <Titlename>Skill Set</Titlename>
      <div className="flex flex-row items-center gap-4 pt-4 overflow-scroll snap-x snap-mandatory scrollbar-hide">
        {techData ? (
          techData.map((el) => <Skill key={el.title} title={el.title} description={el.description} />)
        ) : (
          <Skill title="title" description="description" />
        )}
      </div>
    </div>
  )
}
