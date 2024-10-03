import { Suspense, lazy } from 'react';
import { TRouteStatic, TRouteDymanic } from './type.routes.constants';
import PageNotFound from 'pages/404';

const PageMain = lazy(() => import('pages/main'));
const PageFavorite = lazy(() => import('pages/favorite'));
const PageAuthorization = lazy(() => import('pages/authorization'));
const PageDetails = lazy(() => import('pages/details'));

export const STATIC_ROUTES: TRouteStatic[] = [
  {
    path: '/',
    name: 'Главная',
    isNeedInMainMenu: true,
    element: (
      <Suspense fallback={null /*<LoadingPage />*/}>
        <PageMain />
      </Suspense>
    ),
    img: (
      <img
        src={require('assets/images/logo.png')}
        alt="logo"
        className="w-full h-full"
      />
    ),
  },
  {
    path: '/favorite',
    name: 'Избранное',
    isNeedInMainMenu: true,
    element: (
      <Suspense fallback={null /*<LoadingPage />*/}>
        <PageFavorite />
      </Suspense>
    ),
    img: (
      <img
        src={require('assets/images/favorite.png')}
        alt="favorite"
        className="w-full h-full"
      />
    ),
  },
  {
    path: '/login',
    name: 'Войти',
    isNeedInMainMenu: false,
    element: (
      <Suspense fallback={null /*<LoadingPage />*/}>
        <PageAuthorization />
      </Suspense>
    ),
    img: null,
  },
  {
    path: '/signup',
    name: 'Авторизация',
    isNeedInMainMenu: false,
    element: (
      <Suspense fallback={null /*<LoadingPage />*/}>
        <PageAuthorization />
      </Suspense>
    ),
    img: null,
  },
  {
    path: '*',
    name: 'NotFound',
    isNeedInMainMenu: false,
    element: <PageNotFound />,
  },
];

export const DYNAMIC_ROUTES: TRouteDymanic[] = [
  {
    path: '/:id',
    element: (
      <Suspense fallback={null /*<LoadingPage />*/}>
        <PageDetails />
      </Suspense>
    ),
  },
];
