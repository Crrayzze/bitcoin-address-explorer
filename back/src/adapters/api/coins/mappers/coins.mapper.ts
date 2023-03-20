import { ApiMapperInterface } from "application/mappers/api.mapper";
import { BasePayloadEntity } from "domain/base.payload.entity";
import CoinsEntity from "domain/entities/coinPrice/coins.entity";
import { CoinsPresenter } from "adapters/api/coins/presenters/coins.presenter";

export class CoinsApiMapper implements ApiMapperInterface<CoinsEntity, CoinsPresenter, BasePayloadEntity> {
  
  toEntity(payload: BasePayloadEntity): CoinsEntity {
    throw new Error("Method not implemented.");
  }

  toPresenter(entity: CoinsEntity): CoinsPresenter {
    const presenter: CoinsPresenter = {
      bitcoin: {
        usd: entity.bitcoin.usd,
        eur: entity.bitcoin.eur
      },
      ethereum: {
        usd: entity.ethereum.usd,
        eur: entity.ethereum.eur
      },
    };
    return presenter;
  }

}