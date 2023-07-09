import { RouteProps } from 'react-router-dom';
import { RoutePath } from 'shared/config';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Page404 } from 'pages/Page404';

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.MAIN,
    element: <MainPage />,
  },
  {
    path: RoutePath.ABOUT,
    element: <AboutPage />,
  },

  // Последний
  {
    path: RoutePath.NOT_FOUND,
    element: <Page404 />,
  },
];
