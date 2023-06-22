interface TitlenameProps {
  title: string
}

export default function Titlename({ title }: TitlenameProps) {
  return (
    <div className="border-b-2 border-black mb-4">
      <h1 className="text-2xl font-semibold text-blue-600">{title}</h1>
    </div>
  )
}
