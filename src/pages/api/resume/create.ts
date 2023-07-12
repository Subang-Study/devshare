import { NextApiRequest, NextApiResponse } from 'next'
import { connectDB } from '@/utils/database'

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const val = req.body
    try {
      const db = (await connectDB).db('devshare')
      const value = await db.collection('resume').insertOne(val)
      res.status(200).json({ id: value.insertedId })
    } catch (err) {
      console.log(err)
      res.status(404).send('err')
    }
  }
}

export default create
