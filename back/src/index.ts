import { app } from './infrastructure/app'

const port = 8080

app.listen(port, () => {
  console.log(`Server listening on port ${port} (${process.env.NODE_ENV ?? 'unknown environment'})`)
})
