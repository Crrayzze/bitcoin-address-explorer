import BaseAPI from 'adapters/spi/thirdPartyAPIs/base.api'
import SingleAddressEntity from 'domain/entities/address/singleAddress.entity'

export default class BlockchainInfoAPI extends BaseAPI {
  constructor () {
    super('https://blockchain.info/')
  }

  async getSingleAddress (address: string, offset: string): Promise<SingleAddressEntity> {

    let url: string = `rawaddr/${address}`
    if (offset) {
      url += `?offset=${offset}&limit=50`
    }
    else {
      url += '?limit=50'
    }
    return await this.get(url)
  }
}