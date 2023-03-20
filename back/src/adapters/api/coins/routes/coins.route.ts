import BaseRoute from 'adapters/api/base.route'
import { Router, Request, Response } from 'express'
import CoinsController from 'adapters/api/coins/controllers/coins.controller'


class CoinsRoute extends BaseRoute {
  set (): Router {
    const controller: CoinsController = new CoinsController()

    this.router.get('/price', async (_: Request, res: Response) => {
      try {
        await controller.getCoinsPrice(_, res)
      } catch (error) {
        return this.handleError(error, res, () => {})
      }
    })
    return this.router
  }
}

export default CoinsRoute
