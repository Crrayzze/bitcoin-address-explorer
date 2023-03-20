import TransactionEntity from 'domain/entities/address/transaction.entity'
import { BaseEntity } from 'domain/entities/base.entity'

export default interface SingleAddressEntity extends BaseEntity {
  hash160: string
  address: string
  n_tx: number
  n_unredeemed: number
  total_received: number
  total_sent: number
  final_balance: number
  txs: TransactionEntity[]
}