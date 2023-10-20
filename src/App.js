import './App.css';
import React from 'react';
import {  Route, Routes, RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import Signup from './Signup'
import Page from './Page';
 import ScrollToTop from './ScrollToTop';
import Login from './Login';

const router = createBrowserRouter(createRoutesFromElements(
  
  <Route path='/'  element={<ScrollToTop/>} >
  
      <Route path='/' element={<Page/>} />
      <Route path='Signup' element={<Signup/>} />
       <Route path='Login' element={<Login/>} />
   
      </Route>
    
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
