import { MongoClient } from 'mongodb'

export async function mongo() {
  const uri = process.env.MONGO_CONNECTION_URL

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  await client.connect()
  return client.db('web-clipboard')
}
