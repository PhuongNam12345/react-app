import { Redirect, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {Route, Link, NavLink} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import React from 'react';
import { Login } from './pages/Login/login';
import Register from './pages/Register/register';
import Addcustomer from './pages/Addcustomer/addcustomer';
import Showcustomer from './pages/Showcustomer/showcustomer';

import './App.css';

function App() {
    const UnauthorizedPage = () => {
        const role = localStorage.getItem('role');
        console.log(role);
        return <div>You are unauthorized to access this page. {role}</div>;
    };
    const Logout = () => {
        return <Navigate to="/login" replace={true} />;
    };

    const ProtectedComponent = ({ allowedRoles, children }) => {
        // Kiểm tra quyền truy cập của người dùng
        const role = localStorage.getItem('role');
        console.log(role);
        if (!role || !allowedRoles.includes(role)) {
            return <Navigate to="/unauthorized" replace={true} />;
        }
        return <div>{children}</div>;
    };

    return (
        <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
                path="/addcustomer"
                element={
                    <ProtectedComponent allowedRoles={['admin']}>
                        <Addcustomer />
                    </ProtectedComponent>
                }
            />
            <Route path="/showcustomer" element={<Showcustomer />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            <Route path="/logout" element={<Logout />} />
        </Routes>
    );
}
export default App;
