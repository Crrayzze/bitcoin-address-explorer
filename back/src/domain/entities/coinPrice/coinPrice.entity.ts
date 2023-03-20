import { BaseEntity } from 'domain/entities/base.entity'

export default interface CoinPriceEntity extends BaseEntity {
  eur: number
  usd: number
}