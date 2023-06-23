type SkillProps = {
  title: string
  description: string
}

export default function Skill({ title, description }: SkillProps) {
  return (
    <div className="w-40 h-40 border border-gray-300 rounded-md p-4">
      <div className="flex flex-col h-full justify-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <span>{description}</span>
      </div>
    </div>
  )
}
