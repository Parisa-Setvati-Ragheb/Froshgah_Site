import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import About from "./Component/Pages/AboutUs/About";
import Home from "./Component/Pages/Home/Home";
import Cart from "./Component/Pages/Cart/Cart";
import  CartProvider  from "./Component/Provider/Provider";
import { ToastContainer } from 'react-toastify';
import Check from "./Component/Pages/checkOut/Check";
import LogIn from "./Component/Pages/login/LogIn";
import SignUp from "./Component/Pages/singup/SingUp";

import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from "./Component/Provider/AuthProvider";
import Profile from "./Component/Pages/profile/Profile";
function App() {
  return (
    <AuthProvider>
       <CartProvider>
<Layout>
  <ToastContainer/>
      <Routes>
            


        <Route path="/about" element={<About />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Check/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      </Layout>
    </CartProvider>

    </AuthProvider>
    
   
  );
}

export default App;
