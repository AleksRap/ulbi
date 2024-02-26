import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers';
import { getLoginPassword } from './getLoginPassword';
describe('getLoginPassword.test', () => {
  test('should return true', () => {
    const password = 'qwerty123';

    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password,
      },
    };

    expect(getLoginPassword(state as StateSchema)).toBe(password);
  });

  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toBe('');
  });
});
