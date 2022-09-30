import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import About from "./Component/Pages/AboutUs/About";
import Home from "./Component/Pages/Home/Home";
import Cart from "./Component/Pages/Cart/Cart";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
