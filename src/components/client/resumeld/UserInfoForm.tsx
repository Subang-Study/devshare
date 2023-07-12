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

  const handleImageUpload = async (e) => {
    // 파일 업로드 로직 작성
    // 업로드 성공 시 이미지 URL을 폼 데이터에 설정
    // setValue('userInfo.userImage', imageUrl);
  }

  return (
    <>
      <input
        placeholder="Nameß"
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
          <UserImageUploadButton onImageUpload={handleImageUpload} />
        </div>
        <div className="min-w-[400px] h-full text-gray-700 flex flex-col flex-auto">
          <table>
            <tbody>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    placeholder="email"
                    type="text"
                    {...register('userInfo.personal.email', { required: true })}
                    className="  outline-none"
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
                    className="  outline-none"
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

// todo 유저이미지 부분 따로 컴포넌트화 시키고 버튼을 눌렀을때 이미지 넣게 하기
// todo 이메일 폰 아래 주소 부분 테이블 형식으로 만들기 완
// todo 유효성 정규식 알아오기
