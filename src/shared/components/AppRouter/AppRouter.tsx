import { FC, Suspense } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { PageLoader } from 'shared/components';

interface IProps {
  config: RouteProps[];
}

export const AppRouter: FC<IProps> = ({ config }) => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {config.map((routeProps) => (
          <Route
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...routeProps}
            key={routeProps.path}
            element={<div className='page-wrapper'>{routeProps.element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
