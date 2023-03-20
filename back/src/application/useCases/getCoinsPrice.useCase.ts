import { UseCaseInterface } from 'application/useCases/useCase.interface'
import { AbstractCoinGeckoApi } from 'application/api/coinGecko.abstract'
import CoinsEntity from 'domain/entities/coinPrice/coins.entity'

export class GetCoinsPriceUseCase implements UseCaseInterface {

  private coinGeckoApi: AbstractCoinGeckoApi
  private ids: string
  private currencies: string

  constructor (ids: string, currencies: string, coinGeckoApi: AbstractCoinGeckoApi) {
    this.ids = ids
    this.currencies = currencies
    this.coinGeckoApi = coinGeckoApi
  }

  async execute(): Promise<CoinsEntity> {
    const coinsEntity: CoinsEntity = await this.coinGeckoApi.getCoinsPrice(this.ids, this.currencies)
    return coinsEntity || null
  }
}