import React, { useState, useEffect } from 'react';
import './showcustomer.css';
import { Navigate, Link } from 'react-router-dom';
import debounce from 'lodash.debounce';
const Login = () => {
    <Navigate to="/addcustomer" replace={true} />;
};
export const Showcustomer = () => {
    const [customers, setCustomers] = useState([]);
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState('');
    const searchFunction = () => {
        // console.log("Searching...");
        async function fetchData() {
            try {
                // Gửi yêu cầu GET đến API và chờ đợi cho phản hồi
                const response = await fetch(`http://localhost:5000/showcustomer?q=${query}&page=${currentPage}&`);
                // Kiểm tra xem yêu cầu có thành công không (ví dụ: mã trạng thái 200 OK)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Chuyển đổi phản hồi từ dạng JSON sang đối tượng JavaScript và chờ đợi cho việc hoàn thành
                const data = await response.json();
                // Xử lý dữ liệu được trả về từ API
                setCustomers(data.People);
                setTotal(data.K);
            } catch (error) {
                // Xử lý lỗi nếu có bất kỳ lỗi nào xảy ra trong quá trình gửi yêu cầu hoặc nhận phản hồi
                console.error('There has been a problem with your fetch operation:', error);
            }
        }
        fetchData();
        // Gọi API tìm kiếm dựa trên searchTerm và xử lý kết quả
        // fetch(`http://localhost:5000/showcustomer?q=${query}&page=${currentPage}&`)
        // .then((response) => response.json())
        // .then((data) =>{
        //    setCustomers(data.People);
        //   setTotal(data.K) })
        // // console.log('Searching for:', query);
        // .catch((error) => console.error(error));
        // // console.log('Searching for:', query);
    };

    const debouncedSearch = debounce(searchFunction, 300);
    useEffect(() => {
        debouncedSearch();
    }, [query, currentPage]);
    // const handleSearch = () => {
    //   fetch(`http://localhost:5000/showcustomer?q=${query}`)
    //     .then((response) => response.json())
    //     .then((data) => setCustomers(data))
    //     .catch((error) => {
    //       console.error(
    //         "There has been a problem with your fetch operation:",
    //         error
    //       );
    //     });
    // };
    // if(customers===nl){
    //   console.log("aaaaaaaa")
    // }
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <>
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
                            <Link to="/login">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Contact</Link>
                        </li>
                        <li>{localStorage.getItem('token') ? null : <Link to="/login">Login</Link>}</li>
                        <li>
                            <Link to="/logout">Log out</Link>
                        </li>
                    </ul>
                </div>

                <div className="table_show">
                    <div>
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search by fullname"
                        />
                        {/* <input type="text" placeholder="Search fullname"/> */}
                        <button type="sumit">Search</button>
                    </div>
                    <h2>List Customers</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Fullname</th>
                                <th>Emaill</th>
                                <th>Phone</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!!customers &&
                                customers.map((item, index) => (
                                    <tr key={index + 1}>
                                        <td>{index + 1}</td>
                                        <td>{item.Fullname}</td>
                                        <td>{item.Email}</td>
                                        <td>{item.Phone}</td>
                                        <td>{item.Address}</td>
                                    </tr>
                                ))}
                            <tr>
                                <td colSpan="5">
                                    <Link to="/addcustomer">
                                        <button name="button" value="Addcustomer" type="button" onclick={Login}>
                                            Add customer{' '}
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="page">
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === total}>
                    Next
                </button>
            </div>
        </>
    );
};
export default Showcustomer;
