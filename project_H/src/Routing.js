import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Signin from './Components/Siginup/Signin';
import Userhomepage from './Components/User/Userhomepage';
import Adminhomepage from './Components/Admin/Adminhomepage';
import Cardd from './Components/Admin/Cardd';
import Registration from './Components/Siginup/Registration';
import Error from './Components/Siginup/Error';
import EmployeeTimeTracker from './Components/Admin/EmployeeTimeTracker';

function Routing() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Signin/>}/>
      <Route path="/admin" element={<Adminhomepage/>}/>
      <Route path="/card" element={<Cardd/>}/>
      <Route path="/Registration" element={<Registration/>}/>
      <Route path="/user" element={<Userhomepage/>}/>
      <Route path="/error" element={<Error/>}/>
      <Route path="/timer" element={<EmployeeTimeTracker/>}/>

      
    </Routes>
    </>
  )
}
export default Routing;