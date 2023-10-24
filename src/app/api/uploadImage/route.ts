import aws from 'aws-sdk'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const imageName = req.nextUrl.searchParams.get('file')

  aws.config.update({
    accessKeyId: process.env.AWS_S3_USERIMAGE_KEY,
    secretAccessKey: process.env.AWS_S3_USERIMAGE_SECRET,
    region: 'ap-northeast-2',
    signatureVersion: 'v4',
  })

  const s3 = new aws.S3()
  const url = await s3.createPresignedPost({
    Bucket: process.env.AWS_S3_USERIMAGE_BUCKETNAME,
    Fields: { key: `userImage/${imageName}` },
    Expires: 60,
    Conditions: [['content-length-range', 0, 5 * 1024 * 1024]],
  })

  return NextResponse.json(url, { status: 200 })
}
