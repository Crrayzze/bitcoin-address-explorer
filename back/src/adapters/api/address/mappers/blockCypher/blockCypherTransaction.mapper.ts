import { ApiMapperInterface } from "application/mappers/api.mapper";
import BlockCypherTransactionEntity from "domain/entities/blockCypherAddress/blockCypherTransaction.entity";
import { BlockCypherTransactionPresenter } from "adapters/api/address/presenters/blockCypher/blockCypherTransaction.presenter";
import { BasePayloadEntity } from "domain/base.payload.entity";

export class BlockCypherTransactionApiMapper implements ApiMapperInterface<BlockCypherTransactionEntity, BlockCypherTransactionPresenter, BasePayloadEntity> {

  toEntity (payload: BasePayloadEntity): BlockCypherTransactionEntity {
    throw new Error('Method not implemented.');
  }

  toPresenter (entity: BlockCypherTransactionEntity): BlockCypherTransactionPresenter {
    const presenter: BlockCypherTransactionPresenter = {
      block_height: entity.block_height,
      confirmations: entity.confirmations,
      confirmed: entity.confirmed,
      double_spend: entity.double_spend,
      ref_balance: entity.ref_balance,
      tx_hash: entity.tx_hash,
      tx_input_n: entity.tx_input_n,
      tx_output_n: entity.tx_output_n,
      value: entity.value,
      spent_by: entity.spent_by,
      spent: entity.spent,
    }
    return presenter;
  }

}