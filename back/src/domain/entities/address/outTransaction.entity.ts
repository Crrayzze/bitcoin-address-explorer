import { BaseEntity } from 'domain/entities/base.entity'

export default interface OutTransactionEntity extends BaseEntity {
  value: string
  hash: string
  script: string
}