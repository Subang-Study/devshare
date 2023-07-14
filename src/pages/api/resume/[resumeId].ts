import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function getResume(req: NextApiRequest, res: NextApiResponse) {
  const { resumeId } = req.query
  const db = (await connectDB).db('devshare')
  if (req.method === 'GET') {
    try {
      const result = await db.collection('resume').findOne({ _id: new ObjectId(resumeId as string) })
      if (result === null) {
        throw Error('이미 존재하지 않는 이력서입니다.')
      }
      res.status(200).json(result)
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      }
    }
  } else if (req.method === 'DELETE') {
    try {
      await db.collection('resume').deleteOne({ _id: new ObjectId(resumeId as string) })
    } catch (err) {
      res.status(500)
    }
    if (res.statusCode !== 500) {
      res.status(200).json('삭제성공')
    }
  }
}
