import type { StateSchema } from 'app/providers';

export const getCounter = (state: StateSchema) => state.counter;
