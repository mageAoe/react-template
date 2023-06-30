import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import Loading from '@/pages/loading';
import router from './router';
import './App.css';

const abababababaaaaads = 3;
const aahhsdjasdfsdfgdfgsdfgsd = 4;
const dsjkfsdfskdgsdgd = 6;
// const pp =
//   Number(
//     abababababaaaaads + aahhsdjasdfsdfgdfgsdfgsd + dsjkfsdfskdgsdgd
//   ).toFixed(2) + 'asdadasd';

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
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
}

export default App;
