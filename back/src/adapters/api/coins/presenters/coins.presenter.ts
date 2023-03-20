import { BasePresenter } from 'domain/base.presenter'
import { CoinPricePresenter } from './coinPrice.presenter'

export interface CoinsPresenter extends BasePresenter {
  bitcoin: CoinPricePresenter
  ethereum: CoinPricePresenter
}