import { BaseEntity } from '../base.entity'
import CurrentPriceEntity from './currentPrice.entity'
import MarketCapEntity from './marketCap.entity'
import TotalVolumeEntity from './totalVolume.entity'

export default interface MarketDataEntity extends BaseEntity {
  current_price: CurrentPriceEntity
  market_cap: MarketCapEntity
  total_volume: TotalVolumeEntity
}