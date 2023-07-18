import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') res.status(200).json({ name: 'something' })
}

export default handler
