import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

export const componentRender = (component: ReactNode) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};
