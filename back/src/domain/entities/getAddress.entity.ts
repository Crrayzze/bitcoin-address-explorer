import { BaseEntity } from 'domain/entities/base.entity'

export class GetAddressEntity extends BaseEntity {
  address: string
  page?: string
}