import React from 'react';

const Performance = ({ info }) => {
  const { roll_no, name, email, phone } = info;
  const style = {};
  return (
    <div className="container">
      <div
        style={{
          border: '2px dashed #ccc',
          padding: '17px',
          paddingBottom: '50px'
        }}
      >
        <h1 style={{ textAlign: 'center' }}>
          <span className="text-danger">STUDENT</span> PROGRESS
        </h1>

        <div
          style={{
            padding: '30rem',
            display: 'inline',
            paddingBottom: '30px'
          }}
        >
          <div style={{ float: 'left' }}>
            <h4>
              {' '}
              <span className="text-danger">Roll No : </span>
              {roll_no}
            </h4>
            <h4>
              {' '}
              <span className="text-danger">Name : </span>
              {name}
            </h4>
          </div>
          <div style={{ float: 'right' }}>
            <h4>
              {' '}
              <span className="text-danger">E-Mail :</span> {email}
            </h4>
            <h4>
              {' '}
              <span className="text-danger">Phone Number : </span>
              {phone}
            </h4>
          </div>
        </div>
        <table
          class="table table-hover"
          style={{
            border: '2px solid #ccc',
            borderRadius: '10px',
            boxShadow: '7px 5px #eee',
            padding: '5rem'
          }}
        >
          <thead>
            <tr>
              <th>SUBJECT NAME</th>
              <th>SUBJECT CODE</th>
              <th>MARKS</th>
              <th>GRADE</th>
              <th>RESULT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cryptography</td>
              <td>IT5012</td>
              <td>67</td>
              <td>C</td>
              <td>PASS</td>
            </tr>
            <tr>
              <td>Information Technology</td>
              <td>IT5011</td>
              <td>57</td>
              <td>D</td>
              <td>PASS</td>
            </tr>
            <tr>
              <td>Grid and Cloud Computing</td>
              <td>IT5312</td>
              <td>76</td>
              <td>B</td>
              <td>PASS</td>
            </tr>
            <tr>
              <td>Data Mining and Data Warehousing</td>
              <td>IT6701</td>
              <td>60</td>
              <td>C</td>
              <td>PASS</td>
            </tr>
            <tr>
              <td>Software Testing</td>
              <td>IT6001</td>
              <td>81</td>
              <td>A</td>
              <td>PASS</td>
            </tr>
          </tbody>
        </table>
        <div style={{ float: 'right' }}>
          <h4>
            <span className="text-danger">CGPA </span>: 7.2
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Performance;
