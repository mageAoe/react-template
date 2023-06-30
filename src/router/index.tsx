import React, { lazy, Suspense } from 'react';
import {
  createHashRouter,
  Navigate,
  useRoutes,
  RouterProvider
} from 'react-router-dom';
import HomeC from '../pages/home';
import Detail from '../pages/detail';
import Loading from '@/pages/loading';

// 引入方法一
// const Home = lazy(() => import('../pages/home'));

// 引入方法二
// const Home = lazy(async () => {
//   const res = await new Promise<any>((resolve) => {
//     setTimeout(() => {
//       resolve(HomeC)
//     }, 2000)
//   })
//   return {default: res}
// })

// 引入方法三
const Home = lazy(
  async () =>
    new Promise<any>(resolve => {
      setTimeout(() => {
        resolve({
          default: HomeC
        });
      }, 2000);
    })
);

// const Detail = lazy(() => import('../pages/detail'));
const Record = lazy(() => import('../pages/record'));

// createHashRouter([
//   {
//     path: '/',
//     element: <Navigate replace to='/home' />
//   },
//   {
//     path: '/home',
//     element: <HomeC />
//   },
//   {
//     path: '/detail',
//     element: <Detail />
//   },
//   {
//     path: '/record',
//     element: <Record />
//   }
// ]);

// const Router = () => {
//   const routes = useRoutes(rootRouter);
//   return routes;
// };

export default createHashRouter([
  {
    path: '/',
    element: <Navigate replace to='/home' />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/record',
    element: <Record />
  }
]);
