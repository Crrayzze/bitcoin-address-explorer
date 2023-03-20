import React, { useEffect } from 'react';
import { TransactionProps } from '../interfaces/transaction.props';
import './transaction.css';
import { ReceivedTxLogo } from '../../ressources/received_tx_logo';
import { SentTxLogo } from '../../ressources/sent_tx_logo';
import { IoCopy } from 'react-icons/io5';
import PriceUtils from '../../utils/price.utils';

export const Transaction: React.FC<TransactionProps> = ({ transaction, coins }) => {

  const [txValue, setTxValue] = React.useState<string>("0");
  const [isInOutputs, setIsInOutputs] = React.useState<boolean>(false);
  const [shortHash, setShortHash] = React.useState<string>("");
  const [time, setTime] = React.useState<string>("");

  const priceUtils: PriceUtils = new PriceUtils();

  const convertTime = (timeString: string): void => {
    const date = new Date(timeString);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    setTime(`${day}/${month}/${year} - ${hours}:${minutes}`);
  }

  const findSpentInTransaction = (): void => {
    const received: boolean | undefined = transaction.spent ? transaction.spent : undefined;
    if (received) {
      setIsInOutputs(true);
    } else {
      setIsInOutputs(false);
    }
    setTxValue(transaction.value.toString());
  }


  const getShortHash = (): void => {
    const hash: string = transaction.tx_hash;
    setShortHash(hash.slice(0, 4) + '...' + hash.slice(hash.length - 4, hash.length));
  }

  useEffect(() => {
    findSpentInTransaction();
    getShortHash()
    convertTime(transaction.confirmed);

  }, []);

  const copyHash = () => {
    navigator.clipboard.writeText(transaction.tx_hash);
  }

  return (
    <div className='transaction-container'>
      <div className='transaction-logo'>
        {
          isInOutputs ? <ReceivedTxLogo /> : <SentTxLogo />
        }
      </div>
      <div className='transaction-data'>
        <div className='transaction-left'>
          <div className='transaction-hash'>
            <p className='transaction-hash-label'>Hash:</p>
            <p className='transaction-hash-short'>{shortHash}</p>
            <IoCopy className='transaction-hash-copy' onClick={copyHash}/>
          </div>
          <p className='transaction-time'>{time}</p>
        </div>
        {
          isInOutputs ? (
            <div className='transaction-right'>
              <p className='transaction-received'>+{priceUtils.SatoshiToBTC(Number(txValue))} BTC</p>
              <p className='transaction-fiat'>+${priceUtils.SatoshiToTicker(Number(txValue), coins.bitcoin.usd)}</p>
            </div>
          ) : (
            <div className='transaction-right'>
              <p className='transaction-sent'>-{priceUtils.SatoshiToBTC(Number(txValue))} BTC</p>
              <p className='transaction-fiat'>-${priceUtils.SatoshiToTicker(Number(txValue), coins.bitcoin.usd)}</p>
            </div>
          )
        }
      </div>
    </div>
  );
};