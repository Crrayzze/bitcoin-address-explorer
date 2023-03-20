import { Router } from 'express'

import PingRoute from 'adapters/api/ping/routes/ping.route'
import AddressRoute from 'adapters/api/address/routes/address.route'
import CoinsRoute from 'adapters/api/coins/routes/coins.route'

export const router: Router = Router()

router.use('/ping', new PingRoute().set())
router.use('/address', new AddressRoute().set())
router.use('/coins', new CoinsRoute().set())
