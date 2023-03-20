import BaseRoute from 'adapters/api/base.route'
import { Router, Request, Response } from 'express'
import AddressController from 'adapters/api/address/controllers/address.controller'
import GetAddressPayload from 'adapters/api/address/payloads/getAddress.payload'

class AddressRoute extends BaseRoute {
  set (): Router {
    const controller: AddressController = new AddressController()

    this.router.get('/:address', async (_: Request<GetAddressPayload, any, any, GetAddressPayload>, res: Response) => {
      try {
        await controller.getAddress(_, res)
      } catch (error) {
        return this.handleError(error, res, () => {})
      }
    })
    return this.router
  }
}

export default AddressRoute