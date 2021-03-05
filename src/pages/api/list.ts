import { mongo } from 'mongo-client'
import { NextApiRequest, NextApiResponse } from 'next'
import { ClipboardItem } from 'types/clipboard'

export default async function handleList(
  req: NextApiRequest,
  res: NextApiResponse<ClipboardItem[]>
) {
  const userId = req.headers['x-userid']
  if (!userId) return res.status(401)
  
  const db = await mongo()
  const items = await db.collection('items').find({ userId: userId }).toArray()

  return res.status(200).json(items.reverse())
}
