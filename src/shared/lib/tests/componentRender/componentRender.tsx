import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers';
import { ThemeProvider } from 'features/ThemeSwitcher';
import { DeepPartial } from '../../../types';

export interface ComponentRenderOptions {
  initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (
  component: ReactNode,
  { initialState }: ComponentRenderOptions = {},
) => {
  return render(
    <ThemeProvider>
      <StoreProvider initialState={initialState as StateSchema}>
        <BrowserRouter>{component}</BrowserRouter>
      </StoreProvider>
    </ThemeProvider>,
  );
};
