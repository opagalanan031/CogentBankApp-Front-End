import { BeneficiaryStatus } from '../enums/beneficiary-status';

export interface BeneficiaryResponse {
  beneficiaryId: number;
  accountNumber: number;
  username: string;
  active: BeneficiaryStatus;
}
