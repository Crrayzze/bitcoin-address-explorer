import { BaseEntity } from 'domain/entities/base.entity'
import TransactionEntity from 'domain/entities/address/transaction.entity'

export class AddressEntity implements BaseEntity {
  id?: string
  hash160: string
  address: string
  n_tx: number
  n_unredeemed: number
  total_received: number
  total_sent: number
  final_balance: number
  txs: TransactionEntity[]

}