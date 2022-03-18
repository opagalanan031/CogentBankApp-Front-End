export class UpdateCustomer {
  fullName: string;
  phone: string;
  pan: string;
  aadhar: string;
  secretQuestion: string;
  secretAnswer: string;
  panImage: File;
  aadharImage: File;

  constructor(
    fullName: string,
    phone: string,
    pan: string,
    aadhar: string,
    secretQuestion: string,
    secretAnswer: string,
    panImage: File,
    aadharImage: File
  ) {
    this.fullName = fullName;
    this.phone = phone;
    this.pan = pan;
    this.aadhar = aadhar;
    this.secretQuestion = secretQuestion;
    this.secretAnswer = secretAnswer;
    this.panImage = panImage;
    this.aadharImage = aadharImage;
  }
}
