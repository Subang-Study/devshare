interface ExperienceTitleProps {
  title: string
  description: string
  period: string
  content: string
}

export default function ExperienceTitle({ title, description, period, content }: ExperienceTitleProps) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="min-w-[150px]">
          <h2 className="font-bold text-xl ">{title}</h2>
        </div>
        <div className="">
          <h3 className="font-bold text-gray-400">{period}</h3>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="min-w-[150px]">
          <p>{description}</p>
        </div>
        <div className="">
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}
