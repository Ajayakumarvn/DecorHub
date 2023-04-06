import React, { Fragment } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Fragment>
  );
};

export default App;
