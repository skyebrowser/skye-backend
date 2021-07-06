import app from './app'
import { BookmarksInterface, bookmarksSchema } from './schemas/bookmarks'
import { LoginInterface, loginSchema } from "./schemas/login"
import { get, put } from './routes/bookmarks'
import login from './routes/login'
import auth from './util/auth'

app.get('/', (_, res) => {
  res.send({
    pkg: '@innatical/skye-backend',
    ver: 1.0
  })
})

app.post<{ Body: LoginInterface }>('/login', { schema: { body: loginSchema }, preValidation: auth }, login)

app.get('/bookmarks', { preValidation: auth }, get)
app.put<{ Body: BookmarksInterface }>('/bookmarks', { schema: { body: bookmarksSchema }, preValidation: auth }, put)

app.listen(3000, '0.0.0.0')
