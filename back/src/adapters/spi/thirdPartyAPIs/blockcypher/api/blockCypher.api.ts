import BaseAPI from "adapters/spi/thirdPartyAPIs/base.api";
import BlockCypherAddressEntity from "domain/entities/blockCypherAddress/blockCypherAddress.entity";

export default class BlockCypherAPI extends BaseAPI {
  constructor () {
    super("https://api.blockcypher.com/v1/btc/main/");
  }

  async getSingleAddress (address: string): Promise<BlockCypherAddressEntity> {
    return await this.get(`addrs/${address}`);
  }
}