export class Beneficiary {
  username: string;
  accountNumber: number;
  activeStatus: string;

  constructor(username: string, accountNumber: number, activeStatus: string) {
    (this.username = username),
      (this.accountNumber = accountNumber),
      (this.activeStatus = activeStatus);
  }
}
