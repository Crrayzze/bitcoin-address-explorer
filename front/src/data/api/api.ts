import BaseAPI from "./base.api";
import PingEntity from "../entities/ping/ping.entity";
import AddressEntity from "../entities/address/address.entity";
import CoinsEntity from "../entities/coinPrice/coins.entity";

export default class API extends BaseAPI {
  constructor() {
    super("http://localhost:8080/")
  }

  async getPing (): Promise<PingEntity> {
    return await this.get(`ping/`)
  }

  async getAddress (address: string): Promise<AddressEntity> {
    try { 
      const response: AddressEntity = await this.get(`address/${address}`)
      return response
    } catch (error) {
      console.log('error', error)
      console.log('address', address)
      throw error
    }
  }

  async getCoinsPrice (): Promise<CoinsEntity> {
    return await this.get(`coins/price`)
  }
}