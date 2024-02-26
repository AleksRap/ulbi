import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers';
import { getLoginError } from './getLoginError';
describe('getLoginError.test', () => {
  test('should return error', () => {
    const errorMsg = 'error';

    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: errorMsg,
      },
    };

    expect(getLoginError(state as StateSchema)).toEqual(errorMsg);
  });

  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
