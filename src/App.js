import React, { useState } from 'react';

const App = () => {
  const [subject, setSubject] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [tableData, setTableData] = useState([]);

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleClassNumberChange = (event) => {
    setClassNumber(event.target.value);
  };

  const handleAddRow = () => {
    if (subject && classNumber) {
      const newRow = {
        subject,
        classNumber,
      };

      setTableData([...tableData, newRow]);
      setSubject('');
      setClassNumber('');
    }
  };

  return (
    <div>
      <h1>Class Schedule</h1>
      <div>
        <label htmlFor="subject">Subject:</label>
        <select id="subject" value={subject} onChange={handleSubjectChange}>
          <option value="">Select a Subject</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select>
      </div>
      <div>
        <label htmlFor="classNumber">Class Number:</label>
        <input
          type="text"
          id="classNumber"
          value={classNumber}
          onChange={handleClassNumberChange}
        />
      </div>
      <div>
        <button onClick={handleAddRow}>Add Row</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Class Number</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.subject}</td>
              <td>{row.classNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
