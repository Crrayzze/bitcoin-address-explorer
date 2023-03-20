import { UseCaseInterface } from 'application/useCases/useCase.interface'
import { AbstractBlockCypherApi } from 'application/api/blockCypher.abstract'
import BlockCypherAddressEntity from 'domain/entities/blockCypherAddress/blockCypherAddress.entity'
import BlockCypherTransactionEntity from 'domain/entities/blockCypherAddress/blockCypherTransaction.entity'
export class GetAddressUseCase implements UseCaseInterface {

  private address: string
  private blockCypherApi: AbstractBlockCypherApi

  constructor(blockCypherApi: AbstractBlockCypherApi, address: string) {
    this.address = address
    this.blockCypherApi = blockCypherApi
  }

  removeDuplicates(arr: BlockCypherTransactionEntity[]): BlockCypherTransactionEntity[] {
    const seen = new Set();
    return arr.filter((item) => {
      const value = item["tx_hash"];
      if (seen.has(value)) {
        return false;
      }
      seen.add(value);
      return true;
    });
  }

  async execute(): Promise<BlockCypherAddressEntity | null> {
    const blockCypherAddressEntity: BlockCypherAddressEntity = await this.blockCypherApi.getSingleAddress(this.address)
    if (blockCypherAddressEntity) {
      blockCypherAddressEntity.txrefs = this.removeDuplicates(blockCypherAddressEntity.txrefs)
    }
    return blockCypherAddressEntity || null
  }

}