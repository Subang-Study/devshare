'use client'

/* eslint-disable import/extensions */
import { useFormContext, useFieldArray } from 'react-hook-form'
import { IResumeData } from '@/types/resumeDataType'
import { k2d } from '@/app/font'
import UserImageUploadButton from './UserImageUploadButton'

export default function UserInfoForm() {
  const { register, control } = useFormContext<IResumeData>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'userInfo.personal.channel',
  })

  // const handleImageUpload = async () => {
  //   // 파일 업로드 로직 작성
  //   // 업로드 성공 시 이미지 URL을 폼 데이터에 설정
  //   // setValue('userInfo.userImage', imageUrl);
  // }

  return (
    <>
      <input
        placeholder="Name"
        type="text"
        {...register('userInfo.name', { required: true })}
        className="text-[2rem] font-bold outline-none "
      />
      <input
        placeholder="한줄 소개"
        type="text"
        {...register('userInfo.sentense', { required: true })}
        className="w-full text-gray-600 outline-none"
      />
      <div className="flex flex-row items-center justify-between w-full gap-4 mt-4 max-sm:flex-col">
        <div className="w-1/4 min-w-[200px]">
          <UserImageUploadButton />
        </div>
        <div className="sm:min-w-[400px] h-full text-gray-700 flex flex-col flex-auto">
          <table>
            <tbody>
              <tr>
                <td className="w-40">Email</td>
                <td>
                  <input
                    placeholder="email"
                    type="text"
                    {...register('userInfo.personal.email', { required: true })}
                    className="outline-none "
                  />
                </td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>
                  <input
                    placeholder="010-0000-0000"
                    type="text"
                    {...register('userInfo.personal.phone', { required: true })}
                    className="outline-none "
                  />
                </td>
              </tr>

              {fields.map((field, idx) => {
                return (
                  <tr key={field.id}>
                    <td className="w-40">
                      <input
                        placeholder="ex)깃허브"
                        type="text"
                        {...register(`userInfo.personal.channel.${idx}.title`)}
                        className="w-full outline-none"
                      />
                    </td>
                    <td>
                      {' '}
                      <input placeholder="url" type="text" {...register(`userInfo.personal.channel.${idx}.url`)} />
                      <button onClick={() => remove(idx)} type="button">
                        -
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <div>
            <button type="button" onClick={() => append({ title: '', url: '' })}>
              +
            </button>
          </div>
        </div>
      </div>
      <h3 className={`${k2d.className} text-3xl`}>Introduce</h3>
      <hr className="w-full h-0.5 bg-black border-none rounded-full" />
      <div className="p-4 mt-4 border border-gray-300 rounded-md">
        <textarea
          rows={5}
          placeholder=""
          {...register('userInfo.introduction', { required: true })}
          className="w-full gap-1 outline-none"
        />
      </div>
    </>
  )
}
