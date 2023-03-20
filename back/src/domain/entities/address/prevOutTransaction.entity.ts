import { BaseEntity } from 'domain/entities/base.entity'

export default interface PrevOutTransactionEntity extends BaseEntity {
  hash: string
  value: string
  tx_index: string
  n: string
}
