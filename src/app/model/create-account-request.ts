import { AccountType } from '../enums/account-type';

export class CreateAccountRequest {
  accountType: AccountType | null = AccountType.ACCOUNT_CURRENT;
  accountBalance: number | null = null;
  //approved: boolean = false;
}
