import Txt from '@/components/ui/Txt'

type SkillProps = {
  title: string
  description: string
}

export default function Skill({ title, description }: SkillProps) {
  return (
    <div className="relative flex flex-col flex-none w-32 p-3 aspect-square snap-start bg-neutral-200 rounded-xl dark:bg-neutral-600">
      <Txt fontSize="mid-title" color="black">
        {title}
      </Txt>

      <pre className="flex-1 w-full overflow-scroll text-sm break-words whitespace-pre-wrap scrollbar-hide text-neutral-600 dark:text-neutral-300">
        {description}
      </pre>
    </div>
  )
}
