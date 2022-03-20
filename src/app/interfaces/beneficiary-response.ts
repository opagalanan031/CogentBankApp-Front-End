import { BeneficiaryStatus } from '../enums/beneficiary-status';

export interface BeneficiaryResponse {
  beneficiaryId: number;
  beneficiaryAccountNumber: number;
  beneficiaryName: string;
  activeStatus: BeneficiaryStatus;
}
