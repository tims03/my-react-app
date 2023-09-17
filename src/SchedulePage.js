import React from 'react';

const SchedulePage = ({ responseData }) => {
  return (
    <div className="container mt-5">
      <h1>Generated Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Course No</th>
            <th>Instructor</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Building</th>
            <th>Room</th>
            <th>CRN</th>
            <th>GPA</th>
          </tr>
        </thead>
        <tbody>
          {responseData.map((dataItem, index) => (
            <tr key={index}>
              <td>{dataItem.subject}</td>
              <td>{dataItem.courseNo}</td>
              <td>{dataItem.instructor}</td>
              <td>{dataItem.startTime}</td>
              <td>{dataItem.endTime}</td>
              <td>{dataItem.building}</td>
              <td>{dataItem.room}</td>
              <td>{dataItem.crn}</td>
              <td>{dataItem.gpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchedulePage;