import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';
import { ReducerList } from 'shared/lib';

interface StoreProviderProps {
  initialState?: StateSchema;
  asyncReducers?: ReducerList;
}

export const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = ({
  initialState,
  asyncReducers,
  children,
}) => {
  const navigate = useNavigate();

  const store = createReduxStore(initialState, asyncReducers, navigate);

  return <Provider store={store}>{children}</Provider>;
};
