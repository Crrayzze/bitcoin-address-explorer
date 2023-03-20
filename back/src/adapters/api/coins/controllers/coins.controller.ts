import { Request, Response } from 'express';
import { ErrorHandling } from "adapters/errorHandling/errorHandling"
import { GetCoinsPriceUseCase } from 'application/useCases/getCoinsPrice.useCase'
import CoinGeckoAPI from 'adapters/spi/thirdPartyAPIs/coingecko/api/coinGecko.api';
import CoinsEntity from 'domain/entities/coinPrice/coins.entity';
import { CoinsApiMapper } from '../mappers/coins.mapper';
import { CoinsPresenter } from '../presenters/coins.presenter';

export default class CoinsController {
  constructor () {}

  async getCoinsPrice (req: Request, res: Response): Promise<void> {
    try {
      const coinGeckoApi: CoinGeckoAPI = new CoinGeckoAPI()
      const getCoinsPriceUseCase: GetCoinsPriceUseCase = new GetCoinsPriceUseCase("bitcoin,ethereum", "eur,usd", coinGeckoApi)
      const coinsEntity: CoinsEntity = await getCoinsPriceUseCase.execute()

      const coinsApiMapper: CoinsApiMapper = new CoinsApiMapper()
      const coinsPresenter: CoinsPresenter = coinsApiMapper.toPresenter(coinsEntity)

      res.send(coinsPresenter)
    } catch (error) {
      throw ErrorHandling.createApplicationError(
        error,
        'Error: an unknown error occurred while trying get the coins price'
      );
    }
  }
}