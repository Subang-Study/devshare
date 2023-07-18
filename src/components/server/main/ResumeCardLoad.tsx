export default function ResumeCardLoad() {
  return (
    <div className="flex flex-col justify-around w-full gap-2 p-4 shadow-xl aspect-video rounded-xl bg-neutral-200 animate-pulse min-w-[300px]">
      <div className="flex flex-col w-full gap-2 h-1/4">
        <div className="w-1/3 h-3 bg-white rounded-full" />
        <div className="w-full h-3 bg-white rounded-full" />
      </div>
      <div className="flex flex-row items-center justify-between w-full gap-4 p-2 h-3/4">
        <div className="bg-white rounded-full h-4/5 aspect-square" />
        <div className="flex flex-col items-center justify-center flex-auto h-full gap-2">
          <div className="w-full h-3 bg-white rounded-full" />
          <div className="w-full h-3 bg-white rounded-full" />
          <div className="w-full h-3 bg-white rounded-full" />
          <div className="w-full h-3 bg-white rounded-full" />
        </div>
      </div>
    </div>
  )
}
