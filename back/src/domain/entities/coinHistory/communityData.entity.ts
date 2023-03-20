import { BaseEntity } from 'domain/entities/base.entity'

export default interface CommunityDataEntity extends BaseEntity {
  facebook_likes: any
  twitter_followers: number
  reddit_average_posts_48h: number
  reddit_average_comments_48h: number
  reddit_subscribers: number
  reddit_accounts_active_48h: string
}