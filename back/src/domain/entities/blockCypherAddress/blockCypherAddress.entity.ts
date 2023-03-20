import { BaseEntity } from "domain/entities/base.entity";
import BlockCypherTransactionEntity from "domain/entities/blockCypherAddress/blockCypherTransaction.entity";

export default interface BlockCypherAddressEntity extends BaseEntity {
  address: string
  total_received: number
  total_sent: number
  balance: number
  unconfirmed_balance: number
  final_balance: number
  n_tx: number
  unconfirmed_n_tx: number
  final_n_tx: number
  txrefs: BlockCypherTransactionEntity[]
  tx_url: string
}