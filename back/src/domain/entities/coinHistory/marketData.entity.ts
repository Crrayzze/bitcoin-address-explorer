import { BaseEntity } from 'domain/entities/base.entity'
import CurrentPriceEntity from 'domain/entities/coinHistory/currentPrice.entity'
import MarketCapEntity from 'domain/entities/coinHistory/marketCap.entity'
import TotalVolumeEntity from 'domain/entities/coinHistory/totalVolume.entity'

export default interface MarketDataEntity extends BaseEntity {
  current_price: CurrentPriceEntity
  market_cap: MarketCapEntity
  total_volume: TotalVolumeEntity
}