import { BaseEntity } from '../base.entity'

export default interface TransactionEntity extends BaseEntity {
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
