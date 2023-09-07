'use client'

/* eslint-disable import/extensions */
import { useFormContext, useFieldArray } from 'react-hook-form'
import Titlename from '@/components/server/resume/Titlename'
import { IResumeData } from '@/types/resumeDataType'
import { Fragment } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import InputError from '../ui/InputError'
import Txt from '../ui/Txt'
import Input from '../ui/Input'
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
        value: 4,
        message: 'URL은 4개까지만 추가 가능합니다.',
      },
    },
  })
  const watchChannelArray = watch('userInfo.personal.channel')

  return (
    <>
      <div>
        <Input
          fontSize="title"
          color="black"
          textStyle="bold"
          placeholder="Name"
          type="text"
          {...register('userInfo.name', { required: '필수 작성 칸입니다' })}
        />
        <InputError errors={errors} name="userInfo.name" className="" />
        <Input
          fontSize="basic"
          color="grey"
          placeholder="한줄 소개"
          type="text"
          {...register('userInfo.sentense', { required: '필수 작성 칸입니다' })}
          className="w-full"
        />
        <InputError errors={errors} name="userInfo.sentense" className="" />
      </div>
      <div className="flex flex-row items-center justify-start w-full gap-4 max-sm:flex-col">
        <div className="w-1/4 aspect-square min-w-[200px]">
          <UserImageUploadButton />
        </div>
        <div className="grid w-3/5 h-full grid-cols-3 max-md:w-4/5">
          <Txt typography="basic" color="black" className="w-full">
            Email
          </Txt>
          <Input
            fontSize="basic"
            color="grey"
            placeholder="email"
            type="email"
            {...register('userInfo.personal.email', {
              required: '필수 입력칸입니다.',
              pattern: {
                value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
                message: '이메일 형식을 맞춰주세요.',
              },
            })}
            className="w-full col-span-2"
          />
          <InputError errors={errors} name="userInfo.personal.email" className="col-span-3" />

          <Txt typography="basic" color="black">
            Phone
          </Txt>
          <Input
            fontSize="basic"
            color="grey"
            placeholder="010-0000-0000"
            type="tel"
            {...register('userInfo.personal.phone', {
              required: '필수 입력칸입니다.',
              pattern: {
                value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
                message: '형식을 맞춰주세요.',
              },
            })}
            className="w-full col-span-2"
          />
          <InputError errors={errors} name="userInfo.personal.phone" className="col-span-3" />

          <div className="grid h-auto grid-flow-row grid-cols-3 col-span-3">
            {fields.map((field, idx) => {
              return (
                <Fragment key={field.id}>
                  <div>
                    <Input
                      fontSize="basic"
                      color="black"
                      placeholder="ex)깃허브"
                      type="text"
                      {...register(`userInfo.personal.channel.${idx}.title`)}
                      className="w-full"
                    />
                  </div>
                  <div className="relative col-span-2">
                    <Input
                      fontSize="basic"
                      color="grey"
                      placeholder="url"
                      type="url"
                      {...register(`userInfo.personal.channel.${idx}.url`)}
                      className="w-full col-span-2"
                    />
                    <button className="absolute h-full" onClick={() => remove(idx)} type="button">
                      <FaMinus style={{ color: 'rgb(37, 99, 235)' }} />
                    </button>
                  </div>
                </Fragment>
              )
            })}
            {watchChannelArray?.length < 4 && (
              <div className="flex justify-center col-span-3">
                <button
                  type="button"
                  onClick={() => {
                    if (watchChannelArray.length < 5) {
                      append({ title: '', url: '' })
                    }
                  }}
                >
                  <FaPlus style={{ color: 'rgb(37, 99, 235)' }} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Titlename>Introduce</Titlename>
      <div className="p-1 border border-gray-300 rounded-md">
        <InputError errors={errors} name="userInfo.introduction" className="col-span-3" />
        <textarea
          rows={5}
          placeholder=""
          {...register('userInfo.introduction', { required: '필수 작성 칸입니다' })}
          className="w-full gap-1 outline-none"
        />
      </div>
    </>
  )
}
