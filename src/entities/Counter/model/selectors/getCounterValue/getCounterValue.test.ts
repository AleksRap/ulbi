import { getCounterValue } from './getCounterValue';
import { DeepPartial } from 'shared/types';
import type { StateSchema } from 'app/providers';

describe('getCounterValue.test', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };

    expect(getCounterValue(state as StateSchema)).toBe(10);
  });
});
