import { StateSchema } from 'app/providers';
import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import axios, { Axios } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios');

const mockedAxios = jest.mocked<Axios>(axios, { shallow: true });

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: Dispatch;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;
  api: jest.MockedObject<Axios>;
  navigate: (to: To, options?: NavigateOptions) => void;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });

    return result;
  }
}
