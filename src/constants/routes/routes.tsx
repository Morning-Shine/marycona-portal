import { Suspense, lazy } from 'react';
import { TRouteStatic, TRouteDymanic } from './type.routes.constants';
import PageNotFound from 'pages/404';
import Loader from 'components/loader';
import PageMain from 'pages/main';

const PageFavorite = lazy(() => import('pages/favorite'));
const PageAuthorization = lazy(() => import('pages/authorization'));
const PageDetails = lazy(() => import('pages/details'));

const SuspenseLoader = () => (
  <div className="mt-5 h-[400px] w-[772] flex justify-center">
    <Loader />
  </div>
);

export const STATIC_ROUTES: TRouteStatic[] = [
  {
    path: '/',
    name: 'Главная',
    isNeedInMainMenu: true,
    element: (
      <PageMain />
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
      <Suspense fallback={<SuspenseLoader />}>
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
      <Suspense fallback={<SuspenseLoader />}>
        <PageAuthorization />
      </Suspense>
    ),
  },
  {
    path: '/signup',
    name: 'Авторизация',
    isNeedInMainMenu: false,
    element: (
      <Suspense fallback={<SuspenseLoader />}>
        <PageAuthorization />
      </Suspense>
    ),
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
      <Suspense fallback={<SuspenseLoader />}>
        <PageDetails />
      </Suspense>
    ),
  },
];
