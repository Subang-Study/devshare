/* eslint-disable no-underscore-dangle */
import { errors } from '@/lib/api/errors'
import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function getResume(req: NextApiRequest, res: NextApiResponse) {
  const { resumeId } = req.query
  const db = (await connectDB).db('devshare')

  // * GET요청
  if (req.method === 'GET') {
    try {
      const result = await db.collection('resume').findOne({ _id: new ObjectId(resumeId as string) })
      if (result === null) {
        throw Error('존재하지 않는 데이터입니다.')
      }
      res.status(200).json(result)
    } catch (err) {
      if (err instanceof Error) {
        res.status(404).json(errors[404])
      }
    }

    // * DELETE
  } else if (req.method === 'DELETE') {
    try {
      await db.collection('resume').deleteOne({ _id: new ObjectId(resumeId as string) })
    } catch (err) {
      res.status(403).json(errors[403])
    }
    if (res.statusCode !== 500) {
      res.status(200).json('삭제성공')
    }

    // * PUT
  } else if (req.method === 'PUT') {
    try {
      const updateValue = JSON.parse(req.body)
      delete updateValue._id
      await db.collection('resume').updateOne({ _id: new ObjectId(resumeId as string) }, { $set: { ...updateValue } })
      res.status(307).redirect(`${process.env.NEXT_PUBLIC_HOST}/resume/${resumeId}`)
    } catch (error) {
      console.log(error)
      res.status(403).json(errors[403])
    }
  }
}
