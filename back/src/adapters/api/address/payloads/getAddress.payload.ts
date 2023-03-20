import { BasePayloadEntity } from 'domain/base.payload.entity'

export default interface GetAddressPayload extends BasePayloadEntity {
  page?: string
  address: string
}