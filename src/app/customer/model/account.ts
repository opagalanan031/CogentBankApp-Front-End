export class Account {
  accountType: string;
  accountBalance: number;
  enableStatus: string = '';
  accountNumber: number = 0;

  constructor(accountType: string, accountBalance: number) {
    (this.accountType = accountType), (this.accountBalance = accountBalance);
  }
}
