import { FastifyReply, FastifyRequest } from 'fastify'
import jsonwebtoken from 'jsonwebtoken'
import client from './client'
import { jwtKey } from './constants'

export default async (request: FastifyRequest, reply: FastifyReply) => {
  if (!request.headers.authorization) return reply.status(403).send()
  try {
    const token = jsonwebtoken.verify(
      request.headers.authorization,
      jwtKey
    ) as { sub: string }
    const user = await client.user.findUnique({
      where: {
        id: token.sub
      }
    })

    if (!user) return reply.status(403).send()

    request.user = user
  } catch {
    return reply.status(403).send()
  }
}
