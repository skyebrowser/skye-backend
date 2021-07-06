import { PrismaClient } from '@prisma/client'
import fs from 'fs'

process.env.DATABASE_URL = fs.readFileSync(process.env.DATABASE_URL_FILE!, {
  encoding: 'utf8'
})
const prisma = new PrismaClient()

export default prisma
