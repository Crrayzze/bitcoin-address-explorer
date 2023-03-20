import { BasePresenter } from 'domain/base.presenter';

export interface PingPresenter extends BasePresenter {
  message: string
}