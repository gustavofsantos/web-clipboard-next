import { mongo } from 'mongo-client'
import { NextApiHandler, NextApiResponse } from 'next'
import { ClipboardItem } from 'types/clipboard'

export default async function handleCreate(
  req: NextApiHandler<any>,
  res: NextApiResponse<ClipboardItem>
) {
  const payload = {
    // @ts-ignore
    value: req.body.value,
    // @ts-ignore
    userId: req.headers['x-userid'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }

  const db = await mongo()
  const { insertedId }  = await db.collection('items').insertOne(payload)
  const document = await db.collection('items').findOne({ _id: insertedId })

  return res
    .status(201)
    .json(document)
}
