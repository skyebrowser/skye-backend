import { FastifyReply, FastifyRequest } from 'fastify'
import client from './client'
import { InnaticalID } from '@innatical/innatical-id-sdk'

const id = new InnaticalID('ea27b1df-ff32-4252-996f-65ceda9f0953')

export default async (request: FastifyRequest, reply: FastifyReply) => {
  if (!request.headers.authorization) return reply.status(403).send()
  if (!id.validateToken(request.headers.authorization))
    return reply.status(403).send()

  const info = await id.getUserInfo(request.headers.authorization)

  if (!info.ok) return reply.status(403).send()

  const user = await client.user.upsert({
    where: {
      id: info.user.id
    },
    create: {
      id: info.user.id
    },
    update: {}
  })

  request.user = user
}
