import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const Tabel = ({ details, history }) => {
  const onClickHandler = roll_no => {
    console.log(roll_no);
    const PATH = `/result/${roll_no}`;
    history.push(PATH);
  };
  return (
    <div style={{ marginTop: '30px', border: '2px dashed #ccc' }}>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ROLL NUMBER</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {details.map(user => (
            <tr
              id={user.phone}
              onClick={onClickHandler.bind(this, user.roll_no)}
            >
              <td>{user.roll_no}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabel;
