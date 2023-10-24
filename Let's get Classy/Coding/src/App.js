import ReactDOM from "react-dom/client"
import Home from "./components/Home"
import ClassHome from "./components/ClassHome"
import Error from "./components/Error"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

// const App = ()=>{

//     return(
//         <div className="app">
//         </div>
//     )
// }
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement:<Error/>
    },
    {
        path: "classhome",
        element: <ClassHome/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)