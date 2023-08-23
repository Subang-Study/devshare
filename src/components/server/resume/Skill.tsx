import Txt from '@/components/client/ui/Txt'

type SkillProps = {
  title: string
  description: string
}

export default function Skill({ title, description }: SkillProps) {
  return (
    <div className="relative flex flex-col gap-1 p-3 w-36 aspect-square bg-neutral-200 rounded-xl">
      <Txt typography="mid-title" color="black">
        {title}
      </Txt>
      <p className="flex-1 overflow-scroll text-sm scrollbar-hide">{description}</p>
    </div>
  )
}
