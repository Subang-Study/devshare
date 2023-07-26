type SkillProps = {
  title: string
  description: string
}

export default function Skill({ title, description }: SkillProps) {
  return (
    <div className="relative flex flex-col gap-1 p-3 w-36 aspect-square bg-neutral-200 rounded-xl">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="flex-1 overflow-scroll scrollbar-hide text-sm">{description}</p>
    </div>
  )
}
