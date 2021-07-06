import fs from 'fs'

export const jwtKey = fs.readFileSync(process.env.JWT_KEY_FILE!, {
  encoding: 'utf8'
})

export const federationKey = fs.readFileSync(process.env.FEDERATION_KEY_FILE!, {
  encoding: 'utf8'
})
