import { errors } from '@/lib/api/errors'
import { connectDB } from '@/utils/database'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let result
  if (req.method === 'GET') {
    try {
      const db = (await connectDB).db('devshare')
      result = await db.collection('resume').find().toArray()
      if (result.length === 0) {
        throw Error('리스트가 존재하지 않습니다.')
      }

      res.status(200).json(result)
    } catch (err) {
      if (err instanceof Error) {
        res.status(404).json(errors[404])
      }
    }
  }
}

export default handler
