import { NextApiRequest, NextApiResponse } from 'next'
import { connectDB } from '@/utils/database'
import { ObjectId } from 'mongodb'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)
  if (req.method === 'POST') {
    const val = JSON.parse(req.body).value
    try {
      const db = (await connectDB).db('devshare')
      // eslint-disable-next-line prefer-const
      let response = await db.collection<{ value: string }>('member').insertOne({ value: val })
      const value = { id: response.insertedId, value: val, user: session?.user.email }
      res.status(200).json(value)
    } catch (err) {
      console.log(err)
      res.status(404).send('err')
    }
  }
}

export default handler
