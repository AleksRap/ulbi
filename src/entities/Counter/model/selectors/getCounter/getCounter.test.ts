import { getCounter } from './getCounter';
import type { StateSchema } from 'app/providers';
import { DeepPartial } from 'shared/types';

describe('getCounter.test', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };

    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
