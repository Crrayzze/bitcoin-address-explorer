import { BaseEntity } from '../base.entity'
import CodeAdditionsDeletions4WeeksEntity from './codeAdditionsDeletions4Weeks.entity'

export default interface DeveloperDataEntity extends BaseEntity {
  forks: number
  stars: number
  subscribers: number
  total_issues: number
  closed_issues: number
  pull_requests_merged: number
  pull_request_contributors: number
  code_additions_deletions_4_weeks: CodeAdditionsDeletions4WeeksEntity
  commit_count_4_weeks: number
}