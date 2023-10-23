import React from 'react'
import ReactDOM from "react-dom/client"
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/home/Body'
import Contact from './components/contact/Contact'
import RestoInfo from './components/RestoInfo'
import Offers from './components/offers/Offers'
import ErrorPage from './components/ErrorPage'



const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Body/>
      },
      {
        path:"contact",
        element: <Contact/>
      },
      {
        path:"offers",
        element: <Offers/>
      },
      {
        path: "restronent/:id",
        element: <RestoInfo/>
      }
    ],
    errorElement: <ErrorPage/>
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={appRouter}/>)


