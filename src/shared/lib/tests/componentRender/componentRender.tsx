import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers';
import { DeepPartial } from '@reduxjs/toolkit';

export interface ComponentRenderOptions {
  initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (
  component: ReactNode,
  { initialState }: ComponentRenderOptions = {},
) => {
  return render(
    <StoreProvider initialState={initialState}>
      <BrowserRouter>{component}</BrowserRouter>
    </StoreProvider>,
  );
};
