import { Suspense, lazy } from 'react';
import PageMain from 'pages/main';
import PageFavorite from 'pages/favorite';
import { TRouteStatic, TRouteDymanic } from './type.routes.constants';
// import LoadingPage from 'components/loadingPage';

// const PageAuthorization = lazy(() => import('pages/authorization'));
// const PageAlbums = lazy(() => import('pages/albums'));
// const PageAlbum = lazy(() => import('pages/album'));
// const PagePosts = lazy(() => import('pages/posts'));

export const STATIC_ROUTES: TRouteStatic[] = [
  {
    path: '/',
    name: 'Главная',
    isNeedAuthentication: false,
    element: <PageMain />,
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
    isNeedAuthentication: true,
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
  // {
  //   path: '/movies',
  //   name: 'Фильмы',
  //   element: (
  //     <Suspense fallback={<LoadingPage />}>
  //       <PageMovies />
  //     </Suspense>
  //   ),
  // },
];

export const DYNAMIC_ROUTES: TRouteDymanic[] = [
  // {
  //   path: 'movies/:id',
  //   element: (
  //     <Suspense fallback={<LoadingPage />}>
  //       <PageDetail />
  //     </Suspense>
  //   ),
  // },
];
