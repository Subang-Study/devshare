import { NextApiRequest, NextApiResponse } from 'next'
import { connectDB } from '@/utils/database'
import { getServerSession } from 'next-auth'
import { ObjectId } from 'mongodb'
import { authOptions } from '../auth/[...nextauth]'

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions)
  if (req.method === 'POST') {
    const val = { ...req.body, author: session?.user.id }
    try {
      const db = (await connectDB).db('devshare')
      const value = await db.collection('resume').insertOne({ _id: new ObjectId(session?.user.id), ...val })
      res.status(200).json({ id: value.insertedId })
    } catch (err) {
      console.log(err)
      res.status(400).send('err')
    }
  }
}

export default create
