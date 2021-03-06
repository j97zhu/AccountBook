import * as models from './models';

/**
 * @property `userInfo` 用户相关信息
 * @property `accountInfo` 账号相关信息
 * @property `walletInfo` 钱包相关信息
 */
export interface HomeMetaVo {
  userInfo: models.UserInfoVo | null;
  accountInfo: models.AccountInfoVo | null;
}
