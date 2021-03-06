import app from './app'
import { BookmarksInterface, bookmarksSchema } from './schemas/bookmarks'
import { get, put } from './routes/bookmarks'
import auth from './util/auth'
import cors from 'fastify-cors'

app.register(cors, {
  origin: '*'
})

app.get('/', (_, res) => {
  res.send({
    pkg: '@innatical/skye-backend',
    ver: 1.0
  })
})

app.get('/bookmarks', { preValidation: auth }, get)
app.put<{ Body: BookmarksInterface }>(
  '/bookmarks',
  { schema: { body: bookmarksSchema }, preValidation: auth },
  put
)

app.listen(3000, '0.0.0.0')
