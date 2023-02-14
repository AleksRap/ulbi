import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config';
import { AboutPage, MainPage, Page404 } from 'pages';

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  {
    path: RoutePath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },

  // Последний
  {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <Page404 />,
  },
];
