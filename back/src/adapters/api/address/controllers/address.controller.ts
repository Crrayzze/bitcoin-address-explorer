import { Request, Response } from 'express';
import GetAddressPayload from 'adapters/api/address/payloads/getAddress.payload'
import { ErrorHandling } from "adapters/errorHandling/errorHandling"
import { GetAddressUseCase } from 'application/useCases/getAddress.useCase'
import BlockCypherAPI from 'adapters/spi/thirdPartyAPIs/blockcypher/api/blockCypher.api';
import BlockCypherAddressEntity from 'domain/entities/blockCypherAddress/blockCypherAddress.entity';
import { BlockCypherAddressApiMapper } from 'adapters/api/address/mappers/blockCypher/blockCypherAddress.mapper';
import { BlockCypherAddressPresenter } from '../presenters/blockCypher/blockCypherAddress.presenter';

export default class AddressController {
  constructor() {}

  async getAddress(req: Request<GetAddressPayload, any, any, GetAddressPayload>, res: Response): Promise<void> {
    try {
      const blockCypherApi: BlockCypherAPI = new BlockCypherAPI()

      const getAddressUseCase: GetAddressUseCase = new GetAddressUseCase(blockCypherApi, req.params.address)
      const addressEntity: BlockCypherAddressEntity = await getAddressUseCase.execute()

      const blockCypherApiMapper: BlockCypherAddressApiMapper = new BlockCypherAddressApiMapper()
      const addressPresenter: BlockCypherAddressPresenter = blockCypherApiMapper.toPresenter(addressEntity)

      res.send(addressPresenter);
    } catch (error) {
      throw ErrorHandling.createApplicationError(
        error,
        'Error: an unknown error occurred while trying get the address'
      );
    }
  }
}