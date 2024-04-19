
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
//             navigate('/admin');
//         } else if (storedData) {
//             if (username === storedData.username && password === storedData.password) {
//                 navigate('/user');
//             }
//             else{
//                 alert('wrong input');
//             }
//         }
//     }



//     return (
//         <div>
//             <form onSubmit={submitHandler}>
//                 <div className='loginform'>
//             <h1>LOGIN FORM</h1><hr />
//                 <label htmlFor="username">Username:</label>
//                 <input type='text' name='username' value={username} onChange={changeHandler} placeholder='enter username' /><br />
//                 <label htmlFor="password">Password:</label>
//                 <input type='password' name='password' value={password} onChange={changeHandler} /><br />
//                 <button className='btn btn-primary' type="submit">Login</button><br />
//                 {/* <button className='btn btn-primary' onClick={registerHandler}>Register</button> */}
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Signin;





import React, { useEffect } from 'react';
import secondlogo from '../../Assets/Logo.png';
import firstlogo from '../../Assets/Logo.png';
import { Button } from 'react-bootstrap';

function Signin() {  
  useEffect(() => {
     
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      {/* First section */}
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 login_first_section d-flex justify-content-center align-items-center my-5'>
              <div>
                <div style={{ textAlign: 'center' }}>
                  <img src={firstlogo} alt={firstlogo} className='img-fluid d-md-none' />
                </div>
                <h1 className='welcome'>Welcome back</h1>
                <h6 className='enteryourdetails'>Welcome back! Please enter your details.</h6>

                <form>
                  <div>
                    <label className='mb-2 mt-2 email'>Email</label>
                    <br />
                    <input type="email" placeholder='Enter Your email' className='emailinputfield mb-3' />
                  </div>
                  <div>
                    <label className='mb-2 mt-2  password'>Password</label>
                    <br />
                    <input type="password" placeholder='Enter Your Password' className='emailinputfield mb-3' />
                  </div>

                  <div className='my-3'>
                    <div className=' d-flex  justify-content-between'>

                      <div className='col-lg-7 d-flex'>
                        <div>
                          <input type="checkbox" />
                          &nbsp; &nbsp;
                        </div>
                        <div>
                          <p className='remember'>Remember for  password</p>
                        </div>
                        &nbsp; &nbsp;
                      </div>
                      <div className='col-lg-4'>
                        <p className='remember remember1'>Forgot Password</p>
                      </div>
                    </div>
                  </div>

                  <Button variant="success" size="lg" className="ps-5 pe-5 btn-lg w-100 mb-3">Sign in</Button>

                  <Button variant="" size="lg" className="ps-5 pe-5 btn-lg w-100 signwithgoogle" style={{ border: '1px solid black' }}>
                    Sign in with Google
                  </Button>

                  <p className='my-5'>Don't have an account? <span className='signup'>Sign up</span></p>

                </form>
              </div>
            </div>

            <div className='col-lg-6 col-md-6 login_second_section d-none d-md-flex justify-content-center align-items-center'>
              <img src={secondlogo} alt={secondlogo} className='img-fluid' />
            </div>

          </div>
        </div>

      </section>

    </>
  )
}

export default Signin;






















// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './Sigin.css';

// // const Signin = () => {
// //     const navigate = useNavigate();
// //     const [data, setData] = useState({
// //         username: "",
// //         password: "",
// //     });

// //     const { username, password } = data;

// //     const changeHandler = (e) => {
// //         setData({ ...data, [e.target.name]: e.target.value });
// //     }

// //     const Add = [
// //         {
// //             username: 'Admin',
// //             password: 10101,
// //         }
// //     ];

// //     const submitHandler = (event) => {
// //         event.preventDefault();
// //         const New = Add.find(user => user.username === username && user.password.toString() === password);
// //         const storedData = JSON.parse(localStorage.getItem('userData'));

// //         if (New) {
// //             navigate('/User');
// //         } else if (storedData) {
// //             if (username === storedData.username && password === storedData.password) {
// //                 navigate('/Client');
// //             }
// //             else{
// //                 alert('wrong input');
// //             }
// //         }
// //     }



// //     return (
// //         <div>
// //             <div className="login">    
// //                 <h4>Login</h4>
// //                 <form onSubmit={submitHandler}>
// //                 <div className="text_area">
// //                     <label htmlFor="username">Username:</label>
// //                     <input type='text' name='username' value={username} onChange={changeHandler} placeholder='enter username' /><br />
// //                 </div>
// //                 <div className="text_area">
// //                     <label htmlFor="password">Password:</label>
// //                     <input type='password' name='password' value={password} onChange={changeHandler} /><br />
// //                     <input type="submit" value="LOGIN" className="btn" />
// //                     {/* <button className='btn btn-primary' type="submit">Login</button><br /> */}
// //                 </div>
// //                 </form>
// //             </div>
           
// //         </div>
// //     )
// // }

// // export default Signin;