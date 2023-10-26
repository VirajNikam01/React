import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './components/home/Home'
import Footer from './Footer'
import Header from './Header'
import RestronentInfo from './components/home/RestronentInfo'

const App = ()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path :'/restronent/:resId',
                element :<RestronentInfo/>
            }
        ]
    }
])





const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)