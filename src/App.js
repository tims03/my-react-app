import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

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
    <div className="container mt-5" style={{ background: '#e9e9e9' }}>
    <div className="row d-flex justify-content-center">
      <h1 className="text-center" style={{ fontSize: '50px', fontWeight: 'bold' }}>Class Schedule</h1>
      <div className="mb-3 col-md-6">
        <label htmlFor="subject" className="form-label">Subject:</label>
        <select id="subject" className="form-select" value={subject} onChange={handleSubjectChange}>
          <option value="">Select a Subject</option>
          <option value="AOE">AOE</option>
          <option value="ALCE">ALCE</option>
          <option value="AAEC">AAEC</option>
          <option value="ALS">ALS</option>
          <option value="AINS">AINS</option>
          <option value="APSC">APSC</option>
          <option value="APS">APS</option>
          <option value="AHRM">AHRM</option>
          <option value="ARBC">ARBC</option>
          <option value="ARCH">ARCH</option>
          <option value="AAD">AAD</option>
          <option value="ART">ART</option>
          <option value="BDS">BDS</option>
          <option value="BCHM">BCHM</option>
          <option value="BIOL">BIOL</option>
          <option value="BSE">BSE</option>
          <option value="BMVS">BMVS</option>
          <option value="BMSP">BMSP</option>
          <option value="BMES">BMES</option>
          <option value="BC">BC</option>
          <option value="BUS">BUS</option>
          <option value="BIT">BIT</option>
          <option value="EDCT">EDCT</option>
          <option value="CHE">CHE</option>
          <option value="CHEM">CHEM</option>
          <option value="CHN">CHN</option>
          <option value="CINE">CINE</option>
          <option value="CEE">CEE</option>
          <option value="CLA">CLA</option>
          <option value="COS">COS</option>
          <option value="COMM">COMM</option>
          <option value="CMST">CMST</option>
          <option value="CMDA">CMDA</option>
          <option value="CS">CS</option>
          <option value="CEM">CEM</option>
          <option value="CONS">CONS</option>
          <option value="CEP">CEP</option>
          <option value="CRIM">CRIM</option>
          <option value="CSES">CSES</option>
          <option value="DASC">DASC</option>
          <option value="DANC">DANC</option>
          <option value="ECON">ECON</option>
          <option value="EDCO">EDCO</option>
          <option value="EDCI">EDCI</option>
          <option value="EDEP">EDEP</option>
          <option value="ECE">ECE</option>
          <option value="ENGR">ENGR</option>
          <option value="ENGE">ENGE</option>
          <option value="ESM">ESM</option>
          <option value="ENGL">ENGL</option>
          <option value="ENT">ENT</option>
          <option value="ENSC">ENSC</option>
          <option value="FCS">FCS</option>
          <option value="FMD">FMD</option>
          <option value="FIN">FIN</option>
          <option value="FNAD">FNAD</option>
          <option value="FA">FA</option>
          <option value="FIW">FIW</option>
          <option value="FST">FST</option>
          <option value="FL">FL</option>
          <option value="FREC">FREC</option>
          <option value="VT">VT</option>
          <option value="FR">FR</option>
          <option value="GEOG">GEOG</option>
          <option value="GEOS">GEOS</option>
          <option value="GER">GER</option>
          <option value="GR">GR</option>
          <option value="HEB">HEB</option>
          <option value="HIST">HIST</option>
          <option value="HORT">HORT</option>
          <option value="HTM">HTM</option>
          <option value="HD">HD</option>
          <option value="HNFE">HNFE</option>
          <option value="HUM">HUM</option>
          <option value="ISE">ISE</option>
          <option value="IDS">IDS</option>
          <option value="EDIT">EDIT</option>
          <option value="ISC">ISC</option>
          <option value="ITDS">ITDS</option>
          <option value="IS">IS</option>
          <option value="ITAL">ITAL</option>
          <option value="JPN">JPN</option>
          <option value="JMC">JMC</option>
          <option value="JUD">JUD</option>
          <option value="KOR">KOR</option>
          <option value="LAR">LAR</option>
          <option value="LAT">LAT</option>
          <option value="LDRS">LDRS</option>
          <option value="LAHS">LAHS</option>
          <option value="MGT">MGT</option>
          <option value="MKTG">MKTG</option>
          <option value="MSE">MSE</option>
          <option value="MATH">MATH</option>
          <option value="ME">ME</option>
          <option value="MTRG">MTRG</option>
          <option value="MN">MN</option>
          <option value="AROTC">AROTC</option>
          <option value="MS">MS</option>
          <option value="AS">AS</option>
          <option value="MINE">MINE</option>
          <option value="MUS">MUS</option>
          <option value="NANO">NANO</option>
          <option value="NR">NR</option>
          <option value="NEUR">NEUR</option>
          <option value="NSEG">NSEG</option>
          <option value="PSVP">PSVP</option>
          <option value="PHIL">PHIL</option>
          <option value="PPE">PPE</option>
          <option value="PHYS">PHYS</option>
          <option value="PPWS">PPWS</option>
          <option value="PSCI">PSCI</option>
          <option value="PHS">PHS</option>
          <option value="PORT">PORT</option>
          <option value="PM">PM</option>
          <option value="PSYC">PSYC</option>
          <option value="PR">PR</option>
          <option value="REAL">REAL</option>
          <option value="RLCL">RLCL</option>
          <option value="RED">RED</option>
          <option value="RUS">RUS</option>
          <option value="SPES">SPES</option>
          <option value="SPIA">SPIA</option>
          <option value="STS">STS</option>
          <option value="STL">STL</option>
          <option value="SOC">SOC</option>
          <option value="SPAN">SPAN</option>
          <option value="STAT">STAT</option>
          <option value="SUMA">SUMA</option>
          <option value="SBIO">SBIO</option>
          <option value="SYSB">SYSB</option>
          <option value="EDTE">EDTE</option>
          <option value="TA">TA</option>
          <option value="TBMH">TBMH</option>
          <option value="UNIV">UNIV</option>
          <option value="UH">UH</option>
          <option value="REG">REG</option>
          <option value="UAP">UAP</option>
          <option value="WATR">WATR</option>
          <option value="WGS">WGS</option>
        </select>
      </div>
      <div className="mb-3 col-md-6">
        <label htmlFor="classNumber" className="form-label">Class Number:</label>
        <input
          type="text"
          id="classNumber"
          className="form-control"
          value={classNumber}
          onChange={handleClassNumberChange}
        />
      </div>
      </div>

      <div className="col-md-6 mb-3">
        <button className="btn btn-dark" onClick={handleAddRow}>Add Row</button>
        <button className="btn btn-dark" onClick={handleAddRow} style={{ marginLeft: '10px' }}>Generate Schedule</button>
      </div>

      <table className="table mt-3">
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
