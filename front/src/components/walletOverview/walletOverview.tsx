import React from 'react';
import { WalletProfileProps } from '../interfaces/walletProfile.props';
import './walletOverview.css'
import PriceUtils from '../../utils/price.utils';

export const WalletOverview: React.FC<WalletProfileProps> = ({ address, coins }) => {

  const priceUtils: PriceUtils = new PriceUtils();

  return (
    <div className='wallet-overview-container'>
      <div>
        <div className='wallet-overview-label'>Total Received</div>
        <p className='wallet-overview-amount'>{priceUtils.SatoshiToBTC(address.total_received)} BTC</p>
        <p className='wallet-overview-fiat'>${priceUtils.SatoshiToTicker(address.total_received, coins.bitcoin.usd)}</p>
      </div>
      <div>
        <div className='wallet-overview-label'>Total Sent</div>
        <p className='wallet-overview-amount'>{priceUtils.SatoshiToBTC(address.total_sent)} BTC</p>
        <p className='wallet-overview-fiat'>${priceUtils.SatoshiToTicker(address.total_sent, coins.bitcoin.usd)}</p>
      </div>
      <div>
        <div className='wallet-overview-label'>Total Volume</div>
        <p className='wallet-overview-amount'>{priceUtils.SatoshiToBTC(address.total_received + address.total_sent)} BTC</p>
        <p className='wallet-overview-fiat'>${priceUtils.SatoshiToTicker(address.total_received + address.total_sent, coins.bitcoin.usd)}</p>
      </div>
      <div>
        <div className='wallet-overview-label'>Transactions</div>
        <p className='wallet-overview-amount'>x{address.n_tx}</p>
      </div>
    </div>
  )
}