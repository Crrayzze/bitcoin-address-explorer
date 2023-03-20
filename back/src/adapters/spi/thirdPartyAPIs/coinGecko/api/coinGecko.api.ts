import BaseApi from 'adapters/spi/thirdPartyAPIs/base.api'
import CoinHistoryEntity from 'domain/entities/coinHistory/coinHistory.entity'
import CoinsEntity from 'domain/entities/coinPrice/coins.entity'

export default class CoinGeckoAPI extends BaseApi {
  constructor () {
    super("https://api.coingecko.com/api/v3/")
  }

  async getCoinsHistory (id: string, date: string): Promise <CoinHistoryEntity> {
    return await this.get(`coins/${id}/history?date=${date}`)
  }

  async getCoinsPrice (ids: string, currencies: string): Promise <CoinsEntity> {
    return await this.get(`simple/price?ids=${ids}&vs_currencies=${currencies}`)
  }

}