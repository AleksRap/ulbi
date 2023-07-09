import { Suspense } from 'react';
import cn from 'classnames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { routeConfig } from './config/routeConfig';
import { useTheme } from 'features/ThemeSwitcher';
import { AppRouter } from 'shared/components';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
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
