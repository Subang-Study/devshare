/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-underscore-dangle */
import { MongoClient, MongoClientOptions } from 'mongodb'

if (!process.env.MONGO_DB) {
  throw new Error('Please add your Mongo URI to .env')
}

const url: string = process.env.MONGO_DB

const options = { useNewUrlParser: true } as MongoClientOptions

let connectDB: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  let globalWithConnect = global as typeof globalThis & {
    _mongo: Promise<MongoClient>
  }
  if (!globalWithConnect._mongo) {
    globalWithConnect._mongo = new MongoClient(url, options).connect()
  }
  connectDB = globalWithConnect._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }
