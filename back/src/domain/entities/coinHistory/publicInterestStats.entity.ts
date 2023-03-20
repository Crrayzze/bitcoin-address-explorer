import { BaseEntity } from 'domain/entities/base.entity'

export default interface PublicInterestStatsEntity extends BaseEntity {
  alexa_rank: any
  bing_matches: any
}