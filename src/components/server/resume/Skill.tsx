type SkillProps = {
  title: string
  description: string
}

export default function Skill({ title, description }: SkillProps) {
  return (
    <div className="flex flex-col w-40 h-40 border border-gray-300 rounded-md p-4">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="flex-1 overflow-scroll scrollbar-hide text-sm">{description}</p>
    </div>
  )
}
