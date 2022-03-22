import { AccountType } from '../enums/account-type';

export class CreateAccountRequest {
  accountType: AccountType | null = AccountType.CURRENT;
  accountBalance: number | null = null;
  //approved: boolean = false;
}
