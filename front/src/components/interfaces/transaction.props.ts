import TransactionEntity from '../../data/entities/address/transaction.entity'
import CoinsEntity from '../../data/entities/coinPrice/coins.entity'

export interface TransactionProps {
  transaction: TransactionEntity
  coins: CoinsEntity
}