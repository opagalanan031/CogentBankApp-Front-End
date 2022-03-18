import { RegisterRequest } from './register-request';

describe('CreateUserRequest', () => {
  it('should create an instance', () => {
    expect(new RegisterRequest()).toBeTruthy();
  });
});
