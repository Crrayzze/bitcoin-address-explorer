import { BaseEntity } from '../base.entity';
import LocalizationEntity from './localization.entity';
import ImageEntity from './image.entity';
import MarketDataEntity from './marketData.entity';
import CommunityDataEntity from './communityData.entity';
import DeveloperDataEntity from './developerData.entity';
import PublicInterestStatsEntity from './publicInterestStats.entity';

export default interface CoinHistoryEntity extends BaseEntity {
  id: string
  symbol: string
  name: string
  localization: LocalizationEntity
  image: ImageEntity
  market_data: MarketDataEntity
  community_data: CommunityDataEntity
  developer_data: DeveloperDataEntity
  public_interest_stats: PublicInterestStatsEntity
}