import React from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/ProductList";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProductList />
      <Contact/>
    </div>
  );
}

export default App;
