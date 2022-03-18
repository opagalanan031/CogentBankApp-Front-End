export class BeneficiaryData {
  accountNumber: number;
  accountType: string;
  id: number = 0;

  constructor() {
    (this.accountType = ''), (this.accountNumber = 0);
  }
}
