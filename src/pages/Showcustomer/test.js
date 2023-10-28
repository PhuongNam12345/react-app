// import React, { useState } from 'react';

// const Login = ({ setToken }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [token, setToken] = useState('');
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const response = await fetch('http://localhost:5000/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//         });

//         const data = await response.json();
//         setToken(data.token);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Username:
//                 <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//             </label>
//             <label>
//                 Password:
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </label>
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;
