import aws from 'aws-sdk'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  aws.config.update({
    accessKeyId: process.env.AWS_S3_USERIMAGE_KEY,
    secretAccessKey: process.env.AWS_S3_USERIMAGE_SECRET,
    region: 'ap-northeast-2',
    signatureVersion: 'v4',
  })

  const s3 = new aws.S3()
  const url = await s3.createPresignedPost({
    Bucket: process.env.AWS_S3_USERIMAGE_BUCKETNAME,
    Fields: { key: `userImage/${req.query.file}` },
    Expires: 60,
    Conditions: [['content-length-range', 0, 5 * 1024 * 1024]],
  })

  res.status(200).json(url)
}
