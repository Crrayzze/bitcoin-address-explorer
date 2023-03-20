import { BaseEntity } from 'domain/entities/base.entity'
import { BasePayloadEntity } from 'domain/base.payload.entity'
import { BasePresenter } from 'domain/base.presenter'

export interface ApiMapperInterface<T extends BaseEntity | Error, P extends BasePresenter, R extends BasePayloadEntity> {
  toEntity: (payload: R) => T
  toPresenter: (entity: T) => P
}
