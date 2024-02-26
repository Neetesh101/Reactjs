import React from 'react'
import  ReactDOM  from 'react-dom'
import Header from "./src/component/Header"
import Body from './src/component/Body';
import About from './src/component/About';
import Contact from './src/component/Contact';
import Cart from './src/component/Cart';
import Error from './src/component/Error';
import Body from './src/component/Body';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import ResturantMenu from './src/component/ResturantMenu';

const AppLayout = ()=>{
  return (
    <div className='app'>
<Header />
<Outlet/>
    </div>
  )
}

const appRouter =createBrowserRouter([
 {
  path :"/",
  element :<AppLayout/>,
  children :[
    {
      path :'/',
      element :<Body/>
    },
    {
      path :'/about',
      element :<About/>
     },
     {
      path :'/contact',
      element :<Contact/>
     },
     {
      path :'/cart',
      element :<Cart/>
     },
     {
      path:'/resturant/:resId',
      element :<ResturantMenu/>
     }
  ],
  errorElement:<Error/>
 },
 
])
const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter}/>)