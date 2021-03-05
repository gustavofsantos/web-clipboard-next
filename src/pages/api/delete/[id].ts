import { ObjectID } from 'mongodb'
import { mongo } from 'mongo-client'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handleDelete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userId = req.headers['x-userid']
  const itemId = req.query.id

  if (!userId) return res.status(401)
  if (!itemId) return res.status(403)
  
  const db = await mongo()
  const result = await db.collection('items').deleteOne({ _id: ObjectID(itemId), userId: userId })

  return res.status(200).json({})
}
