import SingleAddressEntity from "domain/entities/address/singleAddress.entity";

export interface AbstractBlockchainInfoApi {
  getSingleAddress (address: string, offset: string): Promise<SingleAddressEntity>
}