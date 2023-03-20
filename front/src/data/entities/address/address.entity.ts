import TransactionEntity from './transaction.entity'
import { BaseEntity } from '../base.entity'

export default interface AddressEntity extends BaseEntity {
  address: string
  total_received: number
  total_sent: number
  balance: number
  unconfirmed_balance: number
  final_balance: number
  n_tx: number
  unconfirmed_n_tx: number
  final_n_tx: number
  txrefs: TransactionEntity[]
  tx_url: string
}
