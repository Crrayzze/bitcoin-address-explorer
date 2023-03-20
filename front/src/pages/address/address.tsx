import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddressEntity from '../../data/entities/address/address.entity';
import CoinsEntity from '../../data/entities/coinPrice/coins.entity';
import { WalletProfile } from '../../components/walletProfile/walletProfile';
import { Divider } from '../../components/divider/divider';
import { WalletOverview } from '../../components/walletOverview/walletOverview';
import { WalletTransactions } from '../../components/walletTransactions/walletTransactions';
import { NotFound } from '../../components/notFound/notFound';
import API from '../../data/api/api';
import './address.css'
import { Loader } from '../../components/loader/loader';

export const Address: React.FC = () => {

  const { address } = useParams<{ address: string}>();
  const [addressData, setAddressData] = useState<AddressEntity | null>(null);
  const [error, setError] = useState<boolean>(false);
  // eslint-disable-next-line
  const [page, setPage] = useState<string>();
  const [coinsData, setCoinsData] = useState<CoinsEntity | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const api: API = new API()
    const fetchAddress = async () => {
      if (address) {
        try {
          console.log(address)
          const addressData: AddressEntity = await api.getAddress(address);
          setAddressData(addressData)
          setLoading(false)
        } catch (error) {
          setError(true)
          console.log(error)
        }
      }
    }

    const fetchCoins = async () => {
      const coinsData: CoinsEntity = await api.getCoinsPrice();
      setCoinsData(coinsData)
    }

    fetchAddress();
    fetchCoins();
  }, [])

  if (error) {
    return (
      <div>
        <NotFound address={address} />
      </div>
    )
  }

  if (loading) {
    return (
      <div className='loader-container'>
        <Loader />
      </div>
    )
  }

  return (
    <div>
      {
        addressData ? (
          <div> 
            <WalletProfile address={addressData} coins={coinsData as CoinsEntity} />
            <Divider />
            <WalletOverview address={addressData} coins={coinsData as CoinsEntity} />
            <Divider />
            <WalletTransactions address={addressData} coins={coinsData as CoinsEntity} />
          </div>
        ) : (
          <div></div>
        )
      }

    </div>
  )
}