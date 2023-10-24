/* eslint-disable no-underscore-dangle */
import { errors } from '@/lib/api/errors'
import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'
import { getServerSession } from 'next-auth'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'
import { IResumeData } from '@/types/resumeDataType'
import { getCurrentDate } from '@/lib/time'
import { authOptions } from '../../auth/[...nextauth]/route'

interface IRouteProps {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, { params }: IRouteProps) {
  try {
    const db = (await connectDB).db('devshare')
    const result = await db.collection('resume').findOne({ _id: new ObjectId(params.id) })
    if (result === null) {
      throw Error('존재하지 않는 데이터입니다.')
    }
    return NextResponse.json(result, { status: 200 })
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(errors[404], { status: 404 })
    }
  }
}

export async function POST(request: NextRequest, { params }: IRouteProps) {
  try {
    const resumeId = params.id
    const session = await getServerSession(authOptions)
    const body = await request.json()

    const val = { ...body, author: session?.user.id, editedAt: getCurrentDate() }
    const db = (await connectDB).db('devshare')
    const value = await db.collection('resume').insertOne({ _id: new ObjectId(resumeId), ...val })

    revalidatePath('/resume/[id]', 'page')
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/resume/${value.insertedId}`)
  } catch (err) {
    console.log(err)
    return NextResponse.json(errors[403], { status: 403 })
  }
}

export async function PUT(request: NextRequest, { params }: IRouteProps) {
  try {
    const resumeId = params.id
    const body = (await request.json()) as IResumeData
    delete body._id

    const val = { ...body, editedAt: getCurrentDate() }
    const db = (await connectDB).db('devshare')
    await db.collection('resume').updateOne({ _id: new ObjectId(resumeId) }, { $set: { ...val } })

    revalidatePath('/resume/[id]', 'page')
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/resume/${resumeId}`, { status: 307 })
  } catch (error) {
    return NextResponse.json(errors[403], { status: 403 })
  }
}

export async function DELETE(request: NextRequest, { params }: IRouteProps) {
  try {
    const resumeId = params.id

    const db = (await connectDB).db('devshare')
    await db.collection('resume').deleteOne({ _id: new ObjectId(resumeId as string) })

    revalidatePath('/resume/[id]', 'page')
    return NextResponse.json('삭제성공', { status: 200 })
  } catch (err) {
    return NextResponse.json(errors[403], { status: 403 })
  }
}
