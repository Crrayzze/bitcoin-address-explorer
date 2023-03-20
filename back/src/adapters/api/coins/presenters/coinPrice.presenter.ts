import { BasePresenter } from "domain/base.presenter";

export interface CoinPricePresenter extends BasePresenter {
  eur: number;
  usd: number;
}