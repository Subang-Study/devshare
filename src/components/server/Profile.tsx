export default function Profile() {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-[2rem] font-bold mt-4">Wonny</h1>
      <p className="text-gray-600">8년 차, 데이터로 일하는 개발자 정원희입니다.</p>
      <div className="flex flex-row justify-between gap-4 items-center mt-4 md:flex-wrap w-full">
        <div className="w-1/4 min-w-[200px]">
          <div className="bg-blue-500 w-full aspect-square flex items-center justify-center">USERIMAGE</div>
        </div>
        <div className="min-w-[400px] h-full text-gray-700 flex flex-col flex-auto">
          <div>
            Email. <a href="mailto:wonny727@gmail.com">wonny727@gmail.com</a>
          </div>
          <div>Phone. 010-0000-0000</div>
          <div>
            Blog. <a href="https://wonny.space/">https://wonny.space/</a>
          </div>
          <div>
            GitHub. <a href="https://github.com/wonny-log">https://github.com/wonny-log</a>
          </div>
          <div>
            Portfolio. <a href="https://brunch.co.kr/@hee072794">https://brunch.co.kr/@hee072794</a>
          </div>
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
