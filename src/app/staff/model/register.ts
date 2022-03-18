export class Register {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;

  constructor() {
    (this.fullName = ''),
      (this.username = ''),
      (this.password = ''),
      (this.confirmPassword = '');
  }
}
