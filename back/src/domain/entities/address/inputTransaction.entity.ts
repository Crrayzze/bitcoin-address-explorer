import PrevOutTransactionEntity from 'domain/entities/address/prevOutTransaction.entity'
import { BaseEntity } from 'domain/entities/base.entity'

export default interface InputTransactionEntity extends BaseEntity {
  prev_out: PrevOutTransactionEntity
  script: string
}