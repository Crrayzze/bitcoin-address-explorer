import { BasePresenter } from "domain/base.presenter";
import { BlockCypherTransactionPresenter } from "adapters/api/address/presenters/blockCypher/blockCypherTransaction.presenter";

export interface BlockCypherAddressPresenter extends BasePresenter {
  address: string
  total_received: number
  total_sent: number
  balance: number
  unconfirmed_balance: number
  final_balance: number
  n_tx: number
  unconfirmed_n_tx: number
  final_n_tx: number
  txrefs: BlockCypherTransactionPresenter[]
  tx_url: string
}