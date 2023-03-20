import { ApiMapperInterface } from "application/mappers/api.mapper";
import { BasePayloadEntity } from "domain/base.payload.entity";
import BlockCypherAddressEntity from "domain/entities/blockCypherAddress/blockCypherAddress.entity";
import { BlockCypherAddressPresenter } from "adapters/api/address/presenters/blockCypher/blockCypherAddress.presenter";
import { BlockCypherTransactionApiMapper } from "adapters/api/address/mappers/blockCypher/blockCypherTransaction.mapper";

export class BlockCypherAddressApiMapper implements ApiMapperInterface<BlockCypherAddressEntity, BlockCypherAddressPresenter, BasePayloadEntity> {
  toEntity(payload: BasePayloadEntity): BlockCypherAddressEntity {
    throw new Error('Method not implemented.');
  }

  toPresenter(entity: BlockCypherAddressEntity): BlockCypherAddressPresenter {
    const presenter: BlockCypherAddressPresenter = {
      address: entity.address,
      total_received: entity.total_received,
      total_sent: entity.total_sent,
      balance: entity.balance,
      unconfirmed_balance: entity.unconfirmed_balance,
      final_balance: entity.final_balance,
      final_n_tx: entity.final_n_tx,
      n_tx: entity.n_tx,
      tx_url: entity.tx_url,
      unconfirmed_n_tx: entity.unconfirmed_n_tx,
      txrefs: [],
    }

    const transactionBlockCypherApiMapper: BlockCypherTransactionApiMapper = new BlockCypherTransactionApiMapper();
    for (const transaction of entity.txrefs) {
      presenter.txrefs.push(transactionBlockCypherApiMapper.toPresenter(transaction));
    }

    return presenter;
  }

}
