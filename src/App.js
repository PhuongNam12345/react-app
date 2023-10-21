import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {Route, Link, NavLink} from 'react-router-dom';
import React from "react";
import  {Login}  from "./pages/Login/login";
import Register from "./pages/Register/register";
import Addcustomer from "./pages/Addcustomer/addcustomer";
import Showcustomer from "./pages/Showcustomer/showcustomer";
import "./App.css";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addcustomer" element={<Addcustomer />} />
        <Route path="/showcustomer" element={<Showcustomer />} />
      </Routes>
  );
}
export default App;
