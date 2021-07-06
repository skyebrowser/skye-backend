import app from './app'

app.get('/', (_, res) => {
  res.send({
    pkg: '@innatical/template-service',
    ver: 3.0
  })
})

app.listen(3000, '0.0.0.0')
