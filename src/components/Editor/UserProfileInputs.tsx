import { useFieldArray, useFormContext, Controller } from 'react-hook-form'
import { IResumeData } from '@/types/resumeDataType'
import Input from '@/components/client/ui/Input'
import InputError from '@/components/client/ui/InputError'
import Txt from '@/components/client/ui/Txt'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { phoneReg, emailReg } from '@/lib/constants/regex'
import React, { useState, useRef, ChangeEvent, Fragment } from 'react'
import { IoCamera } from 'react-icons/io5'
import { PiUserCircleThin } from 'react-icons/pi'

const UserImageUploadButton = () => {
  const { control } = useFormContext<IResumeData>()
  const [file, setFile] = useState<File | undefined>()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>, onChange: (url: File) => void) => {
    const curFile = e.target.files?.[0]
    if (curFile) {
      setFile(curFile)
      onChange(curFile)
    }
  }

  const handleClickImage = () => {
    fileInputRef.current?.click()
  }

  return (
    <Controller
      control={control}
      name="userInfo.userImage"
      render={({ field: { value, onChange } }) => (
        <div className="relative flex items-center justify-center w-full border-2 border-blue-500 rounded-full aspect-square">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
              className="w-full h-full rounded-full"
              src={typeof value === 'string' ? value : URL.createObjectURL(file as File)}
              alt="userImage"
              onClick={handleClickImage}
            />
          ) : (
            <PiUserCircleThin className="w-full h-full text-blue-500" />
          )}
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, onChange)}
            className="hidden"
            ref={fileInputRef}
          />
          <button
            className="absolute flex items-center justify-center w-8 bg-white border-2 border-white rounded-full shadow-border shadow-blue-500 aspect-square bottom-4 right-4"
            type="button"
            onClick={handleClickImage}
          >
            <IoCamera className="w-4/5 text-blue-600 h-4/5 hover:text-blue-500" />
          </button>
        </div>
      )}
    />
  )
}

const UserProfileInput = () => {
  const {
    register,
    control,
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

  return (
    <div className="flex flex-col gap-3">
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
          <Txt fontSize="basic" color="black" className="w-full">
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
                value: emailReg,
                message: '이메일 형식을 맞춰주세요.',
              },
            })}
            className="w-full col-span-2"
          />
          <InputError errors={errors} name="userInfo.personal.email" className="col-span-3" />

          <Txt fontSize="basic" color="black">
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
                value: phoneReg,
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
            {fields.length < 4 && (
              <div className="flex justify-center col-span-3">
                <button
                  type="button"
                  onClick={() => {
                    if (fields.length < 5) {
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
    </div>
  )
}

export { UserProfileInput }
