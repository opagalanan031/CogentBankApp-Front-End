import { AccountStatus } from '../enums/account-status';
import { AccountType } from '../enums/account-type';

export interface AllAccountsResponse {
  accountNumber: number;
  accountType: String;
  accountBalance: number;
  enableStatus: String;
}
