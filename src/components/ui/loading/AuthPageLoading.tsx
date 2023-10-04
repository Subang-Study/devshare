export default function AuthPageLoading() {
  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <div className="flex flex-col gap-12 p-8 border-2 shadow-xl rounded-xl bg-neutral-100 min-w-max">
        <div className="flex items-center justify-center gap-0.5 h-12 text-[1.5rem] font-medium">DEVSHARE</div>
        <div className="w-[300px] h-11 bg-white rounded-md flex justify-center items-center gap-2 font-semibold text-black">
          GITHUB
        </div>
      </div>
    </div>
  )
}
