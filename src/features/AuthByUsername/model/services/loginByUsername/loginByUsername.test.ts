import { loginByUsername } from './loginByUsername';
import { User, userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib';

describe('loginByUsername.test', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;
  //
  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });
  //
  // test('success login', async () => {
  //   const userValue: User = { username: 'admin', id: '1' };
  //
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
  //
  //   const action = loginByUsername({ username: 'admin', password: '123' });
  //   const result = await action(dispatch, getState, undefined);
  //
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toBe(userValue);
  // });
  //
  // test('failed login', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //
  //   const action = loginByUsername({ username: 'admin', password: '123' });
  //   const result = await action(dispatch, getState, undefined);
  //
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  // });

  test('success login', async () => {
    const userValue: User = { username: 'admin', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(userValue);
  });

  test('failed login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
