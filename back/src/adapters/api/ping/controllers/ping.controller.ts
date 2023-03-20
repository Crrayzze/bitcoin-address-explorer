import { PingPresenter } from "adapters/api/ping/presenters/ping.presenter"
import { Request, Response } from "express"
import { ErrorHandling } from "adapters/errorHandling/errorHandling"

export default class PingController {
  constructor () {}

  async ping (req: Request, res: Response): Promise<void> {
    try {
      const presenter: PingPresenter = { message: 'pong' }
      res.send(presenter)
    } catch (error) {
      throw ErrorHandling.createApplicationError(error, "Error: an unknown error occurred while trying to ping")
    }
  }
}