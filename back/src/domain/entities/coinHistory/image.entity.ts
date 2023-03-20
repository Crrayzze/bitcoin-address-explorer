import { BaseEntity } from 'domain/entities/base.entity'

export default interface ImageEntity extends BaseEntity {
  thumb: string
  small: string
}