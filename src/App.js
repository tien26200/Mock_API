// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Footer from "./component/Footer.js";
import Navigate from "./component/Navigate.js";
import ListProduct from "./component/ListProduct";

function App() {
  return (
    <>
      <Navigate />
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
