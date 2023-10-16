import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
  test('test set username', () => {
    const username = 'admin';
    const state: DeepPartial<LoginSchema> = { username };

    expect(loginReducer(state as LoginSchema, loginActions.setUsername(username))).toEqual({
      username,
    });
  });

  test('test set password', () => {
    const password = '123';
    const state: DeepPartial<LoginSchema> = { password };

    expect(loginReducer(state as LoginSchema, loginActions.setPassword(password))).toEqual({
      password,
    });
  });
});
