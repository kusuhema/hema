
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sigin.css';

const Signin = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: "",
        password: "",
    });

    const { username, password } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const Add = [
        {
            username: 'Admin',
            password: 10101,
        }
    ];

    const submitHandler = (event) => {
        event.preventDefault();
        const New = Add.find(user => user.username === username && user.password.toString() === password);
        const storedData = JSON.parse(localStorage.getItem('userData'));

        if (New) {
            navigate('/admin');
        } else if (storedData) {
            if (username === storedData.username && password === storedData.password) {
                navigate('/user');
            }
            else{
                alert('wrong input');
            }
        }
    }



    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='loginform'>
            <h1>LOGIN FORM</h1><hr />
                <label htmlFor="username">Username:</label>
                <input type='text' name='username' value={username} onChange={changeHandler} placeholder='enter username' /><br />
                <label htmlFor="password">Password:</label>
                <input type='password' name='password' value={password} onChange={changeHandler} /><br />
                <button className='btn btn-primary' type="submit">Login</button><br />
                {/* <button className='btn btn-primary' onClick={registerHandler}>Register</button> */}
                </div>
            </form>
        </div>
    )
}

export default Signin;




















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Sigin.css';

// const Signin = () => {
//     const navigate = useNavigate();
//     const [data, setData] = useState({
//         username: "",
//         password: "",
//     });

//     const { username, password } = data;

//     const changeHandler = (e) => {
//         setData({ ...data, [e.target.name]: e.target.value });
//     }

//     const Add = [
//         {
//             username: 'Admin',
//             password: 10101,
//         }
//     ];

//     const submitHandler = (event) => {
//         event.preventDefault();
//         const New = Add.find(user => user.username === username && user.password.toString() === password);
//         const storedData = JSON.parse(localStorage.getItem('userData'));

//         if (New) {
//             navigate('/User');
//         } else if (storedData) {
//             if (username === storedData.username && password === storedData.password) {
//                 navigate('/Client');
//             }
//             else{
//                 alert('wrong input');
//             }
//         }
//     }



//     return (
//         <div>
//             <div className="login">    
//                 <h4>Login</h4>
//                 <form onSubmit={submitHandler}>
//                 <div className="text_area">
//                     <label htmlFor="username">Username:</label>
//                     <input type='text' name='username' value={username} onChange={changeHandler} placeholder='enter username' /><br />
//                 </div>
//                 <div className="text_area">
//                     <label htmlFor="password">Password:</label>
//                     <input type='password' name='password' value={password} onChange={changeHandler} /><br />
//                     <input type="submit" value="LOGIN" className="btn" />
//                     {/* <button className='btn btn-primary' type="submit">Login</button><br /> */}
//                 </div>
//                 </form>
//             </div>
           
//         </div>
//     )
// }

// export default Signin;