import 'app/styles/index.scss';
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'features/ThemeSwitcher';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'shared/components';
import { createRoot } from 'react-dom/client';
import { StoreProvider } from './app/providers';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
);
