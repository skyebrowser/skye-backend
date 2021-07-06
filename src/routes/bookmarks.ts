import { FastifyReply, FastifyRequest } from 'fastify'
import { BookmarksInterface } from '../schemas/bookmarks'
import client from '../util/client'

export const get = async (req: FastifyRequest, res: FastifyReply) => {
  return res.send(req.user!.bookmarks ?? [])
}

export const put = async (
  req: FastifyRequest<{ Body: BookmarksInterface }>,
  res: FastifyReply
) => {
  await client.user.update({
    where: {
      id: req.user!.id
    },
    data: {
      bookmarks: req.body
    }
  })

  return res.send()
}
