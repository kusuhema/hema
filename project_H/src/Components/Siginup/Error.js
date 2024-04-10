
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Error.css';

const Error = () => {
  const [selectedLeaveType, setSelectedLeaveType] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reason, setReason] = useState('');

  // Save form data to local storage whenever the state changes
  useEffect(() => {
    const leaveData = { selectedLeaveType, startDate, endDate, reason };
    localStorage.setItem('leaveData', JSON.stringify(leaveData));
  }, [selectedLeaveType, startDate, endDate, reason]);

  // Reset form data to its initial state
  const resetForm = () => {
    setSelectedLeaveType("");
    setStartDate(null);
    setEndDate(null);
    setReason("");
  };

  const leaveTypes = [
    { value: "vacation", label: "Vacation" },
    { value: "sick", label: "Sick" },
    { value: "bereavement", label: "Bereavement" },
    { value: "personal", label: "Personal" },
    { value: "jury_duty", label: "Jury Duty" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage when the form is submitted
    const leaveData = { selectedLeaveType, startDate, endDate, reason };
    localStorage.setItem('leaveData', JSON.stringify(leaveData));
    console.log('Leave request submitted:', leaveData);
  };

  // Get form data from local storage when the component is mounted
  useEffect(() => {
    const leaveData = JSON.parse(localStorage.getItem('leaveData'));
    if (leaveData) {
      setSelectedLeaveType(leaveData.selectedLeaveType);
      setStartDate(leaveData.startDate);
      setEndDate(leaveData.endDate);
      setReason(leaveData.reason);
    }
  }, []);

  return (
    <div className="background">
    <form className='leavetype' onSubmit={handleSubmit}>
      <label  htmlFor="leaveType">Type</label>
      <select
        value={selectedLeaveType}
        onChange={(e) => setSelectedLeaveType(e.target.value)}
      >
        <option value="">Select leave type</option>
        {leaveTypes.map((type) => (
          <option key={type.value} value={type.value}>
            {type.label}
          </option>
        ))}
      </select>
      <br />

      <label htmlFor="startDate">Start Date</label>
      <DatePicker
        id="startDate"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy-MM-dd"
      />
      <br />

      <label htmlFor="endDate">End date</label>
      <DatePicker
        id="endDate"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        dateFormat="yyyy-MM-dd"
      />
      <br />

      <label htmlFor="reason">Reason</label>
      <textarea id="reason" value={reason} onChange={(e) => setReason(e.target.value)} />
      <br />

      <button type="submit">Done</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
    </div>
  );
};

export default Error;