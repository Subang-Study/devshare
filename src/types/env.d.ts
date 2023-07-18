declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_DB: string
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
    GITHUB_ID: string
    GITHUB_SECRET: string
    AWS_S3_USERIMAGE_BUCKETNAME: string
    AWS_S3_USERIMAGE_KEY: string
    AWS_S3_USERIMAGE_SECRET: string
  }
}
