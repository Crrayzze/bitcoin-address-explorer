import { Router, Response, NextFunction } from 'express'

export default abstract class BaseRoute {
  router: Router

  constructor () {
    this.router = Router()
  }

  set (): Router {
    throw new Error('Method not implemented.')
  }

  handleError (error: Error, res: Response, next: NextFunction): void {
    // TODO - Implement more Error handling
    res.status(500).send(error.message)
    return next()
  }
}
