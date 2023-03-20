import { BaseEntity } from 'domain/entities/base.entity'
import CoinPriceEntity from 'domain/entities/coinPrice/coinPrice.entity'

export default interface CoinsEntity extends BaseEntity {
  bitcoin: CoinPriceEntity
  ethereum: CoinPriceEntity
}