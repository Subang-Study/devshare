'use client'

/* eslint-disable import/extensions */
import { useFormContext, useFieldArray } from 'react-hook-form'
import { IResumeData } from '@/types/resumeDataType'
import { k2d } from '@/app/font'
import { Fragment } from 'react'
import InputError from '../ui/InputError'
import Txt from '../ui/Txt'
import UserImageUploadButton from './UserImageUploadButton'

export default function UserInfoForm() {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext<IResumeData>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'userInfo.personal.channel',
    rules: {
      maxLength: {
        value: 5,
        message: 'URL은 5개까지만 추가 가능합니다.',
      },
    },
  })
  const watchChannelArray = watch('userInfo.personal.channel')

  return (
    <>
      <input
        placeholder="Name"
        type="text"
        {...register('userInfo.name', { required: '필수 작성 칸입니다' })}
        className="text-[2rem] font-bold outline-none "
      />
      <InputError errors={errors} name="userInfo.name" />
      <input
        placeholder="한줄 소개"
        type="text"
        {...register('userInfo.sentense', { required: true })}
        className="w-full text-gray-600 outline-none"
      />
      <div className="flex flex-row justify-start w-full gap-4 mt-4 max-sm:flex-col">
        <div className="w-1/4 aspect-square min-w-[200px]">
          <UserImageUploadButton />
        </div>
        <div className="grid h-full grid-cols-3">
          <Txt typography="span" color="black">
            Email
          </Txt>
          <input
            placeholder="email"
            type="text"
            {...register('userInfo.personal.email', { required: true })}
            className="col-span-2 outline-none"
          />

          <Txt typography="span" color="black">
            Phone
          </Txt>
          <input
            placeholder="010-0000-0000"
            type="text"
            {...register('userInfo.personal.phone', { required: true })}
            className="col-span-2 outline-none"
          />
          <div className="grid h-auto grid-flow-row grid-cols-3 col-span-3">
            {fields.map((field, idx) => {
              return (
                <Fragment key={field.id}>
                  <div>
                    <input
                      placeholder="ex)깃허브"
                      type="text"
                      {...register(`userInfo.personal.channel.${idx}.title`)}
                      className="w-full outline-none"
                    />
                  </div>
                  <div className="relative col-span-2">
                    <input
                      placeholder="url"
                      type="text"
                      {...register(`userInfo.personal.channel.${idx}.url`)}
                      className="w-full outline-none"
                    />
                    <button className="absolute h-full right-1" onClick={() => remove(idx)} type="button">
                      -
                    </button>
                  </div>
                </Fragment>
              )
            })}
            {watchChannelArray?.length < 5 && (
              <div className="flex justify-center col-span-3">
                <button
                  type="button"
                  onClick={() => {
                    if (watchChannelArray.length < 5) {
                      append({ title: '', url: '' })
                    }
                  }}
                >
                  ++++
                </button>
              </div>
            )}
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
