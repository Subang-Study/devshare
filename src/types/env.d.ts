declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_DB: string
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
    GITHUB_ID: string
    GITHUB_SECRET: string
  }
}
