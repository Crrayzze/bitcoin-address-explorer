import { BaseEntity } from '../base.entity'

export default interface ImageEntity extends BaseEntity {
  thumb: string
  small: string
}