import React, { Fragment } from 'react';
const ShowCard = ({ name, email, phone }) => {
  return (
    <Fragment>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
      </tr>
    </Fragment>
  );
};

export default ShowCard;
