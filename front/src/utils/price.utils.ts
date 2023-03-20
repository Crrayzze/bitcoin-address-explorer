export default class PriceUtils {

  SatoshiToBTC(satoshi: number): number {
    return satoshi / 100_000_000
  }

  SatoshiToTicker(satoshi: number, tickerBtc: number): number {
    const btc = satoshi / 100_000_000;
    const price = btc * tickerBtc;
    return Math.round(price * 100) / 100
  }
}