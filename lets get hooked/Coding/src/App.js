import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardContainer from "./components/CardContainer";
import Search from "./components/Search";
import Slide from "./components/Slide";

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Slide />
      <Search />
      <CardContainer />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
