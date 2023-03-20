import InputTransactionEntity from 'domain/entities/address/inputTransaction.entity'
import OutTransactionEntity from 'domain/entities/address/outTransaction.entity'
import { BaseEntity } from 'domain/entities/base.entity'

export default interface TransactionEntity extends BaseEntity {
  hash: string
  ver: number
  vin_sz: number
  vout_sz: number
  lock_time: string
  size: number
  relayed_by: string
  block_height: number
  tx_index: string
  inputs: InputTransactionEntity[]
  out: OutTransactionEntity[]
}
