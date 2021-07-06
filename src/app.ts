import Fastify from 'fastify'
import { z } from 'zod'

const app = Fastify()

app.setValidatorCompiler<z.AnyZodObject>(({ schema }) => {
  return (data) => {
    const output = schema.safeParse(data)
    if (output.success) {
      return { value: output.data }
    } else {
      return { error: output.error }
    }
  }
})

export default app
