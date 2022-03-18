export class NewAccount {
  accountType: string;
  accountBalance: number;
  approvedStatus: string;

  constructor() {
    (this.accountType = ''), (this.accountBalance = 0);
    this.approvedStatus = 'no';
  }
}

/*
export class NewAccount {
  accountType: string;
  amount: number;

  constructor(accountType: string, amount: number) {
    (this.accountType = accountType), (this.amount = amount);
  }
}
*/
