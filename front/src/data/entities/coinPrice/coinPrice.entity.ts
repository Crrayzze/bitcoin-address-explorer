import { BaseEntity } from '../base.entity'

export default interface CoinPriceEntity extends BaseEntity {
  eur: number
  usd: number
}