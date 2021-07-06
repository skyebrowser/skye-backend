import { FastifyReply, FastifyRequest } from 'fastify'
import { LoginInterface } from '../schemas/login'
import jsonwebtoken from 'jsonwebtoken'
import { federationKey, jwtKey } from '../util/constants'
import client from '../util/client'

export default async (
  req: FastifyRequest<{ Body: LoginInterface }>,
  res: FastifyReply
) => {
  let temp: { sub: string }
  try {
    temp = jsonwebtoken.verify(req.body.token, federationKey, {
      algorithms: ['RS256']
    }) as { sub: string }
  } catch {
    return res.status(403).send()
  }

  await client.user.upsert({
    where: {
      id: temp.sub
    },
    create: {
      id: temp.sub
    },
    update: {}
  })

  const token = jsonwebtoken.sign({}, jwtKey, {
    subject: temp.sub,
    audience: 'skye.innatical.com'
  })
  res.send({ token })
}
