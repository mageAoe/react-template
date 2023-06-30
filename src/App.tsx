import React, { Suspense } from 'react';
import { RouterProvider, HashRouter } from 'react-router-dom';
import Loading from '@/pages/loading';
import Router from './router';
import './App.css';
import { ConfigProvider } from 'antd';

function App() {
  //   const arr = [1, 2, 3, 4];
  //   const a_b = 1;
  //   arr.forEach(item => {
  //     console.log(item, a_b);
  //   });

  //   arr.map(item => {
  //     console.log(item);
  //   });

  //   const foo = () => 0;
  //   console.log(1 == '1');

  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={Router}></RouterProvider>
    </Suspense>
    // <HashRouter>
    //   <ConfigProvider
    //     theme={{
    //       token: {
    //         colorPrimary: '#00b96b'
    //       }
    //     }}>
    //     <Router />
    //   </ConfigProvider>
    // </HashRouter>
  );
}

export default App;
