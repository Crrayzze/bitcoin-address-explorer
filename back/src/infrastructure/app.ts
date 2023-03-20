import express, { Application } from 'express'
import cors from 'cors'
import { router } from './router'

const app: Application = express()

// Enable CORS for *
app.use(cors())

app.use(router)

export { app }
