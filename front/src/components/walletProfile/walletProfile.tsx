import React from 'react';
import { BitcoinLogo } from '../../ressources/bitcoin'
import './walletProfile.css'
import { WalletProfileProps } from '../interfaces/walletProfile.props';
import PriceUtils from '../../utils/price.utils';

export const WalletProfile: React.FC<WalletProfileProps> = ({ address, coins }) => {

  const priceUtils: PriceUtils = new PriceUtils();

  return (
    <div className='wallet-profile-container'>
      <div className='wallet-profile-logo'>
        <BitcoinLogo />
      </div>
      <div className='wallet-profile-right'>
        <h1 className='wallet-profile-address'>{address.address}</h1>
        <h2 className='wallet-profile-balance-label'>Actual balance</h2>
        <div className='wallet-profile-balance'>
          <p className='wallet-profile-balance-crypto'>{priceUtils.SatoshiToBTC(address.final_balance)} BTC</p>
          <p className='wallet-profile-balance-fiat'>${priceUtils.SatoshiToTicker(address.final_balance, coins.bitcoin.usd)}</p>
        </div>
      </div>
    </div>
  )
}