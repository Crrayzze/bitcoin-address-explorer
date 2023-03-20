import { BasePresenter } from "domain/base.presenter";

export interface BlockCypherTransactionPresenter extends BasePresenter {
  tx_hash: string
  block_height: number
  tx_input_n: number
  tx_output_n: number
  value: number
  ref_balance: number
  confirmations: number
  confirmed: string
  double_spend: boolean
  spent?: boolean
  spent_by?: string
}