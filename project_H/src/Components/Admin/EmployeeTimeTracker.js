import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeTimeTracker = () => {
  const [loginTime, setLoginTime] = useState(null);
  const [breakOnTime, setBreakOnTime] = useState(null);
  const [breakOffTime, setBreakOffTime] = useState(null);
  const [logoutTime, setLogoutTime] = useState(null);
  const [totalWorkHours, setTotalWorkHours] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loggedIn, setLoggedIn] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [onBreak, setOnBreak] = useState(false);
  const [loginsBeforeNine, setLoginsBeforeNine] = useState(0);
  const [loginsAfterNine, setLoginsAfterNine] = useState(0);
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(false); // State to track login button disabled status
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pendingTime, setPendingTime] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  useEffect(() => {
    let timerID;
    if (loggedIn) {
      timerID = setInterval(() => {
        if (!onBreak) {
          setElapsedTime(prevElapsedTime => prevElapsedTime + 1000);
        }
      }, 1000);
    } else {
      clearInterval(timerID);
      setElapsedTime(0);
    }
    return () => {
      clearInterval(timerID);
    };
  }, [loggedIn, onBreak]);

  const tick = () => {
    setCurrentTime(new Date());
  };

  const calculateTotalWorkHours = () => {
    if (loginTime && logoutTime) {
      const login = new Date(loginTime);
      const logout = new Date(logoutTime);
      let totalMilliseconds = logout - login;
      
      if (breakOnTime && breakOffTime) {
        const breakOn = new Date(breakOnTime);
        const breakOff = new Date(breakOffTime);
        totalMilliseconds -= breakOff - breakOn;
      }

      totalMilliseconds -= onBreak ? 0 : elapsedTime;

      const totalSeconds = Math.floor(totalMilliseconds / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTotalWorkHours({ hours, minutes, seconds });

      // Ensure minimum 1 hour of work
      const totalHours = totalSeconds / 3600;
      if (totalHours < 1) {
        setPendingTime(1 - totalHours);
      } else {
        setPendingTime(0);
      }
    } else {
      setTotalWorkHours({ hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const handleLogin = () => {
    const currentDateTime = new Date().toISOString();
    const loginHour = new Date().getHours();
    
    if (loginHour < 9) {
      setLoginsBeforeNine(prevCount => prevCount + 1);
    } else {
      setLoginsAfterNine(prevCount => prevCount + 1);
    }

    setLoginTime(currentDateTime);
    setLoggedIn(true);
    setLoginButtonDisabled(true); // Disable login button after clicking

    // Prompt for name and phone number
    const name = prompt('Please enter your name:');
    const phoneNumber = prompt('Please enter your phone number:');
    setName(name || '');
    setPhoneNumber(phoneNumber || '');
  };

  const handleBreakOn = () => {
    const currentDateTime = new Date().toISOString();
    setBreakOnTime(currentDateTime);
    setOnBreak(true);
  };

  const handleBreakOff = () => {
    const currentDateTime = new Date().toISOString();
    setBreakOffTime(currentDateTime);
    setOnBreak(false);
  };

  const handleLogout = () => {
    const currentDateTime = new Date().toISOString();
    setLogoutTime(currentDateTime);
    setLoggedIn(false);
    setLoginButtonDisabled(false); // Enable login button after logout

    // Save user data on logout
    handleSaveData();
    
    // Clear name and phone number
    setName('');
    setPhoneNumber('');
  };

  const handleSaveData = () => {
    calculateTotalWorkHours();
    const data = {
      loginTime,
      breakOnTime,
      breakOffTime,
      logoutTime,
      loginsBeforeNine,
      loginsAfterNine,
      name,
      phoneNumber
    };

    // Ask for confirmation
    const isConfirmed = window.confirm('Are you sure you want to save the data?');
    if (isConfirmed) {
      // If confirmed, proceed with saving data
      axios.post('http://localhost:8000/api/save-employee-time/', data)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error saving employee time data:', error);
        });
    } else {
      // If not confirmed, do nothing
      console.log('Save data operation cancelled.');
    }
  };

  return (
    <div className="container">
      <div className="background">
        <div className='Employeetimetracker' >
      <h2 className="mt-4">Employee Time Tracker</h2>
      <p>Current Time: {currentTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false })}</p>

      <p>Login Time: {loginTime ? new Date(loginTime).toLocaleString() : ''}</p>
      <p>Break On Time: {breakOnTime ? new Date(breakOnTime).toLocaleString() : ''}</p>
      <p>Break Off Time: {breakOffTime ? new Date(breakOffTime).toLocaleString() : ''}</p>
      <p>Logout Time: {logoutTime ? new Date(logoutTime).toLocaleString() : ''}</p>
      <p>Total Work Hours: {totalWorkHours.hours} hours / {totalWorkHours.minutes} minutes / {totalWorkHours.seconds} seconds</p>
      {loggedIn && !onBreak && <p>Elapsed Time: {formatElapsedTime(elapsedTime)}</p>}
      {pendingTime > 0 && <p style={{ color: 'red' }}>Pending Time: {pendingTime.toFixed(2)} hours</p>}
      {name && <p>Name: {name}</p>}
      {phoneNumber && <p>Phone Number: {phoneNumber}</p>}

      <div className="btn-group mt-4" role="group" aria-label="Time Buttons">
        <button type="button" className="btn btn-primary" onClick={handleLogin} disabled={loginButtonDisabled}>Log In</button>
        <button type="button" className="btn btn-primary" onClick={handleBreakOn} disabled={!loggedIn || onBreak}>Break On</button>
        <button type="button" className="btn btn-primary" onClick={handleBreakOff} disabled={!loggedIn || !onBreak}>Break Off</button>
        <button type="button" className="btn btn-primary" onClick={handleLogout} disabled={!loggedIn}>Log Out</button>
        <button type="button" className="btn btn-success" onClick={handleSaveData}>Save Data</button>
      </div>
      </div>
      </div>
    </div>
  );
};

const formatElapsedTime = elapsedTime => {
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours} hours / ${minutes} minutes / ${seconds} seconds`;
};

export default EmployeeTimeTracker;
