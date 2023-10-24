import { errors } from '@/lib/api/errors'
import { connectDB } from '@/utils/database'
import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const LIMIT = 10
    const offset = Number(request.nextUrl.searchParams.get('offset')) ?? 0
    const db = (await connectDB).db('devshare')
    const result = await db
      .collection('resume')
      .find()
      .skip(offset * LIMIT)
      .limit(LIMIT)
      .toArray()
    return NextResponse.json({ data: result, next: result.length < 10 ? false : offset + 1 }, { status: 200 })
  } catch (err) {
    if (err instanceof Error) {
      console.log(err)
      return NextResponse.json(errors[404], { status: 404 })
    }
  }
}
