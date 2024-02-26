import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers';
import { getLoginUsername } from './getLoginUsername';
describe('getLoginUsername.test', () => {
  test('should return true', () => {
    const username = 'ts_pipe_7';

    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username,
      },
    };

    expect(getLoginUsername(state as StateSchema)).toBe(username);
  });

  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toBe('');
  });
});
