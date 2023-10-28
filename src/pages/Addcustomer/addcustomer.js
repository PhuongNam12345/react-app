import './addcustomer.css';
import { Link, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';

export const Addcustomer = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');
    const [address, setAddress] = useState('');
    //   const [password, setPassword] = useState("");
    const [status, setStatus] = useState(0);
    const [show, setShow] = useState(false);
    const token = localStorage.getItem('token');
    const handleAdd = async () => {
        const response = await fetch('http://localhost:5000/addcustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
            body: JSON.stringify({ fullname, email, phone, address, role }),
        });
        if (response.status === 200) {
            console.log(response);
            setStatus(200);
            setShow(true);
        } else {
            console.log('Thêm không thành công.');
            setStatus(response.status);
            setShow(true);
        }
        // if (response.status === 200) {
        //   console.log("Đăng ký thành công!NHA");
        // } else {
        //   console.log("Đăng ký không thành công.");
        // }
    };
    return (
        <div className="app">
            {/* <div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="671" height="618" viewBox="0 0 671 618" fill="none">
            <path opacity="0.05"
                d="M-83.9121 567.869C-27.9433 528.185 -6.7814 475.86 -20.4263 410.896C-40.8936 313.449 -18.503 251.242 43.1875 246.178C104.878 241.115 163.096 311.765 178.681 396.334C194.266 480.903 280.957 483.243 315.34 466.488C349.724 449.733 369.462 415.948 368.073 379.129C365.001 297.7 253.327 232.819 255.94 157.746C258.553 82.6743 350.376 55.1036 407.979 122.715C410.817 126.046 413.708 129.181 416.644 132.126C475.674 191.34 553.026 173.844 588.396 129.923C649.731 53.7617 621.761 -27.6337 523.35 -82.8623C375.196 -169.904 296.342 -265.311 286.789 -369.083"
                stroke="url(#paint0_linear_2_82)" stroke-width="100" stroke-linecap="round" />
            <defs>
                <linearGradient id="paint0_linear_2_82" x1="-83.9121" y1="567.869" x2="604.432" y2="-364.791"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4E7577" />
                    <stop offset="1" stop-color="#65D5FC" />
                    <stop offset="1" stop-color="#23445B" />
                </linearGradient>
            </defs>
        </svg>
    </div> */}
            <div className="header">
                {/* <div className="text_title">
            <p>Kreativ</p>
        </div>
        <div className="menu">
            <ul>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">Contact</a></li>
            </ul>
        </div> */}
                <p>Kreativ</p>
                <ul className="menu">
                    <li>
                        <a href="default.asp">Home</a>
                    </li>
                    <li>
                        <a href="news.asp">Contact</a>
                    </li>
                    <li>
                        <Link to="/login">Logout</Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                <div className="content_left">
                    {/* <div className="text_title">
                <p>Kreativ</p>
            </div> */}
                    <div className="form">
                        <div className="text_content">
                            <p>Let's Add Customer</p>
                        </div>

                        <div className="form-group">
                            <label>Full name</label>
                            <input
                                type="text"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                placeholder="Ade Tiger"
                            ></input>
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="youname@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label>Phone number</label>
                            <input
                                type="number"
                                name="phone"
                                placeholder="Phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label>Role</label>
                            <select
                                id="role"
                                className="select_op"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="" name=""></option>
                                <option value="role_staff" name="staff">
                                    Staff
                                </option>
                                <option value="role_customer" name="customer">
                                    Customer
                                </option>
                            </select>
                        </div>
                        {/* <div className="form-group">
                    <p>Password must contain a minimum of 8 characters</p>
                    <p>Password must contain at least one symbol e.g. @, !</p>
                </div> */}
                        {/* <div className="form-group">
                    <label>Location</label>
                    <input className="select" name="location" type="text" placeholder="Select Location"></input>
                </div> */}
                        <div>
                            <input
                                type="submit"
                                onClick={handleAdd}
                                value="Add"
                                className="addcustomer"
                                href="asas"
                            ></input>
                            {/* <p>
                        Already a user?<NavLink to="/login">Login</NavLink>
                    </p> */}

                            {/* <li> */}
                            {/* <NavLink to="/login" activeClassName='active'>Danh sách khóa học</NavLink>
              </li>
              <Route path="/login" component={Blog} /> */}
                        </div>
                        {show === true && status === 200 ? (
                            <>
                                <Alert status="success" variant="solid">
                                    <AlertIcon className="icon_alert" />
                                    <AlertTitle> Add Customer Success ^ ^</AlertTitle>
                                </Alert>

                                <Navigate to="/showcustomer" replace={true} />
                            </>
                        ) : null}
                        {/* <Alert status="success">
                
                <AlertIcon className="icon_alert" />
                <AlertTitle>Đăng nhập thành công</AlertTitle>
              </Alert> */}
                        {show === true && status !== 200 ? (
                            <>
                                <Alert status="error" variant="solid">
                                    <AlertIcon className="icon_alert" />
                                    <AlertTitle>Error!!!</AlertTitle>
                                </Alert>
                            </>
                        ) : null}
                    </div>
                </div>
                {/* <div className="content_right">
            <div className="menu">
                <ul>
                    <li><a href="default.asp">Home</a></li>
                    <li><a href="news.asp">Contact</a></li>
                </ul>
            </div>
            <div className="content_right_text">
                <div className="p_sub">
                    <p>
                        “Creativity is {"\n"} intelligence {"\n"}having fun”
                    </p>
                </div>
                <div className="p_sub_sub">
                    <p>- Albert Einstein</p>
                </div>
            </div>
        </div> */}
            </div>
        </div>
    );
};
export default Addcustomer;
