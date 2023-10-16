import "./App.css";

function App() {
return (
<div className="app">
<div className="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="671" height="618" viewBox="0 0 671 618" fill="none">
  <path opacity="0.05" d="M-83.9121 567.869C-27.9433 528.185 -6.7814 475.86 -20.4263 410.896C-40.8936 313.449 -18.503 251.242 43.1875 246.178C104.878 241.115 163.096 311.765 178.681 396.334C194.266 480.903 280.957 483.243 315.34 466.488C349.724 449.733 369.462 415.948 368.073 379.129C365.001 297.7 253.327 232.819 255.94 157.746C258.553 82.6743 350.376 55.1036 407.979 122.715C410.817 126.046 413.708 129.181 416.644 132.126C475.674 191.34 553.026 173.844 588.396 129.923C649.731 53.7617 621.761 -27.6337 523.35 -82.8623C375.196 -169.904 296.342 -265.311 286.789 -369.083" stroke="url(#paint0_linear_2_82)" stroke-width="100" stroke-linecap="round"/>
  <defs>
    <linearGradient id="paint0_linear_2_82" x1="-83.9121" y1="567.869" x2="604.432" y2="-364.791" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4E7577"/>
      <stop offset="1" stop-color="#65D5FC"/>
      <stop offset="1" stop-color="#23445B"/>
    </linearGradient>
  </defs>
</svg>
    </div>
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
        <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">Contact</a></li>  
        </ul>
        
    </div>
    <div className="content">
        <div className="content_left">
            {/* <div className="text_title">
                <p>Kreativ</p>
            </div> */}

            <div className="form">
                <div className="text_content">
                    <p>Let's get you started</p>
                </div>
                <div className="form-group">
                    <label>Full name</label>
                    <input type="text" placeholder="Ade Tiger"></input>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" placeholder="youname@gmail.com"></input>
                </div>
                <div className="form-group">
                    <label>Phone number</label>
                    <input type="number"></input>
                </div>
                <div className="form-group">
                    <label>Create Password</label>
                    <input type="password"></input>
                </div>
                <div className="form-group">
                    <p>Password must contain a minimum of 8 characters</p>
                    <p>Password must contain at least one symbol e.g. @, !</p>
                </div>
                <div className="form-group">
                    <label>Location</label>
                    <select className="select" placeholder="Select Location">

                    </select>
                </div>
                <div className="login">
                    <input type="submit" value="Sign up" className="signup"></input>
                    <p>
                        Already a user?<a href="#">Login</a>
                    </p>
                </div>
            </div>
        </div>
        <div className="content_right">
            {/* <div className="menu">
                <ul>
                    <li><a href="default.asp">Home</a></li>
                    <li><a href="news.asp">Contact</a></li>
                </ul>
            </div> */}
            <div className="content_right_text">
                <div className="p_sub">
                    <p>“Creativity is {'\n'} intelligence {'\n'}having fun”</p>
                </div>
                <div className="p_sub_sub">
                    <p>- Albert Einstein</p>
                </div>
            </div>
        </div>
    </div>
</div>
);
}

export default App;
