import BaseRoute from 'adapters/api/base.route'
import { Router, Request, Response } from 'express'
import PingController from '../controllers/ping.controller'

class PingRoute extends BaseRoute {
  set (): Router {
    const controller: PingController = new PingController()

    this.router.get('/', async (_: Request, res: Response) => {
      try {
        await controller.ping(_, res)
      } catch (error) {
        return this.handleError(error, res, () => {})
      }
    })
    return this.router
  }
}

export default PingRoute
