// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Registration.css'

// const Registration = () => {
//     const navigate = useNavigate();
//     const [data, setData] = useState({
//         username: "",
//         email: "",
//         phno: "",
//         password: "",
//         conformpassword: ""
//     });

//     const { username, email, phno, password, conformpassword } = data;

//     const changeHandler = (e) => {
//         setData({ ...data, [e.target.name]: e.target.value });
//     }

//     const submitHandler = (event) => {
//         event.preventDefault();
//         if (password === conformpassword) {
//             localStorage.setItem('userData', JSON.stringify(data));
//             alert('Registration Successful');
//             navigate('/Admin');
//         } else {
//             alert('Incorrect password');
//         }
//     }

//     return (
//         <div className='registerbox'>
//             <form onSubmit={submitHandler}>
//             <h1>Registration Form</h1>
//                 <label htmlFor="username">Username:</label>
//                 <input type='text' name='username' value={username} onChange={changeHandler} placeholder='enter your name' /><br />
//                 <label htmlFor="email">Email:</label>
//                 <input type='text' name='email' value={email} onChange={changeHandler} placeholder='enter your mail' /><br />
//                 <label htmlFor="phno">Phone Number:</label>
//                 <input type='text' name='phno' value={phno} onChange={changeHandler} placeholder='enter phone number' /><br />
//                 <label htmlFor="password">Password:</label>
//                 <input type='password' name='password' value={password} onChange={changeHandler} /><br />
//                 <label htmlFor="conformpassword">Confirm Password:</label>
//                 <input type='password' name='conformpassword' value={conformpassword} onChange={changeHandler} /><br />
//                 <button className='btn btn-primary' type="submit">Register</button>
//             </form>
//         </div>
        
//     )
// }

// export default Registration;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import { Col,Row,Container } from 'react-bootstrap';
import Clock from '../Clock';


const Registration = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: "",
        email: "",
        phno: "",
        password: "",
        conformpassword: ""
    });

    const { username, email, phno, password, conformpassword } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (password === conformpassword) {
            localStorage.setItem('userData', JSON.stringify(data));
            alert('Registration Successful');
            navigate('/Admin');
        } else {
            alert('Incorrect password');
        }
    }

    return (
        <>
        <Container>
        <Row  className='background'>
        <Col md={4}>
        <div class="sunbox">
                <div class="cloud front">
                    <span class="left-front"></span>
                     <span class="right-front"></span>
                </div>
                <span class="sun sunshine"></span>
                <span class="sun"></span>
                <div class="cloud back">
                    <span class="left-back"></span>
                     <span class="right-back"></span>
                </div>
            </div>
        </Col>
        <Col md={4}>
        <div className='registerbox'>
            <form onSubmit={submitHandler}>
            <h1>Registration Form</h1>
                <label htmlFor="username">Username:</label>
                <input type='text' name='username' value={username} onChange={changeHandler} placeholder='enter your name' /><br />
                <label htmlFor="email">Email:</label>
                <input type='text' name='email' value={email} onChange={changeHandler} placeholder='enter your mail' /><br />
                <label htmlFor="phno">Phone Number:</label>
                <input type='text' name='phno' value={phno} onChange={changeHandler} placeholder='enter phone number' /><br />
                <label htmlFor="password">Password:</label>
                <input type='password' name='password' value={password} onChange={changeHandler} /><br />
                <label htmlFor="conformpassword">Confirm Password:</label>
                <input type='password' name='conformpassword' value={conformpassword} onChange={changeHandler} /><br />
                <button className='btn btn-primary' type="submit">Register</button>
            </form>
        </div>
        </Col>
           <Clock/>
        
        </Row>
        </Container>
        </>
    )
}

export default Registration;