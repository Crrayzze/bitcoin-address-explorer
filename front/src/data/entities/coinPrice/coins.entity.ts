import { BaseEntity } from '../base.entity'
import CoinPriceEntity from './coinPrice.entity'

export default interface CoinsEntity extends BaseEntity {
  bitcoin: CoinPriceEntity
  ethereum: CoinPriceEntity
}