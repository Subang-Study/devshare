declare namespace NodeJS {
  interface ProcessEnv {
    MONGO_DB: string
    NEXT_AUTH_SECRET: string
    GITHUB_ID: string
    GITHUB_SECRET: string
  }
}
