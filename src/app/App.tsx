import { Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { routeConfig } from './config/routeConfig';
import { AppRouter } from 'shared/components';
import { useTheme } from 'features/ThemeSwitcher';

const App = () => {
  useTheme();

  return (
    <div className={'app'}>
      <Suspense>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter config={routeConfig} />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
