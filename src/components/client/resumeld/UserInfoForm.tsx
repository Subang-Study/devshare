'use client'

// import { useFormContext, useFieldArray } from 'react-hook-form'
// import { IResumeData } from '@/types/resumeDataType'
// import { k2d } from '@/app/font'

// export default function UserInfoForm() {
//   const { register, control } = useFormContext<IResumeData>()
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: 'userInfo.personal.channel',
//   })

//   return (
//     <>
//       <input
//         placeholder="이름"
//         type="text"
//         {...register('userInfo.name', { required: true })}
//         className="text-[2rem] font-bold mt-4    outline-none "
//       />
//       <input
//         placeholder="한줄 자기소개"
//         type="text"
//         {...register('userInfo.sentense', { required: true })}
//         className="w-full text-gray-600    outline-none"
//       />
//       <div className="flex flex-row justify-between gap-4 items-center mt-4 md:flex-wrap w-full">
//         <div className="w-1/4 min-w-[200px]">
//           <div className="bg-blue-500 w-full aspect-square flex items-center justify-center">USERIMAGE</div>
//         </div>
//         <div className="min-w-[400px] h-full text-gray-700 flex flex-col flex-auto">
//           <div>
//             Email{' '}
//             <input
//               placeholder="이름"
//               type="text"
//               {...register('userInfo.personal.email', { required: true })}
//               className="  outline-none"
//             />
//           </div>
//           <div>
//             Phone{' '}
//             <input
//               placeholder="010-0000-0000"
//               type="text"
//               {...register('userInfo.personal.phone', { required: true })}
//               className="  outline-none"
//             />
//             <button type="button" onClick={() => append({ title: '', url: '' })}>
//               +
//             </button>
//           </div>
//           {fields.map((field, idx) => {
//             return (
//               <div key={field.id}>
//                 <input
//                   placeholder="ex)깃허브"
//                   type="text"
//                   {...register(`userInfo.personal.channel.${idx}.title`)}
//                   className=" border-gray-400 focus:border-blue-500 outline-none"
//                 />
//                 <input placeholder="url" type="text" {...register(`userInfo.personal.channel.${idx}.url`)} />
//                 <button onClick={() => remove(idx)} type="button">
//                   -
//                 </button>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//       <h3 className={`${k2d.className} text-blue-600 text-3xl`}>Introduce</h3>
//       <hr className="w-full h-0.5 bg-black border-none rounded-full" />
//       <div className="border border-gray-300 rounded-md mt-4 p-4">
//         <textarea
//           rows={5}
//           placeholder=""
//           {...register('userInfo.introduction', { required: true })}
//           className="outline-none w-full gap-1 "
//         />
//       </div>
//     </>
//   )
// }

import { useFormContext, useFieldArray } from 'react-hook-form'
import { IResumeData } from '@/types/resumeDataType'
import { k2d } from '@/app/font'

export default function UserInfoForm() {
  const { register, control } = useFormContext<IResumeData>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'userInfo.personal.channel',
  })

  const handleImageUpload = async (e) => {
    // 파일 업로드 로직 작성
    // 업로드 성공 시 이미지 URL을 폼 데이터에 설정
    // setValue('userInfo.userImage', imageUrl);
  }

  return (
    <>
      <input
        placeholder="이름"
        type="text"
        {...register('userInfo.name', { required: true })}
        className="text-[2rem] font-bold mt-4    outline-none "
      />
      <input
        placeholder="한줄 자기소개"
        type="text"
        {...register('userInfo.sentense', { required: true })}
        className="w-full text-gray-600    outline-none"
      />
      <div className="flex flex-row justify-between gap-4 items-center mt-4 md:flex-wrap w-full">
        <div className="w-1/4 min-w-[200px]">
          <label
            htmlFor="imageUpload"
            className="bg-blue-500 w-full aspect-square flex items-center justify-center cursor-pointer"
          >
            <input id="imageUpload" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
            USERIMAGE
          </label>
        </div>
        <div className="min-w-[400px] h-full text-gray-700 flex flex-col flex-auto">
          <div>
            Email{' '}
            <input
              placeholder="이름"
              type="text"
              {...register('userInfo.personal.email', { required: true })}
              className="  outline-none"
            />
          </div>
          <div>
            Phone{' '}
            <input
              placeholder="010-0000-0000"
              type="text"
              {...register('userInfo.personal.phone', { required: true })}
              className="  outline-none"
            />
            <button type="button" onClick={() => append({ title: '', url: '' })}>
              +
            </button>
          </div>
          {fields.map((field, idx) => {
            return (
              <div key={field.id}>
                <input
                  placeholder="ex)깃허브"
                  type="text"
                  {...register(`userInfo.personal.channel.${idx}.title`)}
                  className=" border-gray-400 focus:border-blue-500 outline-none"
                />
                <input placeholder="url" type="text" {...register(`userInfo.personal.channel.${idx}.url`)} />
                <button onClick={() => remove(idx)} type="button">
                  -
                </button>
              </div>
            )
          })}
        </div>
      </div>
      <h3 className={`${k2d.className} text-blue-600 text-3xl`}>Introduce</h3>
      <hr className="w-full h-0.5 bg-black border-none rounded-full" />
      <div className="border border-gray-300 rounded-md mt-4 p-4">
        <textarea
          rows={5}
          placeholder=""
          {...register('userInfo.introduction', { required: true })}
          className="outline-none w-full gap-1"
        />
      </div>
    </>
  )
}
