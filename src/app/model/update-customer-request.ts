import { CustomerResponse } from '../interfaces/customer-response';

export class UpdateCustomerRequest {
  fullName: string | null = null;
  phone: string | null = null;
  pan: string | null = null;
  aadhar: string | null = null;
  secretQuestion: string | null = null;
  secretAnswer: string | null = null;

  updateFromResponse(response: CustomerResponse) {
    this.fullName = response.fullName;

    this.phone = response.phone;
    this.pan = response.pan;
    this.aadhar = response.aadhar;
    this.secretQuestion = response.secretQuestion;
    this.secretAnswer = response.secretAnswer;
  }
}
