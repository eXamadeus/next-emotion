import { createServer } from 'http'
import { parse } from 'url'

import next from 'next'

const port = parseInt(process.env.PORT || '3000', 10)
const app = next({})
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url || '', true)

    handle(req, res, parsedUrl)
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
