import { useEffect, Suspense } from 'react';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { routeConfig } from './config/routeConfig';
import { AppRouter } from 'shared/components';
import { useTheme } from 'features/ThemeSwitcher';
import { useAppDispatch } from '../shared/hooks';
import { userActions } from '../entities/User';

const App = () => {
  const dispatch = useAppDispatch();
  useTheme();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
