import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import State from "./component/state";
import NavBar from "./component/navBar";
import Home from "./component/home/home";
import Shop from "./component/shop";
import About from "./component/about";
import Todo from "./pages/todo/Todo";
import ProductDetails from "./component/shop/productDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/state" element={<State />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
