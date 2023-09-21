export default function ResumeLoading() {
  return (
    <div className="flex flex-col w-full gap-4 animate-pulse">
      <div className="flex flex-col w-full gap-3 p-4 rounded-xl bg-neutral-300">
        <div className="w-1/4 h-12 bg-white rounded-full" />
        <div className="w-2/3 h-4 bg-white rounded-full" />
      </div>
      <div className="flex flex-row w-full p-8 bg-neutral-300 max-sm:flex-col rounded-xl">
        <div className="w-1/4 bg-white rounded-full aspect-square" />
        <div className="flex flex-col justify-around w-3/4 h-full gap-4 p-8">
          <div className="w-full h-4 bg-white rounded-full" />
          <div className="w-full h-4 bg-white rounded-full" />
          <div className="w-full h-4 bg-white rounded-full" />
          <div className="w-full h-4 bg-white rounded-full" />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 p-4 bg-neutral-300 rounded-xl">
        <div className="w-1/4 h-8 bg-white rounded-full" />
        <hr />
        <div className="w-full h-4 bg-white rounded-lg" />
        <div className="w-full h-4 bg-white rounded-lg" />
        <div className="w-full h-4 bg-white rounded-lg" />
        <div className="w-full h-4 bg-white rounded-lg" />
      </div>
      <div className="flex flex-col w-full gap-2 p-4 bg-neutral-300 rounded-xl">
        <div className="w-1/4 h-8 bg-white rounded-full" />
        <hr />
        <div className="w-full bg-white rounded-lg h-80" />
      </div>
      <div className="flex flex-col w-full gap-2 p-4 bg-neutral-300 rounded-xl">
        <div className="w-1/4 h-8 bg-white rounded-full" />
        <hr />
        <div className="w-full bg-white aspect-video rounded-xl" />
      </div>
    </div>
  )
}
