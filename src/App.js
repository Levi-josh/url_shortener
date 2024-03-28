import React from 'react';
import { Route, Routes, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Signup from './Signup'
import Page from './Page';
import ScrollToTop from './ScrollToTop';
import Login from './Login';
import DashBoardHome from './DashBoardHome';
import Apitest from './Apitest';
import DashBoard from './DashBoard';
import Analytics from './Analytics';

const router = createBrowserRouter(createRoutesFromElements(
  <>


    <Route path='/' element={<ScrollToTop />} >

      <Route index element={<Page />} />
      <Route path='Signup' element={<Signup />} />
      <Route path='Login' element={<Login />} />
      <Route path='test' element={<Apitest />} />



      <Route path='DashBoardHome' element={<DashBoardHome />} >
        <Route path='DashBoard' element={<DashBoard />} />
        <Route path='Analytics' element={<Analytics />} />
      </Route>

    </Route>



  </>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
