import { DeepPartial } from 'shared/types';
import { StateSchema } from 'app/providers';
import { getLoginLoading } from './getLoginLoading';
describe('getLoginLoading.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };

    expect(getLoginLoading(state as StateSchema)).toEqual(true);
  });

  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginLoading(state as StateSchema)).toEqual(false);
  });
});
