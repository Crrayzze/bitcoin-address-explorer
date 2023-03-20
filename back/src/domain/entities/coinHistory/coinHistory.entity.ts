import { BaseEntity } from 'domain/entities/base.entity';
import LocalizationEntity from 'domain/entities/coinHistory/localization.entity';
import ImageEntity from 'domain/entities/coinHistory/image.entity';
import MarketDataEntity from 'domain/entities/coinHistory/marketData.entity';
import CommunityDataEntity from 'domain/entities/coinHistory/communityData.entity';
import DeveloperDataEntity from 'domain/entities/coinHistory/developerData.entity';
import PublicInterestStatsEntity from 'domain/entities/coinHistory/publicInterestStats.entity';

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