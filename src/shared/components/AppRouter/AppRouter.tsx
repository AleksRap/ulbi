import React, {FC, Suspense} from 'react';
import {Route, RouteProps, Routes} from "react-router-dom";

interface IProps {
  config: RouteProps[];
}

export const AppRouter: FC<IProps> = ({ config }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {config.map((routeProps) => (
          <Route
            {...routeProps}
            key={routeProps.path}
            element={(
              <div className="page-wrapper">
                {routeProps.element}
              </div>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
