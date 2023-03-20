import { BaseEntity } from "../base.entity";

export default interface PingEntity extends BaseEntity {
  message: string;
}