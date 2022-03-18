export class Accounts {
  accountType: string;
  accountBalance: number;
  enableStatus: string;

  constructor(
    accountType: string,
    accountBalance: number,
    enableStatus: string
  ) {
    (this.accountType = accountType),
      (this.accountBalance = accountBalance),
      (this.enableStatus = enableStatus);
  }
}
