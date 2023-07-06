import React, { lazy } from 'react'
import { Outlet, createHashRouter, Navigate, useRoutes, RouterProvider } from 'react-router-dom'
import HomeC from '../pages/home'
import Detail from '../pages/detail'
import Record from '../pages/record'
import Test from '@/pages/test'
import Loading from '@/pages/loading'

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
const AsyncDetail = lazy(
  async () =>
    new Promise<any>(resolve => {
      setTimeout(() => {
        resolve({
          default: Detail
        })
      }, 500)
    })
)

// const Detail = lazy(() => import('../pages/detail'));
// const Record = lazy(() => import('../pages/record'));

// 异步组件的包装器组件，用于动态加载异步组件
function AsyncWrapper() {
  return (
    <React.Suspense fallback={<Loading />}>
      <AsyncDetail />
    </React.Suspense>
  )
}

const rootRouter = [
  {
    path: '/',
    element: <Navigate replace to='/home' />
  },
  {
    path: '/home',
    element: <HomeC />
  },
  {
    path: '/AsyncDetail',
    element: <AsyncWrapper />
  },
  // {
  //   path: '/detail',
  //   element: <Detail />
  // },
  {
    path: '/record',
    element: <Record />
  },
  {
    path: '/test',
    element: <Test />
  }
]

const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}

export default Router

// export default createHashRouter([
//   {
//     path: '/',
//     element: <Navigate replace to='/home' />
//   },
//   {
//     path: '/home',
//     element: <Home />
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
