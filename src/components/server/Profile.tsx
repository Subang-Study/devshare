export default function Profile() {
  return (
    <div className="flex flex-col w-full">
      <div className="text-xl font-bold">Wonny</div>
      <div className="text-gray-600">8년 차, 데이터로 일하는 개발자 정원희입니다.</div>
      <div className="flex flex-row justify-between gap-4 items-center mt-4 md:flex-wrap w-full">
        <div className="w-1/4 min-w-[200px]">
          <div className="bg-blue-500 w-full aspect-square flex items-center justify-center">USERIMAGE</div>
        </div>
        <div className="min-w-[400px] h-full text-gray-700 flex flex-col flex-auto">
          <div>Email. wonny727@gmail.com</div>
          <div>Phone. 010-0000-0000</div>
          <div>Blog. https://wonny.space/</div>
          <div>GitHub. https://github.com/wonny-log</div>
          <div>Portfolio. https://brunch.co.kr/@hee072794</div>
        </div>
      </div>
    </div>
  )
}

// {list.map((x) => {
//   return (
//     <div>
//       <span>Email</span> : <Link>wonny727@gmail.comkjlkjlkjlkjlkjlkjlkjlkjlkjlkjl</Link>
//     </div>
//   )
// })}
