import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardContainer from "./components/CardContainer";
import Slide from "./components/Slide";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Slide />
      <CardContainer />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>
  },
  {
    path:"/about",
    element: <About/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<RouterProvider router={appRouter}/>
);
