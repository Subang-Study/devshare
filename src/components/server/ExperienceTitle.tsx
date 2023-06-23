interface ExperienceTitleProps {
  title: string
  description: string
  period: string
  content: string
}

export default function ExperienceTitle({ title, description, period, content }: ExperienceTitleProps) {
  return (
    <div>
      <div className="flex items-center">
        <div className="min-w-[150px]">
          <h2 className="font-bold text-xl ">{title}</h2>
        </div>
        <div className="">
          <p>{description}</p>
        </div>
      </div>
      <div className="flex items-center mt-2">
        <div className="min-w-[150px]">
          <h3 className="font-bold text-gray-400">{period}</h3>
        </div>
        <div className="">
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}
