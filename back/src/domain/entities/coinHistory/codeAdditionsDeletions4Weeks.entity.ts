import { BaseEntity } from 'domain/entities/base.entity'

export default interface CodeAdditionsDeletions4WeeksEntity extends BaseEntity {
  additions: number
  deletions: number
}