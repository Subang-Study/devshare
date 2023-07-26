import { IResumeTechStack } from '@/types/resumeDataType'
import Skill from './Skill'
import Titlename from './Titlename'

interface IProfileProps {
  techData: IResumeTechStack[] | undefined
}

export default function Skillset({ techData }: IProfileProps) {
  return (
    <div>
      <Titlename>Techset</Titlename>
      <div className="flex flex-row flex-wrap items-center justify-start gap-4 p-4">
        {techData ? (
          techData.map((el) => <Skill key={el.title} title={el.title} description={el.description} />)
        ) : (
          <Skill title="title" description="description" />
        )}
      </div>
    </div>
  )
}
