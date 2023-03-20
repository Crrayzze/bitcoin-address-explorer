import CoinHistoryEntity from 'domain/entities/coinHistory/coinHistory.entity'
import CoinsEntity from 'domain/entities/coinPrice/coins.entity'

export interface AbstractCoinGeckoApi {
  getCoinsHistory (id: string, date: string): Promise<CoinHistoryEntity>
  getCoinsPrice (ids: string, currencies: string): Promise<CoinsEntity>
}