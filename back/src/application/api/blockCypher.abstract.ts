import BlockCypherAddressEntity from "domain/entities/blockCypherAddress/blockCypherAddress.entity";

export interface AbstractBlockCypherApi {
  getSingleAddress (address: string): Promise<BlockCypherAddressEntity>
}