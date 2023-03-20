import AddressEntity from '../../data/entities/address/address.entity'
import CoinsEntity from '../../data/entities/coinPrice/coins.entity'

export interface WalletProfileProps {
  address: AddressEntity 
  coins: CoinsEntity
}