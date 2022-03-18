export class Transfer {
  toAccount: number;
  fromAccount: number;
  amount: number;
  reason: string;
  by: string;

  constructor(
    toAccount: number,
    fromAccount: number,
    amount: number,
    reason: string,
    by: string
  ) {
    (this.toAccount = toAccount),
      (this.fromAccount = fromAccount),
      (this.amount = amount),
      (this.reason = reason),
      (this.by = by);
  }
}
